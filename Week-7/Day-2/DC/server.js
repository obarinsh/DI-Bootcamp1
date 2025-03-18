
import express from 'express'
import { emojis } from './data/emojis.js'
import { getRandomNumber, getRandomElementFromArray }
const app = express()

const PORT = process.env.PORT || 5000
app.use(express.json())

app.listen(PORT, () => {
    console.log(`run on ${PORT}`)
})

app.get('/play', (req, res) => {
    const randomEmoji = getRandomElementFromArray(emojis)

}
)

