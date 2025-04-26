import Recipe from './RecipeItem.tsx'
import { useState, useEffect } from 'react'


function RecipeCollection() {
    const [recipesList, setList] = useState<Recipe[]>([])

    const [title, setTitle] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')


    const addRecipe = (
        title: string,
        ingredients: string[],
        instructions: string,
        isFavorite = false
    ) => {
        const newRecipe = new Recipe(
            title,
            ingredients,
            instructions,
            isFavorite)

        setList((prev) => [...prev, newRecipe])
        setTitle('')
        setIngredients('')
        setInstructions('')
    }

    const removeRecipe = (id: string) => {
        setList((prev) => prev.filter((recipe) => recipe.id !== id))

    }


    const toggleFavStatus = (id: string) => {
        setList((prev) =>
            prev.map((recipe) =>
                recipe.id === id
                    ? { ...recipe, isFavorite: !recipe.isFavorite }
                    : recipe
            )
        )
    }

    useEffect(() => {
        const data = localStorage.getItem('recipes')
        if (data) {
            setList(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('recipes', JSON.stringify(recipesList))
    }, [recipesList])
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const ingredientsArray = ingredients.split('\n').filter(i => i.trim() !== '')
        addRecipe(title, ingredientsArray, instructions)
    }
    return (
        <div>
            <h1>Recipes:</h1>
            <ul>
                {recipesList.map((recipe) => (
                    <li key={recipe.id}>
                        <strong>{recipe.title}</strong>
                        <br />
                        Ingredients: {recipe.ingredients.join(', ')}<br />
                        Instructions: {recipe.instructions}<br />
                        <button onClick={() => toggleFavStatus(recipe.id)}>
                            {recipe.isFavorite ? 'Unfavorite' : 'Favorite'}
                        </button>
                        <button onClick={() => removeRecipe(recipe.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        id="recipeTitle"
                        placeholder="Recipe Title"
                        required />
                    <textarea
                        value={ingredients}
                        id="ingredients"
                        placeholder="Enter ingredients (one per line)"
                        required
                        onChange={(e) => setIngredients(e.target.value)}></textarea>
                    <textarea
                        value={instructions}
                        id="instructions"
                        placeholder="Enter cooking instructions" required
                        onChange={(e) => setInstructions(e.target.value)}
                    ></textarea>
                    <button type="submit">Add Recipe</button>
                </form>

                <div id="recipeContainer"></div>

                <button onClick={() => setList([])}>Clear All Recipes</button>
            </div>
        </div >

    )
}

export default RecipeCollection