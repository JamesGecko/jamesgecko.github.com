---
layout: post
title: Opera Unite
---
 
After a viral countdown-style launch, Opera has finally unveiled <a href="http://unite.opera.com/">their secret plan to revolutionize the internet</a>. It pretty much just involves bundling a basic, easy to use web server with their browser. It's pretty slick, actually. It's strictly HTML and Javascript, so no PHP or Python server side magic allowed. Instead, they've got an ajaxy Javascript API thing built in. You take advantage of it by programming little webapps called services. Some of the example services include a browser-based media player, an no-frills HTML webserver, and an IRC-like chat room. Nifty. They're all sandboxed and such so they theoretically can't be exploited to gain access to the rest of your computer. We shall see. Right now it is extremely reminiscent of <a href="http://www.tonido.com/index.html">Tonido</a>.

Alas, due to all this being served from home computers, there are some obvious downsides. First, residential upload speeds are very slow. It appears that the future marches on at the speed of dialup. Second, when the computer is off, no one can access your Unite pages. Third, when the <em>browser</em> is closed, no one can access your Unite pages.

One of Opera's selling points on Unite is that it frees you from the tyranny of cloud computing; from other people holding your data hostage. In the real world, to even start Unite, you have to register with Opera to get a URL. It's a mandatory part of the unite process. This is apparently so they can show fancy 404 pages when your computer is off and use their servers as a proxy to your page. On the plus side, once the service is up you can just connect to your IP address and port 8840 and use it like you would any other IP. Services DO connect back to Opera to get lists of other users who are also using the service, however. Also, My Opera links are splattered all <em>over</em> the place. So close, yet so far.

A potentially scary side effect of the service might be if someone figures out how to exploit it with <a href="http://bergie.iki.fi/blog/browser_geolocation_without_gps-quite_accurate_enough/">GeoLocation</a>. This may be a plus for using Opera's proxy.

I'd sort of like to see Unite open sourced, but something tells me that most of the security vulnerabilities will lie in Opera's Javascript implementation, and the chances of us getting the source to that is pretty low.

With all it's faults, you must admit that it's still pretty darn neat. Isn't this a step closer towards what Tim Berners-Lee was <a href="http://www.w3.org/People/Berners-Lee/ShortHistory">originally going for </a>with the web?

So. There are some services which someone needs to write immediately.
<ul>
	<li>A wiki. Either <a href="http://stickwiki.sourceforge.net/">Wiki on a Stick</a> or <a href="http://www.tiddlywiki.com/">TiddlyWiki</a> would probably function decently as basses for this thing. Go go go!</li>
	<li>A <a href="http://ma.tt/2009/05/how-p2-changed-automattic/">Prologue2</a>-like threaded microblogging/forum implementation</li>
	<li>A <a href="http://abicollab.net/">AbiCollab</a> service. Just let the user post a list of documents and password protect each one.</li>
</ul>
So. It's not revolutionary, but it is a neat idea and an interesting implementation. <a href="http://unite.opera.com">Go mess with it.</a>
