import data from './data/data.json'

function PostList() {

    return (
        <div>
            {data.map((post) => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <h2>{post.content}</h2>
                    <h2>{post.slug}</h2>

                </div>
            ))}
        </div>
    )

}

export default PostList