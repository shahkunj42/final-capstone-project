class Review < ApplicationRecord
    belongs_to :customer
    belongs_to :poster
    belongs_to :caligraphy
end
