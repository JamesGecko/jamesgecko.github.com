---
layout: post
title: Langton's horrible ants of death
---
 
[Langton's ant](http://en.wikipedia.org/wiki/Langtons_ant) is a very simple movement algorithm. An ant is on a grid, walking across squares. When it moves into a black square, it turns the square white, turns 90 degrees to the right, and walks forward to the next square. The opposite happens when the ant moves into a white square.

It seems like this algorithm could be used to provide procedurally generated enemy behavior in games. The ant's behavior is guaranteed to be interesting for at least ten thousand square moves, and likely a lot more if the player can change the color of the squares on the grid.

There are many variations on the ant's basic movement; some of them add a third color to the mix, others add extra moves before the ant will react to the color it lands on. If the ant could fire projectiles that moved at a fraction of the speed of the ant, we could produce a [danmaku type](http://www.youtube.com/watch?v=W14BjoIMpVA) game. This has [already been experimented with](http://www.asahi-net.or.jp/~cs8k-cyu/flash/la2/index.html) using Conway's Game of Life, but Life is can be hard to predict on the fly. An ant is easy.