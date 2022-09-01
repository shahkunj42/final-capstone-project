class Poster < ApplicationRecord
    has_many :review
    has_one_attached :image
    belongs_to :admin
end
