$(() => {

  //set up variables in j-query
  // eg. const $button = $('#toggle')

  const $playerDice1 = $('.playerdice1')
  const $playerTwoDice1 = $('.playertwodice1')
  const $playerDice2 = $('.playerdice2')
  const $playerTwoDice2 = $('.playertwodice2')
  const snakeTail1 = $('#7')
  const snakeTail2 = $('#11')
  const ladderTop1 = $('#8')
  const ladderTop2 = $('#22')

  // const $playerIcon =$('.playerIcon')
  // const $computerIcon =$('.computericon')

  const $gameGrid = $('.gamegrid')
  let playerOnePosition = 0
  let playerTwoPosition = 0
  const $currentPlayerPosition = $('.currentPlayerPosition')
  const $currentPlayerTwoPosition = $('.currentPlayerTwoPosition')

  // const $stop = $('.stop')

  //  create grid in jquery append to html
  let $grid = []
  const gridNumbers = 24
  function createGameboard() {
    for (let i = 0; i <= gridNumbers; i++){
      if(i === 0) {
        $gameGrid.append(`<div id="${i}" class="box player"></div>`)
      } else if(i === 1) {
        $gameGrid.append(`<div id="${i}" class="box playertwo"></div>`)
      }else if(i === 14) {
        $gameGrid.append(`<div id="${i}" class="box snake" data-id="7"></div>`)
      } else if(i === 23) {
        $gameGrid.append(`<div id="${i}" class="box snake" data-id="11"></div>`)
      } else if(i === 7) {
        $gameGrid.append(`<div id="${i}" class="box snaketail"</div>`)
      } else if(i ===11) {
        $gameGrid.append(`<div id="${i}" class="box snaketail"</div>`)
      } else if(i === 2) {
        $gameGrid.append(`<div id="${i}" class="box ladder" data-id="8"></div>`)
      } else if(i === 10) {
        $gameGrid.append(`<div id="${i}" class="box ladder" data-id="22"></div>`)
      } else if(i === 8) {
        $gameGrid.append(`<div id="${i}" class="box laddertop"></div>`)
      } else if(i === 22) {
        $gameGrid.append(`<div id="${i}" class="box laddertop"></div>`)
      } else {
        $gameGrid.append(`<div id="${i}" class="box">${i}</div>`)
      }
    }
    $grid = $('.box')
  }
  createGameboard()

  function rollDice(){
    return Math.ceil(Math.random() * 6)
  }

  // connect dice to click and players
  $playerDice1.on('click', function() {
    $playerDice2.html(rollDice)
    const amountToMove = rollDice()
    const $currentPlayerPosition = $gameGrid.find('.player')
    playerOnePosition = parseInt($currentPlayerPosition[0].id)
    $currentPlayerPosition.removeClass('player')
    $($grid).eq(amountToMove + playerOnePosition).addClass('player')
  })


  $playerTwoDice1.on('click', function() {
    $playerTwoDice2.html(rollDice)
    const amountToMove = rollDice()
    const $currentPlayerTwoPosition = $gameGrid.find('.playertwo')
    playerTwoPosition = parseInt($currentPlayerTwoPosition[0].id)
    $currentPlayerTwoPosition.removeClass('playertwo')
    $($grid).eq(amountToMove + playerTwoPosition).addClass('playertwo')
  })


  // snake and ladder exceptions
  function movePosition(currentPosition, newPosition){
    const amountToMove = rollDice()
    const $currentPlayerPosition = $gameGrid.find('.player')
    const $currentPlayerTwoPosition = $gameGrid.find('.playertwo')
    if ($currentPlayerPosition || $currentPlayerTwoPosition === 2){
      newPosition === ladderTop1
    } else if ($currentPlayerPosition || $currentPlayerTwoPosition === 10){
      newPosition === ladderTop2
    } else if ($currentPlayerPosition || $currentPlayerTwoPosition === 23){
      newPosition === snakeTail2
    } else if ($currentPlayerPosition || $currentPlayerTwoPosition === 14){
      newPosition === snakeTail1
    } else {
      $currentPlayerPosition || $currentPlayerTwoPosition === amountToMove
    }
  }
  movePosition()
})

// declare winner
// function declareWinner(){
//   const $currentPlayerPosition = $gameGrid.find('.player')
//   if ($currentPlayerPosition >= 25) {
//     alert('Player 1 is the winner')
//   } else {
//     alert('Player 2 is the winner')
//   }
// }
// declareWinner()
// reset board
