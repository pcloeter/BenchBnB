class Api::UsersController < ApplicationController

  def show
    @user = User.find_by(id: params[:id])
  end

  def create
    @user = User.new(username: user_params[:username], password: user_params[:password])
    if @user.save
      login(@user)
      redirect_to api_user_url(@user.id)
    else
      flash.now[:errors] = @user.errors.full_messages
      render json: [], status: 401
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end