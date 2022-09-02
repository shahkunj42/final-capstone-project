class AdminSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :email

  has_many :blogs 

  has_many :posters
  has_many :caligraphies 
end
