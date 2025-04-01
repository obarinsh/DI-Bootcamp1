import ex3 from './data/ex3.json'

function Example3() {


    return (
        <div>
            {ex3.Experiences.map((set, index) => (
                <div key={index}>
                    <div>
                        <h3>{set.logo}</h3>
                    </div>
                    <h2>{set.companyName}</h2>

                    <div>
                        {set.roles.map((role, i) => (
                            <div key={i}>
                                <h5>{role.endDate},{role.location}</h5>
                                <p>{role.description}</p>
                            </div>
                        ))
                        }
                    </div>
                </div>

            ))}
        </div >
    )
}


export default Example3;