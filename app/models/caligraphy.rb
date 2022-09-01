class Caligraphy < ApplicationRecord
    has_many :reviews
    has_one_attached :image
    belongs_to :admin
end
