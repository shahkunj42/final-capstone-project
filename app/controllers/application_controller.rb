class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # before_action :authorize
  # before_action :admin 

  private

  def admin 
    @admin = Admin.find_by(id: session[:admin_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @admin
  end

  def authorize
    @current_user = Customer.find_by(id: session[:customer_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end


end
