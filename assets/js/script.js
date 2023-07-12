// FUCTIONS: Start , End, Timer

//GEN: Get all importnat IDs and classes, scores global scope
var startBtn = document.querySelector(".start-screen");
var timerEl = document.querySelector("#timer");
var timeRemainingEl = document.querySelector("#time-remaining");
var optionsEl = document.getElementById("container")
var nextBtn = document.querySelector("#next-button");
var timeInterval;
var timeLeft = 60;
var timePenalty = -6;

//array of objects with questions and answers
var questionList = [
    {question: "JavaScript is an ____ language?", choices: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"], answer: "Object-Oriented"},
    {question: "Which of the following keywords is used to define a variable in JavaScript?", choices: ["var", "let", "Both A and B", "None of the above"], answer: "Both A and B"},
    {question: "Which of the following methods can be used to display data in some form using JavaScript?", choices: ["document.write()", "console.log()", "window.alert()", "All of the above"], answer: "All of the above"},
    {question: "Upon encountering empty statements, what does the JavaScript Interpreter do?", choices: ["Throws an error", "Ignores the statements", "Gives a warning", "None of the above"], answer: "Ignores the statements"},
    {question: "How can a datatype be declared to be a constant type?", choices: ["const", "var", "let", "constant"], answer: "const"},
]

timeRemainingEl.textContent = timeLeft + "s";
// START 
//1. Get Start button Id 
    //a. hide start button
    //b. display the question
    //c. start timer
    //for loop going through the questions {
    //     call the next function
    // }
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
            // End Game function
        }


        }, 1000);
}
//3. Get Next button Id
    // checking system 
    // item in array needs to be checked then we need to increase the count if correct and decrease the time 
        //a.check to make sure that the answer is correct (if-else statement)
        //b.if correct increase score, let them know  and go to next question else decrease 6 seconds, let them know and go to next question
        //c. event listener on the next button
        startBtn.addEventListener("click", function(){
            countdown()
        });
    //if on last ques
    //start end functioon()
//4. Get end button ID
// set up the activate the end and save the scores 
    //a.prompt route: Ask for name 
    //b. confirm the user got ____ points do you want ot add to the scoreboard
    //if true submit to local storage and then navigate to next page else navigate to next page  