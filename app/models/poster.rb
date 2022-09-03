class Poster < ApplicationRecord
    has_many :review
    has_one_attached :image
    belongs_to :admin

    def image_url
        Rails.application.routes.url_helpers.url_for(image) if image.attached?
    end
end
