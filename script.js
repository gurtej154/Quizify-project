// creating functioning buttons witin the quiz
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = document.querySelector(".buttons .quit");
const continue_btn = document.querySelector("buttons .continue");

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