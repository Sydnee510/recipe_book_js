# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
pound_cake = Recipe.create(title: "pound cake")
krispy_treats = Recipe.create(title: "krispy treats")
apple_pie = Recipe.create(title: "apple pie")

flour = Ingredient.create(name: "flour", quantity: 4, recipe: pound_cake)
eggs = Ingredient.create(name: "eggs", quantity: 6, recipe: pound_cake)

marshmellows = Ingredient.create(name: "marshmellows", quantity: 10, recipe: krispy_treats)
rice_krispies = Ingredient.create(name: "rice_krispies", quantity: 2, recipe: krispy_treats)

apples = Ingredient.create(name: "apples", quantity: 6, recipe: apple_pie)
sugar = Ingredient.create(name: "sugar", quantity: 1 , recipe: apple_pie)




