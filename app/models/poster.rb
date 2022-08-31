class Poster < ApplicationRecord
    has_many :review
    has_many_attached :images
    belongs_to :admin
end
