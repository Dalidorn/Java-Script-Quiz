
//when game over, can save initials and score

//dark and light modes

//view highscores button

//ability to clear highscores

//displays if previous answer was correct or wrong

//option to review questions and answers after? study mode difficulty

//different difficulty modes on start, unlock after beating each

//animation for highest score, different animation for top three

//add a latest score section in footer

//display error messages on highscore register

//after user has completed the game once we change the starting screen to display previous attempt

//~~~ declaring questions ~~~

//easy
var questE1 = {
    question: "What is JS short for?",
    options: ["Jam Season", "Jack Sparrow", "Jim Slim", "JavaScript"],
    answer: "JavaScript",
    hint: "tbd"
};

var questE2 = {
    question: "",
    options: [],
    answer: "",
    hint: ""
};

var questE3 = {
    question: "",
    options: [],
    answer: "",
    hint: ""
};

var questE4 = {
    question: "",
    options: [],
    answer: "",
    hint: ""
};

var questE5 = {
    question: "",
    options: [],
    answer: "",
    hint: ""
};

var questE6 = {
    question: "",
    options: [],
    answer: "",
    hint: ""
};

var questE7 = {
    question: "",
    options: [],
    answer: "",
    hint: ""
};

var questE8 = {
    question: "",
    options: [],
    answer: "",
    hint: ""
};

var questE9 = {
    question: "",
    options: [],
    answer: "",
    hint: ""
};

var questE10 = {
    question: "",
    options: [],
    answer: "",
    hint: ""
};

//medium
var questM1 = {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<scripting>", "<javascript>", "<script>"],
    answer: "<script>",
    hint: "tbd1"
};

var questM2 = {
    question: "Where is the correct place to link a JavaScript file?",
    options: ["The <header> section", "The <head> section", "The <main> section", "The <body> section"],
    answer: "The <body> section",
    hint: "tbd2"
};

var questM3 = {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    options: ["<script name='xxx.js'>", "<script href='xxx.js>", "<link rel='script' src='xxx.js'>", "<script src='xxx.js'>"],
    answer: "<script src='xxx.js'>",
    hint: "tbd3"
};

var questM4 = {
    question: "How do you write 'Hello World' in an alert box?",
    options: ["alertBox('Hello World');", "msgBox('Hello World');", "alertMsg('Hello World');", "alert('Hello World');"],
    answer: "alert('Hello World');",
    hint: "tbd4"
};

var questM5 = {
    question: "tbd5",
    options: ["tbd", "tbd", "tbd", "tbd*"],
    answer: "tbd*",
    hint: "tbd5"
};

var questM6 = {
    question: "tbd6",
    options: ["tbd", "tbd", "tbd", "tbd*"],
    answer: "tbd*",
    hint: "tbd6"
};

var questM7 = {
    question: "tbd7",
    options: ["tbd", "tbd", "tbd", "tbd*"],
    answer: "tbd*",
    hint: "tbd7"
};

var questM8 = {
    question: "tbd8",
    options: ["tbd", "tbd", "tbd", "tbd*"],
    answer: "tbd*",
    hint: "tbd8"
};

var questM9 = {
    question: "tbd9",
    options: ["tbd", "tbd", "tbd", "tbd*"],
    answer: "tbd*",
    hint: "tbd9"
};

var questM10 = {
    question: "tbd10",
    options: ["tbd", "tbd", "tbd", "tbd*"],
    answer: "tbd*",
    hint: "tbd10"
};

//hard

var questH1 = {
    question: "What is the correct JavaScript syntax to change the content of the HTML element below?    <p id='demo'>This is a demonstration.</p>",
    options: ["document.getElementByName('p').innerHTML = 'Hello World';", "#demo.innerHTML = 'Hello World';", "document.getElement(<p>).innerHTML = 'Hello World';"],
    answer: "document.getElementById('demo').innerHTML = 'Hello World';",
    hint: ""
};

var questH2 = {
    question: "",
    options: [],
    answer: "",
    hint: ""
};

var questH3 = {
    question: "",
    options: [],
    answer: "",
    hint: ""
};

var questH4 = {
    question: "",
    options: [],
    answer: "",
    hint: ""
};

var questH5 = {
    question: "",
    options: [],
    answer: "",
    hint: ""
};

var questH6 = {
    question: "",
    options: [],
    answer: "",
    hint: ""
};

var questH7 = {
    question: "",
    options: [],
    answer: "",
    hint: ""
};

var questH8 = {
    question: "",
    options: [],
    answer: "",
    hint: ""
};

var questH9 = {
    question: "",
    options: [],
    answer: "",
    hint: ""
};

var questH10 = {
    question: "",
    options: [],
    answer: "",
    hint: ""
};

//pools
var easyQuestionPool = [questE1, questE2, questE3, questE4, questE5, questE6, questE7, questE8, questE9, questE10];
var mediumQuestionPool = [questM1, questM2, questM3, questM4, questM5, questM6, questM7, questM8, questM9, questM10];
var hardQuestionPool = [questH1, questH2, questH3, questH4, questH5, questH6, questH7, questH8, questH9, questH10];

