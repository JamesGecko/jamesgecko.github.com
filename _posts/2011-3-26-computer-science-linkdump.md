---
layout: post
title: Computer Science Linkdump
---

In college, I always hated in-class presentations. What if the material I taught was too simple, or too obvious? Inevitably, I always overcompensated; delivering a jargon filled speech the rest of the class might or might not have fully grasped. But really? I don't know *most* things. So here's a link dump of pages I've learned from recently.

##Tries
[Trites are a neat, compact data structure](http://stevehanov.ca/blog/index.php?id=120). They compress really well, but take some time to decompress in slow languages or on slow platforms. Be sure to read the posts on about other, more searchable data structures.

Also see this neat list of [lesser known data structures](http://stackoverflow.com/questions/500607/what-are-the-lesser-known-but-cool-data-structures).

##Dependency injection
Right. When you have an object? And it uses another object? That second object is a dependency. The goal here is to make objects as independent as possible. You should be able to modify any random depenency (to a degree) without having other objects break. So you give your object a way to add objects it uses (dependencies) from the outside.

The example that did it for me was [Twitto](http://twitto.org/). All design patterns should fit inside a tweet. The author of Twitto also has good [a series of posts](http://fabien.potencier.org/article/11/what-is-dependency-injection) on the topic, and ircmaxell has a compact and to the point [analogy](http://blog.ircmaxell.com/2011/03/follow-up-dependency-injection-analogy.html).

##Test driven development
Yeah, I'm late to the party on [this one](http://blog.extracheese.org/2009/11/how_i_started_tdd.html). I sort of wish I'd picked these up in school, as they seem like they would have been handy for CS assignments.

[RubyKoans](http://rubykoans.com/), in addition to being an excellent way to learn Ruby, also serve as an introduction to the idea.

Python comes with a [unittest module](http://docs.python.org/library/unittest.html). There are also [mocking](http://garybernhardt.github.com/python-mock-comparison/) tools, which you can use to emulate a dependency.

##Closures
I'd like to say I've learned these, but I really haven't. They don't feel natural yet. So I'll just link to the highly handy [Named function expressions demystified](http://kangax.github.com/nfe/). And the [comp.lang.javascript faq](http://www.jibbering.com/faq/). And the [StackOverflow Javascript wiki page](http://stackoverflow.com/tags/javascript/info), which is itself a great linkdump. And while we're on StackOverflow, why not look at this [Hidden features of Javascript](http://stackoverflow.com/questions/61088/hidden-features-of-javascript) entry? Oh dear, I suppose we're not really talking about closures anymore.

