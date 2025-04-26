
const API_URL: string = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const fetchAllRecipes = async () => {
    try {
        const response = await fetch(API_URL)
        const data = await response.json()
        return data
    }
    catch (error) {
        throw new Error('Didn\'t succeed to connect to API')
    }
}

export default fetchAllRecipes