class DashboardController < ApplicationController
before_filter :authenticate_user!

 
 
  # layout 'admin'
     
  def index
  	 render :layout => 'admin', :nothing => true
  end
  
end
