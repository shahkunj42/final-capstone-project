class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :"header-image", :admin_id
end
