import { fetchUsers } from '../features//posts/state/slice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function FilterPosts() {
    const posts = useSelector((state) => state.postsview.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])
    const uniqueAuthors = [...new Set(posts.map((post) => post.userId))]
    return (
        <div>
            <h1>Authors</h1>
            <select>
                <option value="">All</option>
                {uniqueAuthors.map((userId) => (
                    <option key={userId} value={userId}>
                        Author {userId}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default FilterPosts