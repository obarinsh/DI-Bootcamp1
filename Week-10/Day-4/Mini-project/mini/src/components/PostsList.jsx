import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'
import ReactionButton from "./ReactionButton"
import { fetchPosts } from '../features//posts/state/slice'


function PostsList() {
    const posts = useSelector((state) => state.postsReducer.posts)
    const status = useSelector((state) => state.postsReducer.status)
    const dispatch = useDispatch()
    console.log(posts)
    console.log(status)
    useEffect(() => {
        dispatch(fetchPosts());
    }, [])

    if (status === 'loading') return <h2>Loading...</h2>

    if (status === 'failed') return <h2>Oops...</h2>
    return (<div>
        <h2> Posts</h2>
        <section>
            {posts && posts.map(post => {
                return (
                    <article key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <ReactionButton />
                    </article>
                )
            })}
        </section>
    </div >)
}

export default PostsList