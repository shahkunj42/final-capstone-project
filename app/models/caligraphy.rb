class Caligraphy < ApplicationRecord
    has_many :reviews
    has_many_attached :images
    belongs_to :admin
end
