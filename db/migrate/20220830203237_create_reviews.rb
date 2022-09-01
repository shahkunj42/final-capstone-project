class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.text :review
      t.integer :rating
      t.references :customer, null: false, foreign_key: true
      t.references :caligraphy, null: false, foreign_key: true
      t.references :poster, null: false, foreign_key: true

      t.timestamps
    end
  end
end
