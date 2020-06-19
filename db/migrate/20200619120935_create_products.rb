class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.belongs_to :department, null: false, foreign_key: true
      t.float :price

      t.timestamps
    end
  end
end
