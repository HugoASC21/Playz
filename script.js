//div calls
let movieScreen = document.querySelector("#movies");
let musicScreen = document.querySelector("#music");
let gameScreen = document.querySelector("#games");
let homeScreen = document.querySelector("#home");

//button calls
let homeButton = document.querySelector("#homeButton")
let moviesButton = document.querySelector("#moviesButton")
let gamesButton = document.querySelector("#gamesButton")
let musicButton = document.querySelector("#musicButton")

//default startup
homeScreen.style.display = "flex"
musicScreen.style.display = "none"
gameScreen.style.display = "none"
movieScreen.style.display = "none"

//switch screens
homeButton.onclick = function (event) {
    homeScreen.style.display = "flex"
    musicScreen.style.display = "none"
    gameScreen.style.display = "none"
    movieScreen.style.display = "none"
}
moviesButton.onclick = function (event) {
    event.preventDefault()
    homeScreen.style.display = "none"
    musicScreen.style.display = "none"
    gameScreen.style.display = "none"
    movieScreen.style.display = "flex" 
}
musicButton.onclick = function (event) {
    event.preventDefault()
    homeScreen.style.display = "none"
    musicScreen.style.display = "flex"
    gameScreen.style.display = "none"
    movieScreen.style.display = "none"
}
gamesButton.onclick = function(event) {
    event.preventDefault()
    homeScreen.style.display = "none"
    musicScreen.style.display = "none"
    gameScreen.style.display = "flex"
    movieScreen.style.display = "none"
}
// movies




// music 

