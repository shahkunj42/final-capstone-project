class InqurySerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :email, :description, :service
end
