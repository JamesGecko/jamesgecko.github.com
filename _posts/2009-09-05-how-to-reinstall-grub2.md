---
layout: post
title: How to reinstall GRUB2
---
 
So, you just had to go and (re)install Windows. But you were dual booting Ubuntu 9.10 alpha, or another Linux distro that ships with the brand new GRUB2. Now Windows has taken over the MBR and you don't have the menu to boot into Linux anymore! None of the hundreds of tutorials for <a href="http://lmgtfy.com/?q=reinstall+grub">reinstalling GRUB</a> work with GRUB2! What are you going to do? Well, you could <a href="http://grub.enbug.org/Manual">read the fine manual</a>, but you're too lazy. That's why you're reading this post.

Right. Fire up your Linux CD. I used the Ubuntu 9.10 disk. Open up the file manager and find your Linux partition. Click the location bar mode switcher button thing to the left of the path. Select the path and copy it with Ctrl C. It will look ugly; mine was <em>/media/e183b92c-5171-4a2f-8883-fde441cfe962</em>. Eww.

Now open a terminal and type the following:

sudo grub-install --root-directory=YourUglyPathHere /dev/sda

You can copy and paste your ugly path into the terminal with Ctrl Shift C. The "/dev/sda" part may be different for you. Use the "df" command to double check what disk you need to use if you're not sure. Do not type a number after the sda part.

If all went well, you won't get any error messages. Reboot and GRUB2 should have been restored to it's rightful place. Huzzah, etc.
