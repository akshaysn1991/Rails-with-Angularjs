class UsersController < ApplicationController
	respond_to :json
	layout 'admin'
	
	def index
		p "====index in UsersController==== "
	
		@users = User.all
		respond_to do |format|
	    format.html # index.html.erb
	    format.json  { render :json => @users.to_json }
	    
  end
	end
	def show
		
    @user = User.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @user }
      
    end
  end
end
