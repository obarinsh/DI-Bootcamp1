import { useState } from 'react'


// function Events() {
//     const handleKeyDown = (event) => {
//         console.log('Key pressed:', event.key)
//         if (event.key === 'Enter') {
//             alert('The Enter key was pressed, you input is:React')
//         }
//     }
//     // const clickMe = () => {
//     //     // alert('I was clicked');
//     // }
//     // return (<button onClick={clickMe}>
//     //     Click me
//     // </button>
//     // )
//     return (
//         <input type="text" placeholder="Press the ENTER key!" onKeyDown={handleKeyDown} />
//     )
// }


// Part III:
// In the Events Functional component, using the state hook, 
// declare a state variable named isToggleOn and set it to true.

// In the return, create a button that has an onClick event that will
//  switch the state variable between ‘ON’ and ‘OFF’

// Create a function that will be called by the onClick event handler.
//  In the function you should toggle the value of the isToggleOn state variable.

function Events() {

    const [isToggleOn, switchState] = useState(true);
    const handleSwitch = () => {
        switchState(!isToggleOn);
    }

    return (
        <button onClick={handleSwitch}>
            {isToggleOn ? 'ON' : 'OFF'}
        </button>
    )
}
export default Events