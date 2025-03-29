import { useState, useEffect } from 'react'


function Color() {
    const [favoriteColor, setFavoriteColor] = useState('red')
    useEffect(() => {
        setFavoriteColor('yellow')
    }, [])
    return (
        <div>
            <h1>My favorite color is {favoriteColor}</h1>
            <button onClick={() => setFavoriteColor('blue')}>Change color</button>
        </div>
    )

}

export default Color