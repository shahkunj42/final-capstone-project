class CreateCaligraphies < ActiveRecord::Migration[6.1]
  def change
    create_table :caligraphies do |t|
      t.string :title
      t.integer :price
      t.text :description
      t.integer :admin_id

      t.timestamps
    end
  end
end
