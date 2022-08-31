class Admin < ApplicationRecord
    has_many :blogs
    has_many :posters
    has_many :caligraphies

    has_secure_password

    PASSWORD_REQUIREMENTS = /\A
  (?=.{8,})          # Must contain 8 or more characters
  (?=.*\d)           # Must contain a digit
  (?=.*[a-z])        # Must contain a lower case character
  (?=.*[A-Z])        # Must contain an upper case character
  (?=.*[[:^alnum:]]) # Must contain a symbol
/x

    validates :username, :password, :email :password_confirmation, presence: true, on: :create
    validates :username, uniqueness: true
    validates :password, format: { with: PASSWORD_REQUIREMENTS }, on: :create 

end
