var quizQuestions = document.getElementById("quiz-questions");
var timer = document.getElementById("timer");
var btnStart = document.getElementById("btn-start");
var timeCounter = document.getElementById("timecounter");
var titleItem = document.getElementById("title-item");
var nextQuestions 
var qNa = document.getElementById("question-answers");
var myScore = document.getElementById("score");
var btnScore = document.getElementById("btnScore");
var currentIndex = 0;
var score = 0;
var count = 75;
var alert =document.getElementById("alert");
var info = document.getElementById("info");
var allScores = [];
var userScores = JSON.parse(localStorage.getItem("userData"));
var questions = [
    {
        inquiry: "If you type the following code in the console window, what result will you get? 3 > 2 > 1 === false;",
        options: ["A: True","B: False"],
        answer : "A: True"    
    },
    {
        inquiry: "JavaScript is a ___-side programming language.",
        options: ["A: Client","B: Server","C: Both Client & Server", "D: None of the Above"],
        answer : "C: Both Client & Server"    
    },
    {
        inquiry: "Which of the following will write the message 'Hello World!' in an alert box?",
        options: ["A: alertBox('Hello World!');","B: alert(Hello World!);","C: msgAlert('Hello World!');", "D: alert('Hello World!');"],
        answer : "D: alert('Hello World!');"    
    },
    {
        inquiry: "How do you find the minimum of x and y using JavaScript?",
        options: ["A: min(x,y);","B: Math.min(x,y)","C: Math.min(xy)","D: min(xy)"],
        answer : "B: Math.min(x,y)"    
    },
    {
        inquiry: "Which JavaScript label catches all the values, except for the ones specified?",
        options: ["A: catch","B: label","C: try", "D: default"],
        answer : "D: default"    
    },
    {
        inquiry:"Determine the result - String('Hello')==='Hello';",
        options: ["A: true", "B: false", "C:SyntaxError", "D:ReferenceError"],
        answer: "A: true"
    },
    {
        inquiry: "What is the correct JavaScript syntax to print 'Hello World' in the console?",
        options: ["A: print('Hello World');", "B: console.print('Hello World');", "C: log.console('Hello World');", "D: console.log('Hello World');"],
        answer: "D: console.log('Hello World');"
    }
]
btnStart.addEventListener("click", starQuiz);
function starQuiz(){
    if(userScores !==null) {
        allScores = userScores;
    }
    info.classList.add("d-none")
    btnStart.classList.add("d-none")
    timeCounter.classList.remove("d-none")
    quizQuestions.classList.remove("d-none")
    nextQuestions= questions[currentIndex]
    console.log(nextQuestions.title)
    
        displayQuestion(nextQuestions)

    gametime()
}
btnScore.addEventListener("click" , function(){
    let name = document.getElementById("inputScore").value
    scorePage(name, count)
});
// Game timer

function gametime(){

    var timeinterval = setInterval(function(){
        timer.innerText = count
         count--;
        }, 1000);

}

function scorePage(a, b) {

    var userData = {
        inits: a,
        userScore: b
    };
    allScores.push(userData);

    localStorage.setItem("userData", JSON.stringify(allScores));
    location.href = "score.html";
}

function displayQuestion(question){
    titleItem.innerText=question.inquiry
    question.options.forEach(element => {
     var button =document.createElement("button")
    button.className="btn-primary btn-block text-left"
    button.innerText=element
    qNa.appendChild(button)
    button.addEventListener("click", displaynextQuestion)
    });
}


function displaynextQuestion(e){
    currentIndex++
    if(currentIndex < questions.length){
        correction(e.target.innerText == nextQuestions.answer)
        qNa.innerHTML=""
        if(currentIndex < questions.length){    
            nextQuestions= questions[currentIndex]
            displayQuestion(nextQuestions)  
        }else {
            currentIndex = 0
            displayQuestion(nextQuestions)  
        }

    }else{
        console.log("endgame")
        endgame()
        

    }
    
     
}
function correction(response){
    
    if(response){
        alert.innerText= "Correct!"
        console.log("Correct!")
    }else {
        alert.innerText="Incorrect :("
        count = count -15
        timer.innerHTML = count
        console.log("Incorrect :(")

    }
    setTimeout(function(){
        alert.innerText=""
    
        }, 1000);

}
 function endgame (){
    myScore.innerText = count
    addscore.classList.remove("d-none")
    timeCounter.classList.add("d-none")
    quizQuestions.classList.add("d-none")
    addscore.classList.remove("d-none")


 }