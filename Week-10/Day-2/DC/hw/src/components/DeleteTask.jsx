import { useSelector, useDispatch } from 'react-redux'
import { removeTask } from '../features/taskSlice'


function DeleteTask(taskId) {
    dispatch(removeTask({ date: formattedDate, id: taskId }))
}


return (<></>)
}

export default DeleteTask