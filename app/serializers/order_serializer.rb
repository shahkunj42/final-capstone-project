class OrderSerializer < ActiveModel::Serializer
  attributes :id, :items, :total_price, :comments, :customer_id, :order_number
end
