class Blog < ApplicationRecord
    belongs_to :admin
    validates :title, :content, presence: true, on: :create
end
