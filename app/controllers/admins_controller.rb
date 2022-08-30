class AdminsController < ApplicationController
    # skip_before_action :admin, only: :create
    # skip_before_action :authorize

    def create
        admin = Admin.create!(user_params)
        session[:admin] = admin.id
        render json: admin, status: :created
      end
    
      def show
        render json: @admin
      end
    
      private
    
      def user_params
        params.permit(:username, :password, :password_confirmation, :email)
      end


end