//~~~ identifying elements ~~~
    //buttons
    var startButton = document.querySelector("#start");
    var easy = document.querySelector("#easy");
    var medium = document.querySelector("#medium");
    var hard = document.querySelector("#hard");
    var hintButton = document.querySelector("#hint");
    var skipButton = document.querySelector("#skip");
    
    //text fields
    var timerEl = document.querySelector("#timer");
    var scoreEl = document.querySelector("#score");
    var hintEl = document.querySelector(".hintdisplay");
    var questionEl = document.querySelector("#question");
    var optionsEl = document.querySelector("#options");
    
    //cards
    var endGameCard = document.querySelector(".endinfo");
    var quizAreaCard = document.querySelector(".quizarea");
    var leftCard = document.querySelector(".left");
    var rightCard = document.querySelector(".right");
    
    //elements
    var timerDisplay = document.querySelector(".timerdisplay");
    var modifiers = document.querySelector(".modifiers");
    var scoreDisplay = document.querySelector(".scoredisplay");
    var rules = document.querySelector(".rules");
    var game = document.querySelector(".game");
    var startScreen = document.querySelector(".start");
    var questRemainDisplay = document.querySelector("#questremaindisplay");
    
    //form stuff
    var scoreSubmit = document.querySelector("#scoresubmit");
    var noSave = document.querySelector("#nosave");
    var userInitials = document.querySelector("#name");
    

//~~~ global variables ~~~
var timeLimit = 60;
var questionsRemaining = "";
var currentDifficulty = "Easy";
var questionPool = [];
var currentQuestion = "";
var selection = "";
var score = 0;
var endReport = {
    playedBefore: false,
    user: [],
    score: [],
    difficulty: []
}

//~~~ checking for local data ~~~
if(localStorage) {
    endReport.playedBefore = true;
}

//~~~ general functions ~~~

function shuffle(array) {
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}

function hide(variable) {
    variable.className += " hidden";
};

function show(variable) {
    variable.className -= "hidden";
};

function keyPressAction(event) {
    keyPressed = event.key;
    if(timeLimit != 0 && questionsRemaining != 0 && keyPressed == 1 || keyPressed == 2 || keyPressed == 3 || keyPressed == 4) {
        selection = optionsEl.children[keyPressed -1].textContent;
        console.log(selection);
        checkAnswer();
    };
};

function clickOptionAction(event) {
    selection = event.target.textContent;
    console.log(selection);
    checkAnswer();
}

//~~~ game functions ~~~
function saveToLocal(event) {
    event.preventDefault();

    endReport.playedBefore = true;
    endReport.user.push(userInitials.ariaValueMax.trim());
    endReport.difficulty.push(currentDifficulty);
    localStorage.setItem("User Data", JSON.stringify(endReport));
}

function difficultySelect(event) {
    currentDifficulty = event.target.textContent;
    console.log(currentDifficulty);
};

function displayHint() {
    show(hintEl);
    hintEl.textContent = currentQuestion.hint;
    timeLimit -= 2;
    console.log("Hint requested, penalizing 2 seconds.");
};

function endGame() {
    hide(quizAreaCard);
    hide(leftCard);
    hide(rightCard);
    show(endGameCard);
};

function newQuestion() {
    if(questionPool.length != 0) {
    //empty out current options
        for(i=0; i<optionsEl.children.length; i++) {
            optionsEl.children[i].textContent = "";
        };
    //take the last question in the array
        currentQuestion = questionPool.splice(questionPool.length -1, 1);
    //count and display remaining questions
        questionsRemaining = questionPool.length + 1;
        questRemainDisplay.textContent = questionsRemaining + " questions remaining";
    //display question
        questionEl.textContent = currentQuestion[0].question;
    //shuffle and display options
        options = shuffle(currentQuestion[0].options);
        for(i=0; i<optionsEl.children.length; i++) {
            optionsEl.children[i].textContent = options[i];
        };
    } else {
        questionsRemaining = 0;
    };
};

function checkAnswer() {
    if(selection == currentQuestion[0].answer) {
        console.log("Correct!! Adding Points");
        score++;
        newQuestion();
    } else {
        console.log("Incorrect!! Subtracting Time");
        timeLimit -= 3;
        newQuestion();
    }
}

function startGame() {     
//Prepare the display
    //left card
        hide(rules);
        show(scoreDisplay);
    //quiz card
        hide(startScreen);
        show(game);
    //right card
        hide(modifiers);
        show(timerDisplay);

//setting starting variable values
    //question pool based on difficulty
        if(currentDifficulty == "Easy") {
            questionPool = easyQuestionPool;
        } 
        else if(currentDifficulty == "Medium") {
            questionPool = mediumQuestionPool;
        }
        else if(currentDifficulty == "Hard") {
            questionPool = hardQuestionPool;
        };
        console.log("Using " + currentDifficulty + " question pool.");
    //setting remaining questions value
        questionsRemaining = questionPool.length;
    //shuffle question pool
        questionPool = shuffle(questionPool);

//timer logic
        timerEl.textContent = timeLimit;
        console.log("Timer set to " + timeLimit);
        var timer = setInterval(function(){
            timeLimit--;
            console.log(timeLimit + " seconds remaining.");
            timerEl.textContent = timeLimit;
            if(timeLimit == 0) {
                clearInterval(timer);
                endGame();
            }
            if(questionsRemaining == 0) {
                clearInterval(timer);
                endGame();
            }
        }, 1000);
        
//start questions
        newQuestion();

        console.log("---Game started---");

};

//event listeners
startButton.addEventListener("click", startGame);
easy.addEventListener("click", difficultySelect);
medium.addEventListener("click", difficultySelect);
hard.addEventListener("click", difficultySelect);
hint.addEventListener("click", displayHint);
document.addEventListener("keypress", keyPressAction);
optionsEl.addEventListener("click", clickOptionAction);
scoreSubmit.addEventListener("click", saveToLocal);