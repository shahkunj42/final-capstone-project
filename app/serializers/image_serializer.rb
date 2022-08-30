class ImageSerializer < ActiveModel::Serializer
  attributes :id, :image, :caligraphy_id, :poster_id
end
