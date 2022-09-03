class SessionsController < ApplicationController

    # skip_before_action :authorize, only: :create

  def create
    admin = Admin.find_by(username: params[:username])
    user = Customer.find_by(username: params[:username])

    if user&.authenticate(params[:password])
        session[:customer_id] = user.id
        render json: user
    elsif admin&.authenticate(params[:password])
        session[:admin_id] = admin.id
        render json: admin
    else 
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  def destroy
    admin = Admin.find_by(username: params[:username])
    if admin
      session.delete :admin_id
      head :no_content
    else 
      session.delete :customer_id
      head :no_content
    end
  end



end
