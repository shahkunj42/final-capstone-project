class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :customer_id, :caligraphy_id, :poster_id
end
