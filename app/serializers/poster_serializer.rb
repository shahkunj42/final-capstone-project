class PosterSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :description, :admin_id, :image, :image_url

  has_many :reviews 
 
end
