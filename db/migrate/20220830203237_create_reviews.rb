class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.text :review
      t.integer :rating
      t.references :customer, null: false, foreign_key: true
      t.references :caligraphy
      t.references :poster

      t.timestamps
    end
  end
end
