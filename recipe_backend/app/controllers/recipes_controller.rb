class RecipesController < ApplicationController
    def index
        @recipes = Recipe.all 
        render json: @recipes, status: 200
    end
    def show 
        @recipe = Recipe.find(params[:id])
        render json: @recipe, status: 200
    end
    def create 
       #binding.pry
        @recipe = Recipe.new(recipe_params)
        @recipe.save
        render json: @recipe, status: 200
    end
    def update 
        @recipe = Recipe.find(params[:id])
        @recipe.update(recipe_params)
        render json: @recipe, status: 200
    end
    def destroy
        @recipe = Recipe.find(params[:id]).destroy
        render json: {recipeId: @recipe.id}
    end
    private 
    def recipe_params
        params.require(:recipe).permit(:title, :ingredients)
    end
end
