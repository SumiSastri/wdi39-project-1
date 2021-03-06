Game acceptance criteria:-

Game initialisation:
The game starts when either player rolls the dice

The snake - use case:
If you land on a snake head you move to the tail

The ladder - use case:
If you land on the bottom of a ladder you move to the top

Player use case:
As a player I roll a dice to initiate the game
I move from my original position in increments of the dice roll
If I land at the bottom of the ladder I move to the top
If I land on a snakehead I move to the bottom
I should continue the game from the new position (either top of the ladder or bottom of the snake)


The dice - use case:
When clicked by player generates random number between 1-6
When player move over randomly generates number for computer


Game end:
Terminates when either player reaches last square
Winner is declared

Static design requirements (MVP):
Grid with 25 numbered squares
Square shaped board
The last square is top right
First square is bottom right
Two snakes
Two ladders
Icons (tokens) for players to select
Dice that prints 6 numbers

Copy requirements:
Name of game, game rules, button labels

Image requirements:
Two snakes
Two ladders
Player Icons 2

Bonus:
Scoreboard for 2 player scores

Responsive design Requirements:
Design to fit 400/ 640 /960 (mobile, tablet, desktop)


ui-ux:
On click, dice produces random number
icons move
players move through squares to the dice roll
players move from snake head to snake tail
players move from ladder bottom to ladder top

FWM:
100 grid with 10 snakes 10 ladders
Bonus - more than 2 players
Scoreboard

TECH SPEC

DOM structure
- Body object - removes browser defaults
- Main object (wraps all content)
- Header object with h1-tag and images - html & css
- ui-ux object with buttons for initialisation
   - html & css
   - jquery and js embeds
- game-grid object
   - html, css, j-query and js
   - key functions, arrays, methods embedded in game grid


HTML build:

- HEADER WITH GAME NAME AND INFORMATION
- INTRODUCTION WITH GAME RULES
- UI-UX DIV WITH PLAYER DICE A

CSS STYLING:

- IDENTIFY BOTH PLAYER ICONS
- IDENTIFY GAME GRID
- IDENTIFY SNAKE HEADS AND TAILS
- IDENTIFY LADDER TOPS AND BOTTOMS

CSS ANIMATION:

- PLAYER ICONS MOVING

JS & J-QUERY: Steps, pseudo-code and code snippets

1. Build game grid in j-query not HTML - this makes each div an object, defines
zero as the starting point for the players and defines the exceptions

Code snippet:-

  const $gameGrid = $('.gamegrid')
  let $grid = []
  const gridNumbers = 24
  let playerOnePosition = 0
  let playerTwoPosition = 0

  function createGameboard() {
    for (let i = 0; i <= gridNumbers; i++){
      if(i === 0) {
        $gameGrid.append(`<div id="${i}" class="box player playerTwo"></div>`)
      } else if(i === 1) {
        $gameGrid.append(`<div id="${i}" class="box" data-id="1"></div>`)
      }else if(i === 14) {
      $gameGrid.append(`<div id="${i}" class="box snakehead1" data-id="14"></div>`)

2. Players roll dice - generate a random number between 1 and 6 and current player position identified as relative to start position on the array

Code snippet:-

function rollDice(){
    return Math.ceil(Math.random() * 6)
  }

   $playerDice1.on('click', function() {
   const amountToMove = rollDice()
    $playerDice2.html(amountToMove)
    const $currentPlayerPosition = $gameGrid.find('.player')
    playerOnePosition = parseInt($currentPlayerPosition[0].id)
    playerOnePosition = amountToMove + playerOnePosition

3. Move icon (different states)

While the dice roll identifies the current position relative to starting point, the exceptions are identified by a conditional - here is a simple if statement, possibly an if else, or switch statement would work as well

Code snippet:-

if (playerOnePosition === 14) {
      console.log(`player1 hit snakehead1 = ${playerOnePosition}`)
      playerOnePosition = 7
    }

    if (playerOnePosition === 23) {
      console.log(`player1 hit snakehead2 = ${playerOnePosition}`)
      playerOnePosition = 11
    }

As this was the main functionality, the console logs are documented to show how the exception handling was tested

5. Game end - winner declared

6. Bonus - score board
   -  score board displays user score computer score (bonus)
   -  running score maintained (bonus)
   -  Best of three tries declares winner (bonus)
   -  Reset button to zero

LEARNING OBJECTIVES AND CHALLENGES:

Key objectives were to go through all of module 1, learning at GA and understand the key principles.

Areas that were researched were:-

1) CSS animation
2) j-query documentation
3) Data types - primitives, vs objects and constructors
4) DOM and object-oriented programming

Challenges:-

1) Understanding the difference between CSS animation and j-query animation
2) Understanding higher order functions and which methods were useful to the game
3) Over-thinking and under-thinking striking a balance
4) Using the console log as a guide without fear of breaking code that worked

Areas that need more work:

1) Would be useful to scale up the model from MVP to FWM
2) Increase number of players using a constructor
3) Create a better ui-ux - the mvp there is a visual conflict between the objects in the snake-heads and the ladder-bottoms. When the icons land on these grid objects you can not see the movement - the js & j-query functions execute properly but you can not see (identify) the icons when they land on the snake head and ladder bottom, you see them only when they are in their new position. The game start-reset states have not been created - while the game functions the start-reset button will ensure a cleaner ui-ux.
