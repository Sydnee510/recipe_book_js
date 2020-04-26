class RecipesController < ApplicationController
    def index
        recipes = Recipe.all 
        render json: RecipeSerializer.new(recipes)
    end
    def show 
        recipe = Recipe.find(params[:id])
        render json: RecipeSerializer.new(recipe)
    end
    def create 
       #binding.pry
        recipe = Recipe.create(title: params[:title])
        render json: RecipeSerializer.new(recipe)
    end
    def destroy
        recipe = Recipe.find(params[:id]).destroy
        render json: RecipeSerializer.new(recipe)
    end
end
