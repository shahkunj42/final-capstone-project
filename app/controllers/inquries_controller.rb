class InquriesController < ApplicationController
  before_action :set_inqury, only: [:show, :update, :destroy]

  # GET /inquries
  def index
    @inquries = Inqury.all

    render json: @inquries
  end

  # GET /inquries/1
  def show
    render json: @inqury
  end

  # POST /inquries
  def create
    @inqury = Inqury.new(inqury_params)

    if @inqury.save
      render json: @inqury, status: :created, location: @inqury
    else
      render json: @inqury.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /inquries/1
  def update
    if @inqury.update(inqury_params)
      render json: @inqury
    else
      render json: @inqury.errors, status: :unprocessable_entity
    end
  end

  # DELETE /inquries/1
  def destroy
    @inqury.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_inqury
      @inqury = Inqury.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def inqury_params
      params.require(:inqury).permit(:username, :name, :email, :description, :service)
    end
end
