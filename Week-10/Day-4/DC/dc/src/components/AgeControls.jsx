import { useDispatch } from 'react-redux'
import { ageUpAsync, ageDownAsync } from '../features/slice'

function AgeControls() {
    const dispatch = useDispatch()

    return (
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button onClick={() => dispatch(ageUpAsync())}>Age Up</button>
            <button onClick={() => dispatch(ageDownAsync())}>Age Down</button>
        </div>
    )
}

export default AgeControls