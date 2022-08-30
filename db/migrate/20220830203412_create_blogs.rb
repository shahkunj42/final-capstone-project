class CreateBlogs < ActiveRecord::Migration[6.1]
  def change
    create_table :blogs do |t|
      t.string :title
      t.text :content
      t.string :header_image
      t.integer :admin_id

      t.timestamps
    end
  end
end
