

function Votes({ language, addVote }) {
    const { name, votes } = language

    return (<div>
        <h1>{name}:{votes}</h1>
        <button onClick={addVote}>Click Here</button>
    </div>
    )
}


export default Votes