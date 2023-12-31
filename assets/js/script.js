// FUCTIONS: Start , End, Timer

//GEN: Get all importnat IDs and classes, scores global scope
var startScreen = document.querySelector(".start-screen");
var startBtn = document.querySelector("#start-button");
var timerEl = document.querySelector("#timer");
var timeRemainingEl = document.querySelector("#time-remaining");
var optionsEl = document.getElementById("container")
var displayContainer = document.getElementById("display-container")
var questionCount = 0;
var incorrectSubmission = 0;
var timeLeft = 60;
var timePenalty = -6;
var timeInterval;

//array of objects with questions and answers
var questionList = [
    {
        question: "JavaScript is an ____ language?", 
        choices: [
            ["Object-Oriented", true],
            ["Object-Based", false],
            ["Procedural", false],
            ["None of the above", false],
        ],
    },

    {
        question: "Which of the following keywords is used to define a variable in JavaScript?", 
        choices: [
            ["var", false],
            ["let", false],
            ["Both A and B", true],
            ["None of the above", false], 
        ],
    },

    {
        question: "Which of the following methods can be used to display data in some form using JavaScript?", 
        choices: [
            ["document.write()", false],
            ["console.log()", false],
            ["window.alert()", false],
            ["All of the above", true], 
        ],
    },

    {
        question: "Upon encountering empty statements, what does the JavaScript Interpreter do?", 
        choices: [
            ["Throws an error", false],
            ["Ignores the statements", true],
            ["Gives a warning", false],
            ["None of the above", false], 
        ],
    },

    {
        question: "How can a datatype be declared to be a constant type?", 
        choices: [
            ["const", true],
            ["var", false],
            ["let", false],
            ["constant", false], 
        ],
    },
]

timeRemainingEl.textContent = timeLeft + "s";
// START 
timeLeft = 60;
timePenalty = -6;
questionCount = 0;

//1. Get Start button Id 
function startQuiz() {
    startScreen.style.display = "none";
    displayContainer.setAttribute("style", "background-color: grey;");
    createQuestion();


}

   
//2. Set Timer 
    //create function for timer that is called in start button
function countdown() {
    // setInterval() (reference class material)
    var timeInterval = setInterval(function() {
        timeLeft--;
        if(timeLeft < 0) {
            timeLeft = 0;
            
       }
        timeRemainingEl.textContent = timeLeft + "s";
        if(timeLeft <= 0) {
            clearInterval(timeInterval);
            endQuiz();
        }
        }, 1000);
}



// Create Question function
    function createQuestion() {

        var currentQuestion = questionList[questionCount];
        var questionText = document.createElement("h3");
        questionText.textContent = currentQuestion.question;
        optionsEl.appendChild(questionText);

        for(var i = 0; i < currentQuestion.choices.length; i++) {
            var currentAnswer = currentQuestion.choices[i];

            var answerText = document.createElement("li");
            answerText.textContent = currentAnswer[0];
            optionsEl.appendChild(answerText);

            answerText.addEventListener("click", function() {
                var selectedChoice = this.textContent;
                checkAnswer(selectedChoice);
            });
        }

        questionCount ++;

    }
// Check Answer function that will return "Correct" or "Incorrect" based on user selection. 6 second penalty for incorrect submission
    function checkAnswer(selectedChoice) {
        var currentQuestion = questionList[questionCount - 1];
        var correctChoice = null;

        for(var i = 0; i < currentQuestion.choices.length; i++) {
            if (currentQuestion.choices[i][1]) {
                correctChoice = currentQuestion.choices[i][0];
                break;

            }
        }

        if(selectedChoice === correctChoice) {
            displayContainer.textContent = "Correct!"
        } else {
            displayContainer.textContent = "Incorrect!";
            timeLeft += timePenalty;
            if(timeLeft < 0) {
                timeLeft = 0;
            }
            timeRemainingEl.textContent = timeLeft + "s";
        }

        questionCount++;

        if(questionCount < questionList.length) {
            createQuestion();
        } else {
            endQuiz();
        }
    }

    //start end functioon()
    function endQuiz() {

        var quizResults = {
            questionCount: questionCount,
            timeLeft: timeLeft,
        };
        localStorage.setItem("quizResults", JSON.stringify(quizResults))

    }
//4. Get end button ID
// set up the activate the end and save the scores 
    //a.prompt route: Ask for name 
    //b. confirm the user got ____ points do you want ot add to the scoreboard
    //if true submit to local storage and then navigate to next page else navigate to next page  

    startBtn.addEventListener("click", function(){
        countdown();
        startQuiz();
    });