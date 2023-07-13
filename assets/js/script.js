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
    {question: "JavaScript is an ____ language?", 
    choices: ["Object-Oriented", true, "Object-Based", false, "Procedural", false, "None of the above", false], 
    answer: "Object-Oriented"},

    {question: "Which of the following keywords is used to define a variable in JavaScript?", 
    choices: ["var", false, "let", false, "Both A and B", true, "None of the above", false], 
    answer: "Both A and B"},

    {question: "Which of the following methods can be used to display data in some form using JavaScript?", 
    choices: ["document.write()", false, "console.log()", false, "window.alert()", false, "All of the above", true], 
    answer: "All of the above"},

    {question: "Upon encountering empty statements, what does the JavaScript Interpreter do?", 
    choices: ["Throws an error", false, "Ignores the statements", true, "Gives a warning", false, "None of the above", false], 
    answer: "Ignores the statements"},

    {question: "How can a datatype be declared to be a constant type?", 
    choices: ["const", true, "var", false, "let", false, "constant", false], 
    answer: "const"},
]

timeRemainingEl.textContent = timeLeft + "s";
// START 
//1. Get Start button Id 
function startQuiz() {
    timeLeft = 60;
    timePenalty = -6;
    questionCount = 0;
    countdown();
    createQuestion();


}

    startScreen.addEventListener("click", function(){
        startQuiz()
    });
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
            
        }
        else {
            endQuiz();
        }
        }, 1000);
}

        startBtn.addEventListener("click", function(){
            countdown()
        });
    function createQuestion() {
        var currentQuestion = questionList[questionCount];
        //Clear options
        optionsEl.innerHTML + "";
        
        var questionEl = document.createElement("h2");
        questionEl.textContent = currentQuestion.question;
        optionsEl.appendChild(questionEl);

        for(var i = 0; i < length; i++) {
            
        }

    }
    //start end functioon()
    function endQuiz() {

    }
//4. Get end button ID
// set up the activate the end and save the scores 
    //a.prompt route: Ask for name 
    //b. confirm the user got ____ points do you want ot add to the scoreboard
    //if true submit to local storage and then navigate to next page else navigate to next page  