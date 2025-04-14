// import { useDispatch, useSelector } from 'react-redux'
// import { useState } from 'react'

// import { ageUpAsync, ageDownAsync, setAge } from '../features/slice'

// function AgeDisplay() {
//     const dispatch = useDispatch()
//     const ageFromStore = useSelector((state) => state.ageList.age)
//     const [age, setAgeInput] = useState(0)

//     const increaseAge = () => {
//         dispatch(ageUpAsync(Number(age)))
//     }

//     const decreaseAge = () => {
//         dispatch(ageDownAsync(Number(age)))
//     }

//     const handleAge = (e) => {
//         setAgeInput(e.target.value)

//     }

//     const setExactAge = () => {
//         dispatch(setAge(Number(age)))
//     }

//     console.log('setAge is:', setAge)
//     return (
//         <div>
//             <input
//                 type="number"
//                 value={age}
//                 onChange={handleAge}
//                 placeholder="Enter age" />
//             <button onClick={setExactAge}>Set Exact Age</button>
//             <button onClick={increaseAge}>Increase Age</button>
//             <button onClick={decreaseAge}>Decrease Age</button>
//             <p>Results: {ageFromStore}</p>
//         </div>)
// }

// export default AgeDisplay
import { useSelector } from 'react-redux'
import Spinner from './Spinner'


function AgeDisplay() {
    const age = useSelector((state) => state.ageList.age)
    const loading = useSelector((state) => state.ageList.loading)

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Age: {age}</h2>
            {loading && <Spinner />}
        </div>
    )
}

export default AgeDisplay