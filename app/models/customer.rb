class Customer < ApplicationRecord
    has_many :orders
    has_many :reviews

    has_secure_password

    PASSWORD_REQUIREMENTS = /\A
  (?=.{8,})          # Must contain 8 or more characters
  (?=.*\d)           # Must contain a digit
  (?=.*[a-z])        # Must contain a lower case character
  (?=.*[A-Z])        # Must contain an upper case character
  (?=.*[[:^alnum:]]) # Must contain a symbol
/x

    validates :username, :password, :name, :password_confirmation, :email, presence: true, on: :create
    validates :username, uniqueness: true
    validates :username, exclusion: {in: %w(admin), message: "%{value} is reserved."}
    validates :password, format: { with: PASSWORD_REQUIREMENTS }, on: :create 
end
