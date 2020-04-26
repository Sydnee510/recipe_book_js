class IngredientSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :quantity
  belongs_to :recipe
end
