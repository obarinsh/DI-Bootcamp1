import React, { useEffect, useState } from 'react'

interface Users {
    API: string
}

const UserList: React.FC<Users> = ({ API }) => {
    const [data, setData] = useState<any>([])
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                if (!response.ok) throw new Error("Didnt find data to fetch")
                const json = await response.json()
                setData(json)
            }
            catch (err: any) {
                setError(err.message || 'Unknown error')
            }
        }
        fetchData()
    }, [API])
    return (

        <div>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            <ul>
                <h1>Users Data :</h1>
                {data.map((user: any) =>
                    <li key={user.id}>
                        Name:{user.name}<br />
                        User Name:{user.username}<br />
                        Email: {user.email}<br />
                    </li>

                )}
            </ul>
        </div>
    )
}



export default UserList
