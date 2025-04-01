import ex3 from './data/ex3.json'

function Example2() {


    return (
        <div>
            {ex3.Skills.map((set, index) => (
                <div key={index}>
                    <h2>{set.Area} </h2>
                    {set.SkillSet.map((skill, i) => (
                        <li key={i}>
                            {skill.Name}
                        </li>
                    ))}

                </div>

            ))

            }
        </div >)
}


export default Example2;