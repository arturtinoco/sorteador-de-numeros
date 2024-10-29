// Get form header elements
const formHeader = document.querySelector("div#form-wrapper header")
const headerH4 = formHeader.querySelector("h4")
const headerP = formHeader.querySelector("p")

// Get input area elements
const form = document.querySelector("form")
var totalToDraw = Number(document.getElementById("total-number").value)
var rangeMin = Number(document.getElementById("from-number").value)
var rangeMax = Number(document.getElementById("to-number").value)
const anyInputField = document.querySelector("input")

const results = document.getElementById("results")

const drawButton = document.querySelector("button[type='submit']")
const straightArrow = drawButton.querySelector("img")

// Utility variables
let firstDraw = true
let resultRoundIndex = 1
let drawnList = []
let delayMS = 2500 // 2500ms -> 2.5s between each draw
let repeatNumber = document.querySelector("input[type='checkbox']:checked")