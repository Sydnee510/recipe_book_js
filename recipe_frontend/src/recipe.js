class Recipe {

    constructor(json) {
        this.id = json.id;
        this.title = json.title;
        this.ingredients = this.createIngredients(json.ingredients);
        this.adapter = new RecipesAdapter()
        this.fetchAndLoadRecipes()
    }

    static create(title) {
        let formData = {
            "title": title
        };
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        };
        
        fetch(RECIPES_URL, configObj);
    }

    createIngredients(ingredients) {
        let ingredientsArray = []
        ingredients.forEach(ing => {
            ingredientsArray.push(new Ingredient(ing));
        });
        return ingredientsArray;
    }

    createIngredient(name) {
        let attributes = {
            name: name,
            quantity: null,
            recipe_id: this.id 
        };
        return new Ingredient(attributes);
    }
    buildRecipe() {
        
        const main = document.createElement("main");
        body.appendChild(main);
    }
    updateList(ingredient) {
        let formData = {
            "name": ingredient.name,
            "quantity": ingredient.quantity,
            "recipe_id": ingredient.list_id
        };
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        };
        
        fetch(INGREDIENTS_URL, configObj)
        .then(response => response.json())
        .then(function (jsonIngredient) {
            if (jsonIngredient.id) {
                let ingredient = new Ingredient(jsonIngredient)
                //add the item to the DOM
                ingredient.addToDoToDOM();
            }
        });
    }

    addDeleteRecipeButton() {
        //to use inside the event listner
        const recipe = this;
        
        const div = document.getElementById(this.id);
        const deleteRecipe = document.createElement("button");
        deleteRecipe.className = "delete";
        deleteRecipe.innerHTML = "Delete Recipe"
        div.appendChild(deleteRecipe);

        deleteRecipe.addEventListener("click", function (e) {
            recipe.removeRecipe()
            div.parentElement.remove();
        });

    }

    removeRecipe() {
        let configObj = { method: "DELETE" };
        fetch(RECIPES_URL + "/" + this.id, configObj);
    }
    fetchAndLoadRecipes(){
        this.adapter.getRecipes().then(recipes => {
            recipes.forEach(recipe => this.recipes.push(new Recipe(recipe)))
            console.log(this.recipes)
        })
        .then(() => {
            this.render()
        })

    }
    renderLi(){
        return `<li data-id=${this.id}>${this.title}, ${this.ingredients}</li>`
    }
    render() {
        this.recipesContainer.innerHTML = this.recipes.map(recipe => recipe.renderLi()).join('')
     }
}