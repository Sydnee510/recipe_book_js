class IngredientsController < ApplicationController
    def index
        ingredients = Ingredient.all 
        render json: IngredientSerializer.new(ingredients)
    end
    def show 
        ingredient = Ingredient.find(params[:id])
        options = {
            include: [:recipe]
        }
        render json: IngredientSerializer.new(ingredient, options)
    end
    def create 
        #binding.pry
         recipe = Recipe.find(params[:recipe_id])
         ingredient = recipe.ingredients.create(ingredient_params)
         render json: IngredientSerializer.new(ingredient)
     end
     def update 
         ingredient = Ingredient.find(params[:id])
         ingredient.update(ingredient_params)
         render json: IngredientSerializer.new(ingredient)
     end
     def destroy
         ingredient = Ingredient.find(params[:id]).destroy
         render json: IngredientSerializer.new(ingredient)
     end
     private 
     def ingredient_params
         params.require(:ingredient).permit(:name, :quantity, :recipe_id)
     end
 end
 
