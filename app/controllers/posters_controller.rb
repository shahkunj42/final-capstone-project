class PostersController < ApplicationController

     # skip_before_action :authorize
    # skip_before_action :admin, only: [:index, :show]

    def index
        poster = Poster.all
        render json: poster
      end

    def show
        poster = Poster.find_by(id: params[:id])
        render json: poster
    end

      def create
        poster = @admin.posters.create!(poster_params)
        render json: poster, status: :created
      end
    
      def update
        poster = Poster.find_by(id: params[:id])
        poster.update(poster_params)
        render json: poster, status: :accepted 
      end
    
      def destroy
        poster = Poster.find_by(id: params[:id])
        poster.destroy
        head :no_content
      end
    
      private
      
      def poster_params
        params.permit(:title, :price, :description, :image)
      end

end
