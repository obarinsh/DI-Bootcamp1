import { useSelector, useDispatch } from 'react-redux'
import { adduser } from '../features/userSlice'
import { useRef } from 'react'

const Users = () => {
    const users = useSelector(state => state.usersReducer.users)
    const dispatch = useDispatch()
    const nameRef = useRef()
    const emailRef = useRef()

    return (<div>
        <h2>Users</h2>
        <input ref={nameRef} pleaceholder='name' />
        <input ref={emailRef} pleaceholder='email' />
        <button
            onClick={() => dispatch(adduserprepare(
                {
                    name: nameRef.current.value,
                    email: emailRef.current.value
                }))}>Add user</button>
        {users && users.map(item => {
            return (<div key={item.id}>
                {item.name}{item.email}
            </div>
            )
        })}
    </div>)
}

export default Users