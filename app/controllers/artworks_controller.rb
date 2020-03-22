class ArtworksController < ApplicationController
    def show
     @artwork=Artwork.find(params[:id])
     render json: @artwork
    end
  
    def index
      q = params[:q]
      if q.blank?
        @artworks=Artwork.all
      else
      @artworks=Artwork.where(["TITLE LIKE ?", "%#{q}%"]).limit(100)
      end
      #@artworks=Artwork.all
     render json: @artworks
    end
  
    def create
      @artwork = Artwork.create(artwork_params)
      render json: @artwork, status: 201
    end
  
    def update
      @artwork=Artwork.find(params[:id])
      @artwork.update(artwork_params)
  
      render json:@artwork
    end
  
    def destroy
      @artwork=Artwork.find(params[:id])
      @artwork.destroy
  
      render json:@artwork
    end
  
    private
    
   
     def artwork_params
       params.require(:artwork).permit(
         :title,
         :icon,
         :url, 
         :author,
         :description
             )
     end
  
  end