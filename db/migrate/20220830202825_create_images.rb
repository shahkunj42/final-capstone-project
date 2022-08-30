class CreateImages < ActiveRecord::Migration[6.1]
  def change
    create_table :images do |t|
      t.string :image
      t.integer :caligraphy_id
      t.integer :poster_id

      t.timestamps
    end
  end
end
