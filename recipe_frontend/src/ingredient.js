class Ingredient{
    constructor(attributes){
        this.id = attributes.id;
        this.name = attributes.name;
        this.quantity = attributes.quantity;
        this.recipe_id = attributes.recipe_id;
    }
    delete() {
        let configObj = { method: "DELETE" };
        fetch(INGREDIENTS_URL + "/" + this.id, configObj);
    }
}