// The highscores section stores the score and displays it in an order
var highscoresArr = JSON.parse(localStorage.getItem("highscores"));
var initialsArr = JSON.parse(localStorage.getItem("initials"));
console.log(initialsArr)
for(i=0;i<highscoresArr.length;i++) {
    var listArr = document.createElement("li")
    listArr.textContent = initialsArr[i].toUpperCase() + " - " + highscoresArr[i]
    document.querySelector("ul").appendChild(listArr)
    document.querySelector("ul").appendChild(listArr)
}