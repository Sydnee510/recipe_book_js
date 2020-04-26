class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :ingredients
end
