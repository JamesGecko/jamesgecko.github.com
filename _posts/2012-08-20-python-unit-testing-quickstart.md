---
layout: post
title: Python Unit Testing Quickstart
published: true
tags:
- dev
- python
- howto
---

Suppose you want to write some unit tests in Python. What do? Fortunately, you already have a module called [unittest](http://docs.python.org/library/unittest.html) (or [unittest2](http://pypi.python.org/pypi/unittest2) in Python 2.4-2.6) in the standard library. We'll use that.

## Directory structure

First, create a directory named `tests`. Place an empty file named `__init__.py` inside. This distinguishes the directory as [a package](http://docs.python.org/tutorial/modules.html#packages).

Next, create your first test file and place it in the tests directory. I called mine `test_database.py`. Prefixing the name with "test" means that it's not the first file to come up when I type "database" with [CtrlP in Vim](http://kien.github.com/ctrlp.vim/), but you might not care about such things.

## Writing tests

Here's what I put in my first test.

    import unittest
    from my_module import MyClass
    
    class TestDatabase(unittest.TestCase):
    	def setUp(self):
        	pass
        
        def tearDown(self):
        	pass
        
        def test_something(self):
            my_thing = MyClass()
            result = my_thing.my_method("words!")
            self.assertTrue(result, True)
        
        def test_something_else(self):
        	my_thing = MyClass()
            assertNotEqual(my_thing('a'), my_thing('b'))

The setUp and tearDown methods are optional, but handy. A list of asserts can be found [in the docs](http://docs.python.org/library/unittest.html#unittest.TestCase.debug).

When writing tests, I try to keep each method short and focused. They should be as independent as possible. What little state you need should be established in setUp().

## Running tests

If you look at the example in the official documentation, you'll see a familiar pattern at the end.

    if __name__ == '__main__':
        unittest.main()

This might be ok if you plan on running the test file directly. But with the tests in a subdirectory of the project, unittest won't be able to find your modules unless you do nasty things to the path. So you can safely ignore this.

Now, go to the top level directory of your project and run the following command:

    python -m unittest discover
    
Magic!