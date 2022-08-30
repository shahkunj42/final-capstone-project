class BlogsController < ApplicationController
    # skip_before_action :authorize
    # skip_before_action :admin, only: [:index, :show]

    def index
        blogs = Blog.all
        render json: blogs
      end

    def show
        blog = Blog.find_by(id: params[:id])
        render json: blog
    end

      def create
        blog = @admin.blogs.create!(blog_params)
        render json: blog, status: :created
      end
    
      def update
        blog = Blog.find_by(id: params[:id])
        blog.update(blog_params)
        render json: blog, status: :accepted 
      end
    
      def destroy
        blog = Blog.find_by(id: params[:id])
        blog.destroy
        head :no_content
      end
    
      private
      
      def blog_params
        params.permit(:title, :content, :header_image)
      end
end
