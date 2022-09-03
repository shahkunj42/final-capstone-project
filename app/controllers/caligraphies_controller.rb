class CaligraphiesController < ApplicationController

     # skip_before_action :authorize
    # skip_before_action :admin, only: [:index, :show]

    def index
        caligraphy = Caligraphy.all
        render json: caligraphy
      end

    def show
        caligraphy = Caligraphy.find_by(id: params[:id])
        render json: caligraphy
    end

    def create
      caligraphy = Caligraphy.create!(caligraphy_params)
      render json: caligraphy, status: :created
    end
    
    def update
      caligraphy = Caligraphy.find_by(id: params[:id])
      caligraphy.update(caligraphy_params)
      render json: caligraphy, status: :accepted 
    end
  
    def destroy
      caligraphy = Caligraphy.find_by(id: params[:id])
      caligraphy.destroy
      head :no_content
    end
  
    private
    
    def caligraphy_params
      params.permit(:title, :price, :description, :image, :admin_id)
    end

end
