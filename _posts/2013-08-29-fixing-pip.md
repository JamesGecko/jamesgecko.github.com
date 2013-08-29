---
published: true
title: Fixing pip
layout: post
tags: 
  - dev
  - python
  - howto
---

On Windows, there’s a thing that happens where pip and all the binaries it’s installed randomly stop working.

```
PS C:\Users\james> pip
failed to create process.
PS C:\Users\james> virtualenv
failed to create process.
```
The solution/workaround is to [reinstall distribute and pip](http://docs.python-guide.org/en/latest/starting/install/win/#distribute-pip). Now things work again for no apparent reason. Woo, magic.