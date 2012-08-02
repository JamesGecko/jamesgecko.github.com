---
layout: page
title: Low fi gaming
---
I use a laptop with an Intel GMA X3100 graphics card. This is not the snazziest card around, and some games run poorly on it. This can be remidied.

##Rayman Origins
Rayman has next to no graphics options. It runs smoothly, but it's going to slow down if your machine isn't up to par. This is especially notable in the first world. I'm not sure why the game does this instead of dropping frames; the phsyics engine may be dependent on every frame being rendered or something.

A possible fix is to run the game at a resolution lower than the minimum 1020x768 in the control panel. Here's an example reg file:

    Windows Registry Editor Version 5.00
    
    [HKEY_CURRENT_USER\Software\Ubisoft\RaymanOrigins\Settings]
    "ScreenWidth"="640"
    "ScreenHeight"="480"
    "FullScreen"=dword:00000001


##Dungeon Defenders
This uses the Unreal 3 engine, which is fortunately extremely tweakable. The config lives at

    C:\Program Files (x86)\Steam\steamapps\common\dungeon defenders\UDKGame\Config\UDKEngine.ini

on my system. My tweaked config may be viewed [on GitHub](https://gist.github.com/b7df3f6b588df936478e).