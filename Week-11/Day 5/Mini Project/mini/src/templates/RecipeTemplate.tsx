import Recipe from '../model/RecipeItem'

class RecipeTemplate {
    container: HTMLElement

    constructor(containerId: string) {
        const container = document.getElementById(containerId)
        if (!container) {
            throw new Error(`Container ${containerId} not found`)
        }
        this.container = container
    }

    render(recipes: Recipe[]) {
        this.container.innerHTML = ''

        recipes.forEach((recipe) => {
            const card = document.createElement('div')
            card.className = 'recipe-card'
            card.setAttribute('data-id', recipe.id)

            const title = document.createElement('h3')
            title.textContent = recipe.title
            card.appendChild(title)

            const favoriteBtn = document.createElement('button')
            favoriteBtn.textContent = recipe.isFavorite ? '★ Unfavorite' : '☆ Favorite'
            favoriteBtn.onclick = () => {
                recipe.isFavorite = !recipe.isFavorite
                this.render(recipes)
            }
            card.appendChild(favoriteBtn)

            const toggleBtn = document.createElement('button')
            toggleBtn.textContent = 'Show Details'
            const detailsDiv = document.createElement('div')
            detailsDiv.style.display = 'none'

            toggleBtn.onclick = () => {
                const isHidden = detailsDiv.style.display === 'none'
                detailsDiv.style.display = isHidden ? 'block' : 'none'
                toggleBtn.textContent = isHidden ? 'Hide Details' : 'Show Details'
            }
            card.appendChild(toggleBtn)

            detailsDiv.innerHTML = `
        <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
      `
            card.appendChild(detailsDiv)

            const deleteBtn = document.createElement('button')
            deleteBtn.textContent = 'Delete'
            deleteBtn.onclick = () => {
                const index = recipes.findIndex((r) => r.id === recipe.id)
                if (index !== -1) {
                    recipes.splice(index, 1)
                    this.render(recipes)
                }
            }
            card.appendChild(deleteBtn)

            this.container.appendChild(card)
        })
    }
}

export default RecipeTemplate