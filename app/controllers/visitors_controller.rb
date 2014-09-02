class VisitorsController < ApplicationController
  def new
    @visitor = Visitor.new
  end
  
  def create
    @visitor = Visitor.new(visitor_params)
    if @visitor.valid?
      Mailer.invite_email(@visitor).deliver
      flash[:success] = 'You have been invited!'
      render 'static_pages/home'
    else
      flash[:error] = 'Invalid email or has been invited already'
      render 'static_pages/home'        
    end
  end
  
  private
  
  	def visitor_params
  		params.require(:visitor).permit(:email)
  	end
end
