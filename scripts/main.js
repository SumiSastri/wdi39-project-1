$(() => {
	//set up variables in j-query
	// eg. const $button = $('#toggle')

	const $gameGrid = $('.gamegrid');
	let $grid = [];
	const gridNumbers = 27;
	let playerOnePosition = 0;
	let playerTwoPosition = 0;
	const $playerDice1 = $('.playerdice1');
	const $playerDice2 = $('.playerdice2');
	const $playerTwoDice1 = $('.playertwodice1');
	const $playerTwoDice2 = $('.playertwodice2');

	//create grid function use append() method to connect jquery to html
	function createGameboard() {
		for (let i = 0; i <= gridNumbers; i++) {
			if (i === 0) {
				$gameGrid.append(`<div id="${i}" class="box playerOne playerTwo"></div>`);
			} else if (i === 1) {
				$gameGrid.append(`<div id="${i}" class="box" data-id="1"></div>`);
			} else if (i === 14) {
				$gameGrid.append(`<div id="${i}" class="box snakehead1" data-id="14"></div>`);
			} else if (i === 23) {
				$gameGrid.append(`<div id="${i}" class="box snakehead2" data-id="23"></div>`);
			} else if (i === 7) {
				$gameGrid.append(`<div id="${i}" class="box snaketail1 data-id="7"</div>`);
			} else if (i === 11) {
				$gameGrid.append(`<div id="${i}" class="box snaketail2 data-id="11"</div>`);
			} else if (i === 2) {
				$gameGrid.append(`<div id="${i}" class="box ladderbottom1" data-id="2"></div>`);
			} else if (i === 10) {
				$gameGrid.append(`<div id="${i}" class="box ladderbottom2" data-id="10"></div>`);
			} else if (i === 8) {
				$gameGrid.append(`<div id="${i}" class="box laddertop1 data-id="8"></div>`);
			} else if (i === 22) {
				$gameGrid.append(`<div id="${i}" class="box laddertop2 data-id="8""></div>`);
			} else {
				$gameGrid.append(`<div id="${i}" class="box">${i}</div>`);
			}
		}
		$grid = $('.box');
	}
	createGameboard();
	// call function for board to render

	// function returns math method to roll a random number between 1 and 6
	function rollDice() {
		return Math.ceil(Math.random() * 6);
	}

	// when player clicks move tile to equal the amount on the rolldice function
	$playerDice1.on('click', function() {
		const amountToMove = rollDice();
		console.log('dice roll is', rollDice());
		$playerDice2.html(amountToMove);
		// call the same function as a param for player 2

		const $currentPlayerPosition = $gameGrid.find('.playerOne');
		// create a current player position use the find() method on the grid which is an array
		console.log('player1 dice rolled', amountToMove);
		// console.log('this is currentPlayerPosition', $currentPlayerPosition);
		playerOnePosition = parseInt($currentPlayerPosition[0].id);
		// $currentPlayerPosition.removeClass('player')
		playerOnePosition = amountToMove + playerOnePosition;
		// console.log(playerOnePosition);
		// determine player 1 position - parseInt method changes grrid to a number
		// since it is an array set the index to [0]

		if (playerOnePosition === 14) {
			console.log(`player1 hit snakehead1 = ${playerOnePosition}`);
			playerOnePosition = 7;
			// change the position of the player if snake head reached move to tail position
		}

		if (playerOnePosition === 23) {
			console.log(`player1 hit snakehead2 = ${playerOnePosition}`);
			playerOnePosition = 11;
		}

		if (playerOnePosition === 2) {
			console.log(`player1 at ladderbottom1 = ${playerOnePosition}`);
			playerOnePosition = 8;
			// change the position of the player if they reached a ladder to the top of ladder
		}

		if (playerOnePosition === 10) {
			console.log(`playerOne at ladderbottom2 = ${playerOnePosition}`);
			playerOnePosition = 22;
		}

		if (playerOnePosition >= 24) {
			alert('Player One Wins');
		}

		$currentPlayerPosition.removeClass('playerOne');
		$($grid).eq(playerOnePosition).addClass('playerOne');
	});

	$playerTwoDice1.on('click', function() {
		const amountToMove = rollDice();
		$playerTwoDice2.html(amountToMove);
		console.log('player2 dice rolled ', amountToMove);
		const $currentPlayerTwoPosition = $gameGrid.find('.playerTwo');
		playerTwoPosition = parseInt($currentPlayerTwoPosition[0].id);
		// $currentPlayerTwoPosition.removeClass('playertwo')
		playerTwoPosition = amountToMove + playerTwoPosition;

		if (playerTwoPosition === 14) {
			console.log(`player2 hit a snakehead1 = ${playerTwoPosition}`);
			playerTwoPosition = 7;
		}

		if (playerTwoPosition === 23) {
			console.log(`player2 hit snakehead2 = ${playerTwoPosition}`);
			playerTwoPosition = 11;
		}

		if (playerTwoPosition === 2) {
			console.log(`player2 at ladderbottom1 = ${playerTwoPosition}`);
			playerTwoPosition = 8;
		}

		if (playerTwoPosition === 10) {
			console.log(`player2 at ladderbottom2 = ${playerTwoPosition}`);
			playerTwoPosition = 22;
		}
		if (playerTwoPosition >= 24) {
			alert('Player Two Wins');
		}

		$currentPlayerTwoPosition.removeClass('playerTwo');
		$($grid).eq(playerTwoPosition).addClass('playerTwo');
	});
});
