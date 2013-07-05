---
layout: post
title: "Setting up the Netis WF-2116 wifi adapter on Fedora"
date: 2013-07-05 15:13
comments: true
categories:
- Linux
- Fedora
- Howto
---

The Netis WF-2116 is a nice device. It's a USB wifi adapter with a long cord
and bunny ears. It provides far better reception than any little USB doggle
I've tried. In addition to the detachable antennas, I purchased it specifically
because the box said it was Linux compatible. I had visions of plugging it in
and having wifi Just Work.

Well, if you came here via Google, you already know that's not the case. At
the time of writing, the device does _not_ Just Work out of the box on any
major distribution of Linux I've tried. Ubuntu 13.04 and Fedora 19 both detect
it and show a list of networks, but just ask for a password repeatedly when I
try to connect.

If you look at your wpa_supplicant log, you might see something like this:

```
wlp7s0u2: SME: Trying to authenticate with 30:85:a9:8a:e9:40
(SSID='GeckoNet' freq=2462 MHz) wlp7s0u2: Trying to associate with
30:85:a9:8a:e9:40 (SSID='GeckoNet' freq=2462 MHz) wlp7s0u2: Associated with
30:85:a9:8a:e9:40 wlp7s0u2: WPA: Key negotiation completed with
30:85:a9:8a:e9:40 [PTK=CCMP GTK=TKIP] wlp7s0u2: CTRL-EVENT-CONNECTED -
Connection to 30:85:a9:8a:e9:40 completed [id=0 id_str=] wlp7s0u2:
CTRL-EVENT-DISCONNECTED bssid=30:85:a9:8a:e9:40 reason=3 locally_generated=1
wlp7s0u2: Failed to initiate AP scan
```

The `reson=3` bit normally indicates that it's trying to roam between networks,
which doesn't make any sense here. Clearly, further investigation is warrented.
In theory, this device uses the rtl8192cu driver in the kernel. At the time of
writing, the kernel driver is unreliable. To quote [ArchWiki][1],

> The driver is now in the kernel, but many users have reported being unable to
> make a connection although scanning for networks does work.

Among other things! Once loaded the `rtl8192cu` driver conflicted with
drivers for other usb wifi doggles I tried. Silly me, thinking that I could
just unplug a device and not have its driver poision the well.

So, we're going to have to compile some stuff. There's a zip file on the CDROM
and [on the Netis website][2]. It's called `netis WF-2116 Drivers V3.4.4 for
Linux.zip`, and it's byte-for-byte identical to the official
`RTL8188C_8192C_USB_linux_v3.4.4_4749.20121105.zip` [driver on Realtek's
website][3]. The casual observer may verify this using the `cmp -l` command.

Unfortunately, the driver isn't up to date and won't compile on recent kernels.
You'll see things like

```
In file included from /home/james/Downloads/RTL8188C_8192C_USB_linux_v3.4.4_4749.20121105/driver/rtl8188C_8192C_usb_linux_v3.4.4_4749.20121105/core/rtw_cmd.c:23:0:
/home/james/Downloads/RTL8188C_8192C_USB_linux_v3.4.4_4749.20121105/driver/rtl8188C_8192C_usb_linux_v3.4.4_4749.20121105/include/osdep_service.h: In function ‘thread_enter’:
/home/james/Downloads/RTL8188C_8192C_USB_linux_v3.4.4_4749.20121105/driver/rtl8188C_8192C_usb_linux_v3.4.4_4749.20121105/include/osdep_service.h:575:2: error: implicit declaration of function ‘daemonize’ [-Werror=implicit-function-declaration]
  daemonize("%s", "RTKTHREAD");
  ^
In file included from /home/james/Downloads/RTL8188C_8192C_USB_linux_v3.4.4_4749.20121105/driver/rtl8188C_8192C_usb_linux_v3.4.4_4749.20121105/include/drv_types.h:69:0,
                 from /home/james/Downloads/RTL8188C_8192C_USB_linux_v3.4.4_4749.20121105/driver/rtl8188C_8192C_usb_linux_v3.4.4_4749.20121105/core/rtw_cmd.c:24:
/home/james/Downloads/RTL8188C_8192C_USB_linux_v3.4.4_4749.20121105/driver/rtl8188C_8192C_usb_linux_v3.4.4_4749.20121105/include/rtw_recv.h: In function ‘rxmem_to_recvframe’:
/home/james/Downloads/RTL8188C_8192C_USB_linux_v3.4.4_4749.20121105/driver/rtl8188C_8192C_usb_linux_v3.4.4_4749.20121105/include/rtw_recv.h:626:30: warning: cast from pointer to integer of different size [-Wpointer-to-int-cast]
  return (union recv_frame*)(((uint)rxmem>>RXFRAME_ALIGN) <<RXFRAME_ALIGN) ;
                              ^
/home/james/Downloads/RTL8188C_8192C_USB_linux_v3.4.4_4749.20121105/driver/rtl8188C_8192C_usb_linux_v3.4.4_4749.20121105/include/rtw_recv.h:626:9: warning: cast to pointer from integer of different size [-Wint-to-pointer-cast]
  return (union recv_frame*)(((uint)rxmem>>RXFRAME_ALIGN) <<RXFRAME_ALIGN) ;
         ^
cc1: some warnings being treated as errors
make[2]: *** [/home/james/Downloads/RTL8188C_8192C_USB_linux_v3.4.4_4749.20121105/driver/rtl8188C_8192C_usb_linux_v3.4.4_4749.20121105/core/rtw_cmd.o] Error 1
make[1]: *** [_module_/home/james/Downloads/RTL8188C_8192C_USB_linux_v3.4.4_4749.20121105/driver/rtl8188C_8192C_usb_linux_v3.4.4_4749.20121105] Error 2
make: *** [modules] Error 2
```

A super great guy, Tim Phillips, made the tedious journey through the warnings
and [fixed the drivers up so they'll work][4]. I've mirrored the changes
[in a gist][5] so you can download them without registering on the Ubuntu
Forums. In fact, if you're using Ubuntu, you can just
[download this package][6], skip the rest of this guide, and never have to
worry about this again. Fedora users must use the script to compile the
drivers.

After compilation and installation, we have to blacklist the built in drivers.
Edit `/etc/modprobe.d/blacklist` and add

```
# Blacklist native RealTek 8188CUs drivers
blacklist rtl8192cu
blacklist rtl8192c_common
blacklist rtlwifi
```

Then we'll want the kernel to use our compiled driver every time there's a
reboot. Edit `/etc/modules-load.d/8192cu.conf` and insert the name of the
module we want to load, `8192cu`.

Reboot for good measure. It works! For me, at least.

There's a few things to note here.

1. Unplugging the device appears to hard lock the computer. None of 
input devices respond.
2. Every time there's a kernel update, we'll have to recompile that module.
There's a tool called `dkms` which will do this automatically, but that'll have
to be another post.

Enjoy!

[1]: https://wiki.archlinux.org/index.php/Wireless_Setup#rtl8192cu
[2]: http://www.netis-systems.com/en/Downloads/Details/?id=71
[3]: http://www.realtek.com.tw/downloads/downloadsView.aspx?Langid=1&PFid=48&Level=5&Conn=4&ProdID=274&DownTypeID=3&GetDown=false&Downloads=true#2742
[4]: http://ubuntuforums.org/showthread.php?p=12620866#post12620866
[5]: https://gist.github.com/jamesgecko/5936488
[6]: https://code.google.com/p/realtek-8188cus-wireless-drivers-3444749-ubuntu-1304/
