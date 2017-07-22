// Display only start button in #answers div
// On start write Time Remaining + a counter in #time div
	// Write first question in #question div
		// Write 4 answers
			// On correct answer ++ correct var
				// Write Correct! in #answers div
				// Write Correct Answer was: rightAnswer in #answers div
				// Display image of question in #answers div
			// On wrong answer ++ incorrect var
				// Write Wrong Answer! in #answers div
				// Write Correct Answer was: rightAnswer in #answers div
				// Display image of question in #answers div
			// On time up ++ not answered var
				// Write Time's Up! in #question div
				// Write Correct Answer was: right Answer in #answers div
				// Display image of question in #answers div
			// Wait 5 seconds then display second question
	// Repeat for total questions
// On last question guessed
	// Clear #time div
	// Write finished line in #question div
	// Write rightAnswer, correctAnswer and unanswered vars in #answers div
	// Display Start Over button which resets the game

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

// Question and answer variables
var initQuestion;
var questionArray = ["When was the band Metallica first formed?", "Which album was ACDC's best all-time seller?", "Who was the lead guitarist of these four Guns N' Roses band members?", "Who was Van Halen's first lead vocalist?", "Who is the American best-selling hard rock band of all time?", "Which KISS member is known for sticking his tongue out?", "Which band did MTV call the 'ambassadors of rock'?", "Which band created the song 'Come Sail Away'?", "Which band member came up with the name Deaf Leopard later being changed to Def Leppard?", "Which band was formed in the UK?"];
var answerArray = ['1979', '1980', '1981', '1982', 'Highway to Hell', 'Back in Black', 'Powerage', 'For Those About to Rock We Salute You', 'Axl Rose', 'Duff McKagan', 'Izzy Stradlin', 'Slash', 'Eddie Van Halen', 'David Lee Roth', 'Sammy Hagar', 'Gary Cherone', "ACDC", "Aerosmith", "Kiss", "Def Leppard", "Paul Stanley", "Tommy Thayer", "Eric Singer", "Gene Simmons", "Guns N' Roses", "Aerosmith", "Scorpions", "Van Halen", "Styx", "Poison", "Bon Jovi", "Quiet Riot", "Rick Savage", "Joe Elliot", "Rick Allen", "Phil Collen", "ACDC", "Guns N' Roses", "Bon Jovi", "Judas Priest"];
var correctArray = ['1981', 'Back in Black', 'Slash', 'Eddie Van Halen', 'Aerosmith', 'Gene Simmons', 'Scorpions', 'Styx', 'Joe Elliot', 'Judas Priest'];

// Initial setup with "Start" button
function init() {
	// Set counters to 0 (reset)
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	questionCounter = 0;
	answerCounter = 0;
	// Empty questions div from end screen
	$('#question').empty();
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
	}
	// End screen on last question answered
	else {
		return endScreen();
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
		answerScreen();
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
		answerScreen();
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
		answerScreen();
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
		answerScreen();
	});
}

// Screen after user input on question
function answerScreen() {
	clearInterval(initQuestion);
	// Reset counter back to default
	counter = 10;
	// Empty out the buttons from answers div
	$('#answers').empty();

	if (questionCounter < 10) {
		setTimeout(function() {displayQuestion()}, 5000);
	}

	else {
		setTimeout(function() {endScreen()}, 5000);
		return;
	}

	if (noTime) {
		$('#time').html('No More Time!');
	}
	else {
		if (correct) {
			$('#time').html('Correct!');
		}

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

init();



