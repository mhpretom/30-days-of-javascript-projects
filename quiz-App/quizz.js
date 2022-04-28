

const quizDetails=[
    {
        question:"What is JavaScript?",
        a:"JavaScript is a scripting language used to make the website interactive",
        b:"JavaScript is an assembly language used to make the website interactive",
        c:"JavaScript is a compiled language used to make the website interactive",
        d:"None of the mentioned",
        correct:"a"
    },
    {
        question:"Which of the following is correct about JavaScript?",
        a:"JavaScript is an Object-Based language",
        b:"JavaScript is Assembly-language",
        c:"JavaScript is an Object-Oriented language",
        d:"JavaScript is a High-level language",
        correct:"a"
    },
    {
        question:"Among the given statements, which statement defines closures in JavaScript?",
        a:"JavaScript is a function that is enclosed with references to its inner function scope",
        b:" JavaScript is a function that is enclosed with references to its lexical environment",
        c:"JavaScript is a function that is enclosed with the object to its inner function scope",
        d:"None of the mentioned",
        correct:"b"
    },
    {
        question:"Arrays in JavaScript are defined by which of the following statements?",
        a:"It is an ordered list of values",
        b:"It is an ordered list of objects",
        c:"It is an ordered list of string",
        d:"It is an ordered list of functions",
        correct:"a"
    },
    {
        question:"Which of the following is not javascript data types?",
        a:"Null type",
        b:" Undefined type",
        c:"Number type",
        d:"All of the mentioned",
        correct:"d"
    },
    {
        question:"Where is Client-side JavaScript code is embedded within HTML documents?",
        a:"A URL that uses the special javascript:code",
        b:"A URL that uses the special javascript:protocol",
        c:"A URL that uses the special javascript:encoding",
        d:"A URL that uses the special javascript:stack",
        correct:"b"
    },
    {
        question:"Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        a:"Position",
        b:"Window",
        c:"Standard",
        d:"Location",
        correct:"a"
    },
    {
        question:"Which of the following can be used to call a JavaScript Code Snippet?",
        a:"Function/Method",
        b:"Preprocessor",
        c:" Triggering Event",
        d:"RMI",
        correct:"a"
    },
    {
        question:"Which of the following scoping type does JavaScript use?",
        a:"Sequential",
        b:"Segmental",
        c:"Lexical",
        d:"Literal",
        correct:"d"
    },
    {
        question:"Which of the following is not a framework?",
        a:"JavaScript .NET",
        b:"JavaScript",
        c:"Cocoa JS",
        d:"jQuery",
        correct:"b"
    }
]

const questionEl=document.querySelector(".question");
const option1El=document.querySelector(".a");
const option2El=document.querySelector(".b");
const option3El=document.querySelector(".c");
const option4El=document.querySelector(".d");
const buttonEl=document.querySelector(".btn");
const answerEl=document.querySelectorAll("input");
var scoreEl=document.querySelector(".question-container");
var quizElement=0;
var score=0;

function loadQuizz(){
    deSelect();
    questionEl.innerText=quizDetails[quizElement].question;
    option1El.innerText=quizDetails[quizElement].a;
    option2El.innerText=quizDetails[quizElement].b;
    option3El.innerText=quizDetails[quizElement].c;
    option4El.innerText=quizDetails[quizElement].d;

}

loadQuizz();


function selected(){
    var result=undefined;
    answerEl.forEach((answer)=>{
        if(answer.checked)
        {
            result=answer.id;
        }
    })
    return result;
}

function deSelect(){
    answerEl.forEach((answer)=>{
        answer.checked=false;
    })
}


buttonEl.addEventListener("click",function(){
   
    var quizSelection=selected();
    if(quizSelection)
    {
        if(quizSelection === quizDetails[quizElement].correct)
        {
            score++;
        }
        quizElement++;
        if(quizElement < quizDetails.length)
        {    
            loadQuizz();
        }
        else{
            scoreEl.innerHTML=`<h1>Your score is ${score}/${quizDetails.length}</h1>`;
        }
    }    



    
})
