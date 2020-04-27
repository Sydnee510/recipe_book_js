class RecipesAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/recipes'
    }
    getRecipes() {
        return fetch(this.baseUrl).then(res => res.json())
    }
}