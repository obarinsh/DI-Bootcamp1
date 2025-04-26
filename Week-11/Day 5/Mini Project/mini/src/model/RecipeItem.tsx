import { v4 as uuidv4 } from 'uuid'


class Recipe {
    id: string
    title: string
    ingredients: string[]
    instructions: string
    isFavorite: boolean

    constructor(
        title: string,
        ingredients: string[],
        instructions: string,
        isFavorite: boolean = false
    ) {
        this.id = uuidv4()
        this.title = title
        this.ingredients = ingredients
        this.instructions = instructions
        this.isFavorite = isFavorite
    }
}

export default Recipe