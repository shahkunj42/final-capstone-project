class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :header_image, :admin_id

  belongs_to :admin 
end
