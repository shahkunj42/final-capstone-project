class CustomersController < ApplicationController
    # skip_before_action :admin
    # skip_before_action :authorize, only: :create

    def create
        user = Customer.create!(user_params)
        session[:customer_id] = user.id
        render json: user, status: :created
      end
    
      def show
        render json: @current_user
      end
    
      private
    
      def user_params
        params.permit(:username, :password, :password_confirmation, :name, :email)
      end


end
