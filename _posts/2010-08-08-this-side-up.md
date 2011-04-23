---
layout: post
title: This Side Up
---
 
My Ludum Dare 18 entry is [complete](http://www.ludumdare.com/compo/ludum-dare-18/?action=preview&amp;uid=1724). Grab it [here](http://jamesgecko.com/ld/thisendup.zip) and the (public domain) Game Maker source [here](http://jamesgecko.com/ld/thisendup_source.zip). The result is better than I expected, but not amazing. But hey, for about fifteen hours of work in my first 48 hour competition, it's not bad.

<img src="http://jamesgecko.com/user/files/blog/ld18-screen1.png" alt="ld18-screen1.png" width="320" height="240" />

I suppose I should write up a post mordum.

###What went well
For my first competition, I'm happy that I even came out with a finished game.

Using a tool I'm intimately familiar with was a good choice. I hadn't used Game Maker for a real project quite some time, but the important things have barely changed since the 4.x days.

I still like the concept of defeating an enemy, watching it flip upside down, then using it's overturned belly as a platform. The rhinoceros rabbit was also fun, although the code behind it was a pretty big last minute hack.

###What did not
Game Maker does not have an amazing workflow. I was using the "lite" version, and importing images was a pain. It especially didn't like transparent areas; I was pasting in images from [Paint.net](http://www.getpaint.net/) and then having to change the background transparency for every single sprite. Additionally, I had to reenter the tileset placement details and finagle with the level editor's tendency to corrupt the tiled background after major tileset modifications.

My engine going in was a quickie two hour job. As simple as it was, it turned out to have quite a number of bugs which surfaced dramatically when I started trying to implement gameplay. Additionally, I needed to have more than just player code written; a generic enemy object or some simple physics to inherit from would have helped a lot when I started slamming out code in a panic.

I didn't have a vast amount of time to work on the project. Maybe fifteen hours or so. This might not have been a big deal if my engine had been more complete.

Almost all the level design and gameplay came together in the last two hours. I noticed that people like [Notch](http://www.ludumdare.com/compo/author/notch/) and [Sophie H](http://www.ludumdare.com/compo/author/girlflash/) got something playable with as few game objects as possible as soon as possible. Several other people avoided making games that required much level design at all, a choice a began to envy in my last hour of work.

###Takeaway
I'm going to switch to a different platform else next competition; something other than Game Maker. Aside from the annoying workflow, I don't like excluding people running operating systems other than Windows. I'm not comfortable enough with Unity3D and 3D modeling for it to really be a great choice. If I get really good at it in the meantime while tinkering with StarCats IV, I may consider it. LOVE2D is one possibility; the ease of LUA, all the built in classes, and the ease of packaging things up for distribution makes it very attractive. FlashPunk or Flixel is another choice. Flash may be a dying platform, but right now it runs on just about any desktop operating system and flash game developers get crazy numbers of people playing their stuff. It's no coincidence that it's preferable to have a web-based LD entry; the lower the barrier to entry, the more ratings you'll get. Finally, there's Javascript. [Akihabara](http://www.kesiev.com/akihabara/) looks like a decent framework, and I *am* using web tech a lot at my current job.

I should also build up a decent engine before the next competition. But that would require planning and foresight. Ha! Maybe I'll just get good at a development platform instead.
