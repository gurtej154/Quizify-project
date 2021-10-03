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
}