class CreateCaligraphies < ActiveRecord::Migration[6.1]
  def change
    create_table :caligraphies do |t|
      t.string :title
      t.integer :price
      t.text :description
      t.references :admin, null: false, foreign_key: true

      t.timestamps
    end
  end
end
