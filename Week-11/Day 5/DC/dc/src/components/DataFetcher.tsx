import { useEffect, useState } from 'react'
import fetchAllRecipes from '../api/api'
import { Recipe } from '../types/types'

const DataFetcher = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([])

    useEffect(() => {
        const loadRecipes = async () => {
            try {
                const data = await fetchAllRecipes()
                setRecipes(data.meals)
            } catch (error) {
                console.error('Failed to fetch recipes:', error)
            }
        }

        loadRecipes()
    }, [])
    return (
        <div>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.idMeal}>
                        <h3>{recipe.strMeal}</h3>
                        <p>{recipe.strInstructions}</p>
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default DataFetcher