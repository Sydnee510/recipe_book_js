const BASE_URL = "http://localhost:3000";
const RECIPES_URL = `${BASE_URL}/recipes`;
const INGREDIENTS_URL = `${BASE_URL}/ingredients`;

const body = document.getElementsByTagName("body")[0];

document.addEventListener("DOMContentLoaded", () => {

    //Create a new list
    createNewRecipeForm();
    
    fetch(RECIPES_URL)
    .then(response => response.json())
    .then(json => render(json));
});

function createNewRecipeForm() {
    const span = document.createElement("span");
    span.innerHTML = "Create your recipes here";
    span.className = "createRecipe";
    body.appendChild(span);
    const form = document.createElement("form");
    const newRecipeInput = document.createElement("input");
    newRecipeInput.type = "text";
    form.appendChild(newRecipeInput);
    span.appendChild(form);
    const newRecipeButton = document.createElement("button");
    newRecipeButton.type = "submit";
    newRecipeButton.innerHTML = "Create Recipe";
    newRecipeButton.addEventListener("click", function (e) {
        if (newRecipeInput.value.length > 0) {
            Recipe.create(newRecipeInput.value);
        }
    });
    form.appendChild(newRecipeButton)
}

function render(jsonObject) {

    for (const rcp of jsonObject.data) {
        let recipe = new Recipe(rcp.attributes);
        recipe.buildRecipe();
    }

}