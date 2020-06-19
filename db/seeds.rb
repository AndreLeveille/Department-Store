# Product.destroy_all
# 40.times do
#   Product.create(
#     name: Faker::Commerce.product_name,
#     description: Faker::Lorem.sentence,
#     price: Faker::Commerce.price.to_f,
#     department: Faker::Commerce.department,
#   )
# end

# puts "40 Products Seeded"

Department.destroy_all
Product.destroy_all
6.times do 
d = Department.create(name: Faker::Commerce.department)
  6.times do |i|
    d.products.create(name: Faker::Commerce.product_name, price: Faker::Commerce.price.to_f )
  end
end

puts " 6 items seeded"
  

