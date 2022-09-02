class PosterSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :description, :admin_id

  has_many :reviews 
end
