import { useState, createContext, useEffect } from "react"



export const ThemeContex = createContext()
function Theme() {
    const [theme, changeTheme] = useState('light')

    useEffect(() => {
        document.body.style.backgroundColor = theme === 'light' ? 'white' : 'black'
        document.body.style.color = theme === 'light' ? 'black' : 'white'
    }, [theme])
    return (
        <ThemeContex.Provider value={{ theme, changeTheme }}>
            <h1>Hello world!</h1>
            <button onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme</button>
        </ThemeContex.Provider>
    )
}

export default Theme