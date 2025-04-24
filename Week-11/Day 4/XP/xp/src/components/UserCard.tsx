interface User {
    name?: string
    age?: number
    role?: string
}


const UserCard: React.FC<User> = ({ name = 'stranger', age = '18', role = 'user' }) => {
    return (
        <div>Hello {name}, you role is {role} and your age is {age}</div>
    )

}





export default UserCard
