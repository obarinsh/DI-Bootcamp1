import ex3 from './data/ex3.json'

function Example1() {


    return (
        <div>
            {ex3.SocialMedias.map((platform, index) => (
                <h1 key={index}>{platform}</h1>
            ))}
        </div>)
}


export default Example1;