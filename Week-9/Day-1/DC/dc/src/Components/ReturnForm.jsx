

function ReturnForm({ data }) {
    const { firstName, lastName, age, gender, destination, dietaryRestrictions } = data


    return (
        <div>
            <h2>Entered Information</h2>
            <p>Your first name:{firstName} <br /></p>
            <p>Your last name: {lastName}<br /></p>
            <p>Your age: {age}<br /></p>
            <p>Your gender: {gender}<br /></p>
            <p>Your destination: {destination}<br /></p>
            <p>Your dietary restrictions:</p>
            <ul>
                <li>Nuts free:{dietaryRestrictions.nutsFree ? "Yes" : "No"}</li>
                <li>Lactose free:{dietaryRestrictions.lactoseFree ? "Yes" : "No"}</li>
                <li>Vegan:{dietaryRestrictions.vegan ? "Yes" : "No"}</li>
            </ul>
        </div>
    )
}

export default ReturnForm;