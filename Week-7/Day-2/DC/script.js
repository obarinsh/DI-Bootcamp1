const quizUrl = 'http://localhost:3000/play'
const answerUrl = 'http://localhost:3000/quiz'


let score = 0
let playerName = ''
let correctAnswer = null

async function loadQuiz() {
    const res = await fetch(quizUrl)
    const data = await res.json()

    console.log('DATA FROM /play:', data) // ✅ log only once

    document.getElementById('emoji').textContent = data.emoji
    correctAnswer = data.correct // ✅ this line is key!

    const optionsDiv = document.getElementById('options')
    optionsDiv.innerHTML = ''

    data.options.forEach(option => {
        const label = document.createElement('label')
        label.innerHTML = `
        <input type="radio" name="answer" value="${option}" required />
        ${option}
      `
        optionsDiv.appendChild(label)
        optionsDiv.appendChild(document.createElement('br'))
    })
}

document.getElementById('quizForm').addEventListener('submit', async e => {
    e.preventDefault()

    const form = e.target
    const userAnswer = form.answer.value
    console.log('Sending:', { userAnswer, correctAnswer })
    const res = await fetch(answerUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userAnswer, correctAnswer })
    })

    const result = await res.json()
    document.getElementById('result').textContent = result.isCorrect
        ? 'Correct!'
        : 'Try again!'

    if (result.isCorrect) {
        score++
        document.getElementById('result').textContent = '✅ Correct!'
    } else {
        document.getElementById('result').textContent = '❌ Try again!'
    }

    document.getElementById('playerScore').textContent = `Score: ${score}`
    setTimeout(() => {
        document.getElementById('result').textContent = ''
        loadQuiz()
    }, 2000)
})


document.getElementById('startBtn').addEventListener('click', () => {
    playerName = prompt('Enter your name:')
    if (!playerName) return

    document.getElementById('quiz').style.display = 'block'
    document.getElementById('startBtn').style.display = 'none'
    loadQuiz()
})


document.getElementById('submitScoreBtn').addEventListener('click', async () => {
    const res = await fetch('http://localhost:3000/submit-score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: playerName, score })
    })

    const data = await res.json()
    alert(data.message)

    // Reload leaderboard
    loadLeaderboard()
})

async function loadLeaderboard() {
    const res = await fetch('http://localhost:3000/leaderboard')
    const data = await res.json()

    const list = document.getElementById('leaderboardList')
    list.innerHTML = ''

    data.forEach(entry => {
        const li = document.createElement('li')
        li.textContent = `${entry.name}: ${entry.score}`
        list.appendChild(li)
    })
}