class Caligraphy < ApplicationRecord
    has_many :reviews
    has_one_attached :image
    belongs_to :admin

    def image_url
        Rails.application.routes.url_helpers.url_for(image) if image.attached?
    end

end
