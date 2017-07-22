// Counter-type variables
var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;
var questionCounter = 0;
var answerCounter = 0;
var counter = 10;

// Boolean variables
var noTime = false;
var correct = true;

// Timer variable
var initQuestion;

// Full question array
var questionArray = ["When was the band Metallica first formed?", 
"Which album was ACDC's best all-time seller?", 
"Who was the lead guitarist of these four Guns N' Roses band members?", 
"Who was Van Halen's first lead vocalist?", 
"Who is the American best-selling hard rock band of all time?", 
"Which KISS member is known for sticking his tongue out?", 
"Which band did MTV call the 'ambassadors of rock'?", 
"Which band created the song 'Come Sail Away'?", 
"Which band member came up with the name Deaf Leopard later being changed to Def Leppard?", 
"Which band was formed in the UK?"];

// All answers array
var answerArray = ['1979', '1980', '1981', '1982', 
'Highway to Hell', 'Back in Black', 'Powerage', 'For Those About to Rock We Salute You', 
'Axl Rose', 'Duff McKagan', 'Izzy Stradlin', 'Slash', 
'Eddie Van Halen', 'David Lee Roth', 'Sammy Hagar', 'Gary Cherone', 
"ACDC", "Aerosmith", "Kiss", "Def Leppard", 
"Paul Stanley", "Tommy Thayer", "Eric Singer", "Gene Simmons", 
"Guns N' Roses", "Aerosmith", "Scorpions", "Van Halen", 
"Styx", "Poison", "Bon Jovi", "Quiet Riot", "Rick Savage", 
"Joe Elliot", "Rick Allen", "Phil Collen", "ACDC", 
"Guns N' Roses", "Bon Jovi", "Judas Priest"];

// Correct answers array
var correctArray = ['1981', 'Back in Black', 'Slash', 'Eddie Van Halen', 'Aerosmith', 
'Gene Simmons', 'Scorpions', 'Styx', 'Joe Elliot', 'Judas Priest'];

// Initial setup with "Start" button
function init() {
	// Reset counters to 0
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	questionCounter = 0;
	answerCounter = 0;
	// Empty questions div from end screen
	$('#question').empty();
	// Display start button
	$('#answers').html('<button class="button" id="startbutton">Start</button>');
	$('#startbutton').on('click', function() {
		$('#startbutton').remove();
		displayQuestion();
	});
}

// Function to write-only next question and answers
function displayQuestion() {
	// Empty answers div to remove last answer buttons
	$('#answers').empty();
	// Determine if finished with last question
	if (questionCounter < 10) {
		// Reset noTime to false at the start of every question
		noTime = false
		initQuestion = setInterval(nextQuestion, 1000);	
		$('#question').html(questionArray[questionCounter]);
		$('#time').html('Time Remaining: ' + counter);
		$('#answers').append('<button class="button2" id="firstbutton">' + answerArray[answerCounter] + '</button><br>');
		$('#answers').append('<button class="button2" id="secondbutton">' + answerArray[answerCounter + 1] + '</button><br>');
		$('#answers').append('<button class="button2" id="thirdbutton">' + answerArray[answerCounter + 2] + '</button><br>');
		$('#answers').append('<button class="button2" id="fourthbutton">' + answerArray[answerCounter + 3] + '</button><br>');
		answerCounter+=4;
		// On first button click
		$('#firstbutton').on('click', function() {
			if (questionCounter === 3 || questionCounter === 7) {
				correct = true;
				correctAnswer++;
			}
			else {
				correct = false;
				incorrectAnswer++;
			}		
			return answerScreen();
		});

		// On second button click
		$('#secondbutton').on('click', function() {
			if (questionCounter === 1 || questionCounter === 4 || questionCounter === 8) {
				correct = true;
				correctAnswer++;
			}

			else {
				correct = false;
				incorrectAnswer++;
			}		
			return answerScreen();
		});

		// On third button click
		$('#thirdbutton').on('click', function() {
			if (questionCounter === 0 || questionCounter === 6) {
				correct = true;
				correctAnswer++;
			}

			else {
				correct = false;
				incorrectAnswer++;
			}		
			return answerScreen();
		});

		// On fourth button click
		$('#fourthbutton').on('click', function() {
			if (questionCounter === 2 || questionCounter === 5 || questionCounter === 9) {
				correct = true;
				correctAnswer++;
			}

			else {
				correct = false;
				incorrectAnswer++;
			}		
			return answerScreen();
		});
		}
		// End screen on last question answered
		else {
			endScreen();
		}
}

// Determine what happens on answer guess or time running out
function nextQuestion() {
	// Decrease and display timer
	counter--;
	$('#time').html('Time Remaining: ' + counter);
	// If time runs out clear interval and send to answer screen
	if (counter == -1) {
		noTime = true;
		unanswered++;
		answerScreen();
	}
}

// Screen after user input on question
function answerScreen() {
	clearInterval(initQuestion);
	// Reset counter back to default
	counter = 10;
	// Empty out the buttons from answers div
	$('#answers').empty();
	// Asks if past the last question
	if (questionCounter < 10) {
		setTimeout(function() {displayQuestion()}, 5000);
	}

	// Ends the game if the last question has been guessed
	else {
		setTimeout(function() {endScreen()}, 5000);
		return;
	}
	// Write if user runs out of time
	if (noTime) {
		$('#time').html('No More Time!');
	}
	else {
		// Writes if user chooses correct answer
		if (correct) {
			$('#time').html('Correct!');
		}
		//Writes if user chooses the incorrect answer
		else {
			$('#time').html('Incorrect!');
		}
	}
	// Write correct answer
	$('#question').html('Correct answer was: ' + correctArray[questionCounter]);
	// Display correct answer image
	if (questionCounter == 0) {
		$('#answers').html('<img src="assets/images/Metallica.jpg" height="250" width="300">');
	}
	else if (questionCounter == 1) {
		$('#answers').html('<img src="assets/images/acdc.jpg" height="250" width="300">');
	}
	else if (questionCounter == 2) {
		$('#answers').html('<img src="assets/images/slash.jpg" height="250" width="300">');
	}
	else if (questionCounter == 3) {
		$('#answers').html('<img src="assets/images/eddie.jpg" height="250" width="300">');
	}
	else if (questionCounter == 4) {
		$('#answers').html('<img src="assets/images/aero.jpeg" height="250" width="300">');
	}
	else if (questionCounter == 5) {
		$('#answers').html('<img src="assets/images/kiss.jpg" height="250" width="300">');
	}
	else if (questionCounter == 6) {
		$('#answers').html('<img src="assets/images/scorpions.jpg" height="250" width="300">');
	}
	else if (questionCounter == 7) {
		$('#answers').html('<img src="assets/images/styx.jpg" height="250" width="300">');
	}
	else if (questionCounter == 8) {
		$('#answers').html('<img src="assets/images/joe.jpg" height="250" width="300">');
	}
	else if (questionCounter == 9) {
		$('#answers').html('<img src="assets/images/judas.jpg" height="250" width="300">');
	}
	// Increment counter to select for next question
	questionCounter++;
}

// End of game screen
function endScreen() {
	clearInterval(initQuestion);
	$('#time').empty();
	$('#answers').empty();
	$('#question').html('Your results');
	$('#answers').html('<div>Correct: ' + correctAnswer + '</div><br>' + '<div>Incorrect: ' + incorrectAnswer + '</div><br>' + '<div>Unanswered: ' + unanswered + '</div><br>' + '<button class="button" id="startover">Start Over?</button>')
	$('#startover').on('click', function() {
		init();
	})
}
// Initialize game
init();



