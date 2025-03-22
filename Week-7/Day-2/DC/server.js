import express from 'express'
import { emojis } from './data/emojis.js'
import { getRandomElementFromArray } from './utils/utils.js'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`run on ${PORT}`)
})


const leaderboard = []

export const getWrongAnswers = (arr, correctName) => {
    const usedNames = new Set([correctName])

    const getUniqueWrongAnswer = () => {
        let name
        do {
            name = getRandomElementFromArray(arr).name
        } while (usedNames.has(name))
        usedNames.add(name)
        return name
    }

    const wrongAnswer1 = getUniqueWrongAnswer()
    const wrongAnswer2 = getUniqueWrongAnswer()
    const wrongAnswer3 = getUniqueWrongAnswer()

    return [wrongAnswer1, wrongAnswer2, wrongAnswer3]
}

app.get('/play', (req, res) => {
    const randomEmoji = getRandomElementFromArray(emojis)
    const correctName = randomEmoji.name
    const wrongAnswers = getWrongAnswers(emojis, correctName)

    const options = [...wrongAnswers, correctName].sort(() => 0.5 - Math.random())

    res.json({
        emoji: randomEmoji.emoji,
        correct: correctName,
        options
    })
})

app.post('/quiz', (req, res) => {
    console.log('Request body:', req.body)

    const { userAnswer, correctAnswer } = req.body || {}

    if (!userAnswer || !correctAnswer) {
        return res.status(400).json({ error: 'Missing answer data.' })
    }

    const isCorrect = userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()

    res.json({ isCorrect })
})
app.post('/submit-score', (req, res) => {
    const { name, score } = req.body

    if (!name || typeof score !== 'number') {
        return res.status(400).json({ error: 'Invalid data' })
    }

    leaderboard.push({ name, score })

    // Keep only top 5
    leaderboard.sort((a, b) => b.score - a.score)
    leaderboard.splice(5)

    res.json({ message: 'Score submitted!' })
})
app.get('/leaderboard', (req, res) => {
    res.json(leaderboard)
})