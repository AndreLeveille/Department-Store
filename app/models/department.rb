class Department < ApplicationRecord
  has_many :products, dependent: :destroy
end
