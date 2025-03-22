let qh3 = document.createElement('h3')
qh3.id = 'question'
qh3.innerText = "Question: "
let ah3 = document.createElement('h3')
ah3.id = 'answer'
ah3.innerText = "Answer: "
let newDiv = document.createElement('div')
newDiv.id = 'frame'

let userInput = document.createElement('input')
userInput.id = 'answer'

let submitButt = document.createElement('button')
submitButt.id = 'submit'

let scoreH3 = document.createElement('h3')
scoreH3.id = 'score'
scoreH3.innerText = "Score: 0"

document.body.appendChild(qh3)
document.body.appendChild(newDiv)
document.body.appendChild(ah3)
document.body.appendChild(userInput)
document.body.appendChild(submitButt)
document.body.appendChild(scoreH3)


let isGameOver = false
let correctAnswer = ''
async function fetchQuiz() {
    try {
        const response = await fetch('/api/quiz')
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)

        const data = await response.json()
        console.log('Quiz Data:', data)

        if (data.done) {
            isGameOver = true
            qh3.innerText = '🎉 Quiz Finished!'
            await showFinalScore()
            return
        }

        qh3.innerText = `Question: ${data.question}`
        ah3.innerText = 'Answer: '
        userInput.value = ''
    } catch (error) {
        console.error('Error fetching quiz data:', error)
    }
}

// Submit answer and get next question
submitButt.addEventListener('click', async () => {
    const userAnswer = userInput.value.toLowerCase().trim()
    if (!userAnswer || isGameOver) return

    try {
        const res = await fetch('/api/quiz', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ answer: userAnswer })
        })

        const data = await res.json()

        if (data.error) {
            ah3.innerText = 'Answer: ⚠️ ' + data.error
            return
        }

        ah3.innerText = data.isCorrect ? 'Answer: ✅ Correct!' : 'Answer: ❌ Wrong!'

        if (data.done) {
            isGameOver = true
            qh3.innerText = '🎉 Quiz Finished!'
            await showFinalScore()
        } else {
            qh3.innerText = `Question: ${data.nextQuestion}`
            userInput.value = ''
        }
    } catch (error) {
        console.error('Error submitting answer:', error)
    }
})

// Show final score
async function showFinalScore() {
    try {
        const res = await fetch('/api/quiz/score')
        const data = await res.json()
        scoreH3.innerText = `🏆 Final Score: ${data.score} / ${data.total}`
    } catch (err) {
        console.error('Error fetching score:', err)
    }
}

// Initial question
fetchQuiz()
