
export type Recipe = {
    idMeal: string
    strMeal: string
    strInstructions: string
    strMealThumb: string
}

export type DataState = {
    recipes: Recipe[]
    loading: boolean
    error: string | null
}


