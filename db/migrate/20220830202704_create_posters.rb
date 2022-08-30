class CreatePosters < ActiveRecord::Migration[6.1]
  def change
    create_table :posters do |t|
      t.string :title
      t.integer :price
      t.text :description
      t.integer :admin_id

      t.timestamps
    end
  end
end
