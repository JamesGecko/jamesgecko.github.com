---
layout: post
title: Ubuntu Unity
---
 
I installed the *Ubuntu 10.10 Netbook edition* on my mom's MSi Wind this weekend. It comes with a brilliant relatively new interface, Unity, which does a lot of things differently to making using a netbook more enjoyable. There is little about the ideas Unity is based on which I do not approve of. [Ryan Paul went over some of the major features here](http://arstechnica.com/open-source/reviews/2010/10/ars-reviews-ubuntu-1010-wip.ars/7), so I'll skip them.

However, the current implementation is lame. It's cardinal sin is that it's slow. Netbooks are towards near the low end of the market in terms of processing power, and any interface built for them should take this into consideration. Unity did not. There's noticeable lag simply when mousing over app icons to see the labels.

When you click on the Ubuntu button in the top left corner of the screen, you are presented with a launcher which includes a [Quicksilver](http://en.wikipedia.org/wiki/Quicksilver_(software)) / [Launchy](http://www.launchy.net/) / [Gnome Do](http://do.davebsd.com/) style text box. The idea is that when you start typing the name of an app in the box and press enter, the launcher will display live search results, narrowing down the search to the program you want as you type. Like Google's Instant Search. The problem is that a single search can take up to ten seconds, and the hard disk will be thrashing like crazy during this time. This is partially because tens of thousands of non-installed apps are included in the search. Unity also seems to crash every time a search takes an unusually long time.

Mostly, I feel like complaining because Unity wasn't written using the [Enlightenment libraries](http://www.enlightenment.org/) (EFL). I was used an extremely pretty e17 desktop like, six or seven years ago. This was on a 300MHz machine without 3D hardware, and it was all smooth as butter. Why write a desktop environment which takes advantage of 3D acceleration for devices that have some of the weakest graphics cards in the market?

One of [Mozilla stated goals for Firefox](https://wiki.mozilla.org/Firefox/Roadmap) is to build a product that responds to user action with no more than a 50 millisecond delay. Unity could benefit a lot from such a mission statement.

Update: Oh, hey. Looks like some fine fellows have been building [Unity 2D](http://bfiller.wordpress.com/2011/01/13/unity-2d/) on the Qt toolkit. It's not EFL, but it's a vast improvement. Good work!