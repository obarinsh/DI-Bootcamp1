
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import memo from 'react'


const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
};
const ReactionButton = () => {
    const [emojiCounts, setEmojiCounts] = useState({
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    })

    const handleClick = (name) => {
        setEmojiCounts((prevCounts) => ({
            ...prevCounts,
            [name]: prevCounts[name] + 1
        }))
    }

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            {Object.entries(reactionEmoji).map(([name, emoji]) => (
                <button
                    key={name}
                    className="reactionButton"
                    onClick={() => handleClick(name)}
                >
                    {emoji} {emojiCounts[name]}
                </button>
            ))}
        </div>
    )
}
export default ReactionButton