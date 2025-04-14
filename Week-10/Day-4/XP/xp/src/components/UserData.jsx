import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../features/slice'
function UserData() {
    const { data, error } = useSelector((state) => state.usersList || {})
    const dispatch = useDispatch()

    const displayUserData = () => {
        console.log('🟡 Dispatching fetchUser...')
        dispatch(fetchUser(2))
    }
    return (<div>
        <h1>User data:</h1>
        <button onClick={displayUserData}>Fetch User</button>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {data && (<div style={{ marginTop: '1rem' }}>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Username:</strong> {data.username}</p>
        </div>
        )}
    </div>)
}

export default UserData