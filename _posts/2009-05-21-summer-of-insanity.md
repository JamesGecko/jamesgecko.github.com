---
layout: post
title: Summer of Insanity
---
 
So, the now officially released AbiWord 2.7 development branch contains the happy multipage feature I talked about all last summer. Yes! You can check it out <a href="http://abisource.com/release-notes/2.7.0.phtml">here</a>.

You may notice that it's all flickery if you use the feature with documents other than those containing 72 point font. I didn't notice it at the time because I was, um, testing the feature using unrealistic, simplistic test documents filled with the aforementioned font. Oops.

The main reason it's all flickery is because there's currently no double buffering being performed on the document drawing area. So. This summer I'm learning Cairo and hanging out with Uwog. By the end of the summer, my svn branch will have beautiful, fast double buffering code. It will be all optimized and shiny.

Somewhere along the line it turned out that I also need to take three summer classes to graduate. Hence, the title. I'ma be busy this summer.
