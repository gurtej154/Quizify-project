// creating functioning buttons witin the quiz
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = document.querySelector(".quit");
const continue_btn = document.querySelector(".continue");
const quiz_box = document.querySelector(".quiz_box")

// when the play button is clicked, the following function occurs
start_btn.onclick = ()=> {
    // displays the information section
    info_box.classList.add("activeInfo");
}

// when the exit quizify button is clicked, the following function occurs
exit_btn.onclick = ()=> {
    //hides the information section 
    info_box.classList.remove("activeInfo");
}

// when the continue quizify button is clicked, the following function occurs
continue_btn.onclick = ()=> {
    //hides the information section 
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
}

//When a probable answer is clicked, a alert is given on weather the answer is correct or incorrect

var letQuestions = [{
        question: "What are the JavaScript data types?",
        answers: {
            a:"Number",
            b:"String",
            c:"Boolean",
            d:"Object",
            e:"Undefined",
            f:"All the above"
        }, 
        correctAnswer: "All the above"
    }, 
    {
        question: "The condition in an if or else statement is enclosed within?",
        answers: {
            a:"Quotes",
            b:"Curly brackets",
            c:"Parentheses",
            d:"Square brackets"
        },
        correctAnswer: "Parentheses"
    },
    {
        question: "What tag does JavaScript begin with?",
        answers: {
            a:"Script tag",
            b:"JavaScript tag",
            c:"Language tag",
            d:"None of the above"
        },
        correctAnswer: "Script tag"
    },
    { 
        question: "JavaScript is a ______ programming language?",
        answers: {
            a:"Client",
            b:"Serverside",
            c:"Java",
            d:"None"
        },
        correctAnswer: "Server-side"
    },
    {
        question: "Which of the following will write the message 'Hello World!' in an alert box?",
        answers: {
            a:"alert('Hello World!');",
            b:"alert(HelloWorld!);",
            c:"msgAlert('Hello World!');",
            d:"alert('Hello World!');"
        },
        correctAnswer: "alert('Hello World');"
    }]

    let que_count = 0;

    // Function to allow questions to display in the input screen
    function showQuestions(index){
        const que_text = document.querySelector(".que_text");
        const option_list = document.querySelector(".option_list");
        let que_tag = '<span>'+ letQuestions[index].question +'</span>';
        let option_tag = '<div clas ="option">'+ letQuestions[index].answers[0] +'<span></span></div>'
        + '<div class="option"><span></span></div>'
        + '<div class="option"><span></span></div>'
        + '<div class="option"><span></span></div>';
        que_text.innerHTML = que_tag;
        option_list.innerHTML = option_tag;
    }