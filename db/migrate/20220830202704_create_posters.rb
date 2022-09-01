class CreatePosters < ActiveRecord::Migration[6.1]
  def change
    create_table :posters do |t|
      t.string :title
      t.integer :price
      t.text :description
      t.references :admin, null: false, foreign_key: true

      t.timestamps
    end
  end
end
