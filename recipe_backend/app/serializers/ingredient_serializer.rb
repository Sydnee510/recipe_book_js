class IngredientSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :quantity, :recipe_id
end
