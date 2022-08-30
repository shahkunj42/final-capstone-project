class CreateCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :customers do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :name

      t.timestamps
    end
  end
end
