class CreateInquries < ActiveRecord::Migration[6.1]
  def change
    create_table :inquries do |t|
      t.string :username
      t.string :name
      t.string :email
      t.text :description
      t.string :service

      t.timestamps
    end
  end
end
