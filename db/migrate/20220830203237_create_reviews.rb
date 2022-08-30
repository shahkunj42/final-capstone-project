class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.text :review
      t.integer :rating
      t.string :customer_id
      t.string :caligraphy_id
      t.string :poster_id

      t.timestamps
    end
  end
end
