class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :name

  has_many :orders
end
