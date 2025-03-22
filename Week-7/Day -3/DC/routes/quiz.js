const express = require('express')
const router = express.Router()

const triviaQuestions = [
    {
        question: "What is the capital of France?",
        answer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars",
    },
    {
        question: "What is the largest mammal in the world?",
        answer: "Blue whale",
    },
    {
        question: "Who painted the Mona Lisa?",
        answer: "Leonardo da Vinci",
    },
    {
        question: "What is the smallest prime number?",
        answer: "2",
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answer: "Carbon dioxide",
    },
    {
        question: "How many continents are there on Earth?",
        answer: "7",
    },
    {
        question: "What is the currency of Japan?",
        answer: "Yen",
    },
    {
        question: "In which sport would you perform a slam dunk?",
        answer: "Basketball",
    },
    {
        question: "Which element has the chemical symbol O?",
        answer: "Oxygen",
    },
]

router.get('/', (req, res) => {
    const randomQuestion = triviaQuestions[Math.floor(Math.random() * triviaQuestions.length)]
    res.json(randomQuestion) // ✅ Full object, not just .question
})

let userState = {
    currentIndex: 0,
    score: 0,
}
router.get('/', (req, res) => {
    if (userState.currentIndex >= triviaQuestions.length) {
        return res.json({ done: true })
    }

    const question = triviaQuestions[userState.currentIndex]
    res.json({ question: question.question }) // Only send the question text
})

router.post('/', (req, res) => {
    const userAnswer = req.body.answer

    if (!userAnswer || userState.currentIndex >= triviaQuestions.length) {
        return res.status(400).json({ error: 'Invalid submission or quiz complete' })
    }

    const currentQ = triviaQuestions[userState.currentIndex]
    const isCorrect = userAnswer.trim().toLowerCase() === currentQ.answer.toLowerCase()

    if (isCorrect) userState.score++
    userState.currentIndex++

    if (userState.currentIndex >= triviaQuestions.length) {
        return res.json({ done: true, isCorrect })
    }

    const nextQ = triviaQuestions[userState.currentIndex]
    res.json({
        done: false,
        isCorrect,
        nextQuestion: nextQ.question
    })
})

router.get('/score', (req, res) => {
    res.json({
        score: userState.score,
        total: triviaQuestions.length
    })
})
module.exports = router

