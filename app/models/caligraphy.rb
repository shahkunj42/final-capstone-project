class Caligraphy < ApplicationRecord
    has_many :reviews
    has_many :images
    belongs_to :admin
end
