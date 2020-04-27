class Recipe {

    constructor(json) {
        this.id = json.id;
        this.title = json.title;
        this.ingredients = this.createIngredients(json.ingredients);
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
}