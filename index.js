let homeScorebtnone = document.getElementById("home-score-btn-1")
let homeScorebtntwo = document.getElementById("home-score-btn-2")
let homeScorebtnthree = document.getElementById("home-score-btn-3")
let homescoreEl = document.getElementById("home-score")
let homeScore = 0

function homescoreone() {
    homeScore += 1
    homescoreEl.textContent = homeScore
}

function homescoretwo() {
    homeScore += 2
    homescoreEl.textContent = homeScore
}

function homescorethree() {
    homeScore += 3
    homescoreEl.textContent = homeScore
}

let guestScorebtnone = document.getElementById("guest-score-btn-1")
let guestScorebtntwo = document.getElementById("guest-score-btn-2")
let guestScorebtnthree = document.getElementById("guest-score-btn-3")
let guestscoreEl = document.getElementById("guest-score")
let guestScore = 0

function guestscoreone() {
    guestScore += 1
    guestscoreEl.textContent = guestScore
}

function guestscoretwo() {
    guestScore += 2
    guestscoreEl.textContent = guestScore
}

function guestscorethree() {
    guestScore += 3
    guestscoreEl.textContent = guestScore
}