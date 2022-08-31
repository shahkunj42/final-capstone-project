class Poster < ApplicationRecord
    has_many :review
    has_many :images
    belongs_to :admin
end
