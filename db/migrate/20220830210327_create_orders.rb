class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.text :items
      t.integer :total_price
      t.text :comments
      t.integer :customer_id
      t.string :order_number

      t.timestamps
    end
  end
end
