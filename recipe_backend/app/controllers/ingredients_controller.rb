class IngredientsController < ApplicationController
    def create 
        #binding.pry
         @ingredient = Ingredient.new(ingredient_params)
         @ingredient.save
         render json: @ingredient, status: 200
     end
     def update 
         @ingredient = Ingredient.find(params[:id])
         @ingredient.update(ingredient_params)
         render json: @ingredient, status: 200
     end
     def destroy
         @ingredient = Ingredient.find(params[:id]).destroy
         render json: {ingredientId: @ingredient.id}
     end
     private 
     def ingredient_params
         params.require(:ingredient).permit(:name, :quantity, :recipe_id)
     end
 end
 
