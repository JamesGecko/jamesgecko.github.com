---
layout: post
title: HTML 5 Support Fail
---
 
Dear Safari/Chrome,

Implementing the <a href="http://diveintohtml5.org/forms.html#type-date">HTML 5 "date" field</a>, except broken, isn't helping. Web developers are supposed to just be able to <a href="http://diveintohtml5.org/detect.html#input-types">test for browser support</a>, use something like <a href="http://jqueryui.com/demos/datepicker/">jQuery</a> as a stopgap, and everything will magically work via HTML 5 in the future. Opera has a nice little dropdown calendar. Internet Explorer and Firefox don't do anything. They get this.

Chrome renders date fields as a <a href="http://library.gnome.org/devel/hig-book/stable/controls-spin-boxes.html.en">spinbox</a> starting on September 15th, 1582 (1582-09-15). Safari claims to support them, but just prevents the user from submitting the form. You two, this is the very definition of "not getting it."

I am left with little choice. jQuery UI for everyone! I hope you're happy.

--<em>James</em>
