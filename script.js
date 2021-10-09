// creating functioning buttons witin the quiz
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = document.querySelector(".quit");
const continue_btn = document.querySelector(".continue");
const quiz_box = document.querySelector(".quiz_box")
const timeCount = quiz_box.querySelector(".timer .timer_sec");
const timeLine = quiz_box.querySelector("header .time_line");
const option_list = document.querySelector(".option_list");

var submitScore = document.querySelector(".leader_board")
var userInitials = submitScore.querySelector("#initials")

// when the play button is clicked, the following function occurs
start_btn.onclick = () => {
    // displays the information section
    info_box.classList.add("activeInfo");
}

// when the exit quizify button is clicked, the following function occurs
exit_btn.onclick = () => {
    //hides the information section 
    info_box.classList.remove("activeInfo");
}

// when the continue quizify button is clicked, the following function occurs
continue_btn.onclick = () => {
    //hides the information section 
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer()
    startTimerLine(0);
}

submitScore.onclick = () => {
    saveScore();
}

//When a probable answer is clicked, a alert is given on weather the answer is correct or incorrect

var questions = [
    {

        numb: 1,
        question: "What are the JavaScript data types?",
        answer: "All the above",
        options: [
            "Number",
            "String",
            "Boolean",
            "Object",
            "Undefined",
            "All the above"
        ]
    },
    {
        numb: 2,
        question: "The condition in an if or else ststement is enclosed within?",
        answer: "Parentheses",
        options: [
            "Quotes",
            "Curly brackets",
            "Parentheses",
            "Square brackets",
            "Parenthese brackets",
            "None of the above"
        ]
    },
    {
        numb: 3,
        question: "What tag does JavaScript begin with?",
        answer: "Script tag",
        options: [
            "Script tag",
            "JavaScript tag",
            "Language tag",
            "HTML tag",
            "CSS tag",
            "None of the above"

        ]
    },
    {
        numb: 4,
        question: "JavaScript is a _________ programming language?",
        answer: "Server-side",
        options: [
            "Client-side",
            "Server-side",
            "Java",
            "Object oriented",
            "Interative",
            "All the above"
        ]
    },
    {
        numb: 5,
        question: "What is an array?",
        answer: "A variable that is used to store different elements",
        options: [
            "Single variable",
            "A function",
            "A variable that is used to store different elements",
            "A declaration element",
            "Referencing element",
            "All the above"
        ]
    },
];

let que_count = 0;
let que_numb = 1;
let counter;
let counterLine;
let widthValue = 0;
let userScore = 0;




const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".restart");
const quit_quiz = result_box.querySelector(".quit");

restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    let que_count = 0;
    let que_numb = 1;
    let widthValue = 0;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter)
    startTimer()
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
}

quit_quiz.onclick = () => {
    window.location.reload();
}

next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter)
        startTimer()
        clearInterval(counterLine);
        startTimerLine(widthValue);
        next_btn.style.display = "none";
    } else {
        console.log("Questions completed");
        showResultBox();
    }
}

// Function to allow questions to display in the input screen
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class ="option">' + questions[index].options[0] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[3] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[4] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[5] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }

}

function optionSelected(answer) {
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if (userAns == correctAns) {
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct")
        console.log("Answer is correct");
    } else {
        answer.classList.add("incorrect")
        console.log("Answer is wrong")
        time = time - 10


        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct");

            }
        }
    }

    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display = "block";

}
function showResultBox() {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3) {
        let scoreTag = '<span>Congrats! You recieved <p>' + userScore + '</p>out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if (userScore > 1) {
        let scoreTag = '<span>Good effort, you recieved <p>' + userScore + '</p>out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else {
        let scoreTag = '<span>Bad luck, you recieved <p>' + userScore + '</p>out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

var time = 59
function startTimer() {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(counter);
            timeCount.textContent = "0"
            
        }
    }
}

var time = 59
function startTimerLine(time) {
    counterLine = setInterval(timer, 10);
    function timer() {
        time += 1;
        timeLine.style.width = time + "px";
        if (time > 549) {
            clearInterval(counterLine);
        }
    }
}

// Adding current score from quiz to highscores section
function saveScore(event) {
    event.preventDefault()

    var userInitials = submitScore.querySelector("#initials").value
    if (userInitials === "" || userInitials.length > 2) {
        alert("Enter your initials to proceeed, example 'GS'")
        return
    }

    document.querySelector(".leader_board").style.display = "none"

    var initialsArr = [];
    var scoresArr = [];
    initialsArr = JSON.parse(localStorage.getItem("initials"));
    scoresArr = JSON.parse(localStorage.getItem("highscores"));
    if(initialsArr == null && scoresArr == null) {
        initals = [userInitials];
        scoresArr = [userScore];
    }else{ 
        initialsArr.push(userInitials)
        scoresArr.push(userScore)
    }

    localStorage.setItem("initials", JSON.stringify(initialsArr));
    localStorage.setItem("highscores", JSON.stringify(scoresArr));

    document.querySelector(".buttons").style.display = "flex"
    userInitials.value = ""

}

// Function to move through each quiz question 
function queCounter(index) {
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}