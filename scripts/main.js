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

	function rollDice() {
		return Math.ceil(Math.random() * 6);
	}

	$playerDice1.on('click', function() {
		const amountToMove = rollDice();
		console.log('dice roll is', rollDice());
		$playerDice2.html(amountToMove);

		// create a current player position use the find() method on the grid which is an array
		const $currentPlayerPosition = $gameGrid.find('.playerOne');
		console.log('player1 dice rolled', amountToMove);
		playerOnePosition = parseInt($currentPlayerPosition[0].id);
		// $currentPlayerPosition.removeClass('player')
		playerOnePosition = amountToMove + playerOnePosition;

		if (playerOnePosition === 14) {
			console.log(`player1 hit snakehead1 = ${playerOnePosition}`);
			playerOnePosition = 7;
		}

		if (playerOnePosition === 23) {
			console.log(`player1 hit snakehead2 = ${playerOnePosition}`);
			playerOnePosition = 11;
		}

		if (playerOnePosition === 2) {
			console.log(`player1 at ladderbottom1 = ${playerOnePosition}`);
			playerOnePosition = 8;
		}

		if (playerOnePosition === 10) {
			console.log(`playerOne at ladderbottom2 = ${playerOnePosition}`);
			playerOnePosition = 22;
		}

		if (playerOnePosition >= 27) {
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
		if (playerTwoPosition >= 27) {
			alert('Player Two Wins');
		}

		$currentPlayerTwoPosition.removeClass('playerTwo');
		$($grid).eq(playerTwoPosition).addClass('playerTwo');
	});
});
