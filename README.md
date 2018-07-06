frontend-nanodegree-arcade-game
===============================

## Table of Contents

* [Game Details](#game_details)
* [js/app.js](#js/app.js)
* [js/engine.js](#js/engine.js)
* [js/resources.js](#js/resources.js)
* [Functions](#functions)
* [Dependencies](#dependencies)

## Game Details

This is a game that is drawn by a canvas and uses OOP javascript, the game consists of a player who moves vertically and horizontly on a board to reach the upper safe zone without colliding with bugs,
 
## js/resources.js

js/resources.js - loads images (but importantly passes init to Resources.onReady() to start the game running when all the images are loaded) as explained in the next section.

## js/engine.js

defines the main() loop that repeated calls update() and render()
loads the files, which will get the game running by calling init() when done.
for more info check
https://discussions.udacity.com/t/a-study-in-javascript-frogger-arcade-game-clone/38871/6


## js/app.js

Where classes are defined, we have 3 main classes Enemy, Player, and Gem
ES5 Protoype Syntax is used to define classes

## Functions
factory functions for enemies and gems are used to automatically produce enemy and gem objects,
as player increases in score the level of difficaulty is increase by generating more enemy objects

helper functions like randomPosition() is used to generate random positions for enemies, gems and gem types

updateExtras() used to display score and number of lives

## Dependencies

for modals
"https://cdn.jsdelivr.net/sweetalert2/6.4.1/sweetalert2.js
https://cdn.jsdelivr.net/sweetalert2/6.4.1/sweetalert2.css

google fonts
https://fonts.googleapis.com/

