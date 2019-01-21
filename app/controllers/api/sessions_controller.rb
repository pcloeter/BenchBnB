class Api::SessionsController < ApplicationController

  def create
    credentials = {username: params[:username], password: params[:password]}
    @user = User.find_by_credentials(credentials)
    if @user
      login(@user)
      redirect_to api_users_url(@user.id)
    else 
      flash.now[:errors] = ["That's not a user or wrong credentials or something"]
    end
  end

  def new
  end

  def destroy
    logout
  end

end