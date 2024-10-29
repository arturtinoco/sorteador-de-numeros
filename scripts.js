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

// Generate a new random result from user inputs
function generateNumbers() {
    getValues()

    // Limits how many cards can be drawn
    let totalLimit = 0
    
    // Update to current input value
    totalToDraw = anyInputField.value

    while (totalLimit < totalToDraw) {
        // Create a new random number
        let newRandNum = getRandomNum(rangeMin, rangeMax)
        
        // Check if no-repeat switch is on
        if (!repeatNumber) {
            // Check if it's an impossible set to draw
            if (totalToDraw > rangeMax) {
                alert("Impossível não repetir um número neste intervalo. Atualize para novos valores.")
                return
            // Check if the number has already been drawn
            } else if (drawnList.includes(newRandNum)) {
                continue
            } else {
                // Insert new number in a result referrence array
                drawnList.push(newRandNum)
                totalLimit++
            }
        } else {
            drawnList.push(newRandNum)
            totalLimit++
        }
    } 
}

// Trigger result interface when clicked on submit button
drawButton.addEventListener("click", () => {
    // Switch input area to div#results on first draw
    if (firstDraw) {
        form.classList.add("hidden")
        results.classList.remove("hidden")
        drawButton.style.marginTop = "1.7rem"

        // Fill drawnList[] with random number(s)
        generateNumbers()

        // Switch button icon for replay
        updateButton()

        firstDraw = false
    } else {
        // Empty result array each round
        if (resultRoundIndex > 1) {
            for (let i = drawnList.length; i >= 0; i--) {
                drawnList.pop(drawnList)
            }
        }
        generateNumbers()
    }
    // Create animated elements to display results
    drawListedNumbers()
    
    // Clean result container for a new round
    updateResultContainer(resultRoundIndex)
    
    // Save numbers drawn quantity so far
    resultRoundIndex += 1
})
