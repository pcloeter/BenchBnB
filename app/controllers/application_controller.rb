class ApplicationController < ActionController::Base

  def current_user
    @current_user ||= User.find_by(session: session[:session_token])
  end

  def login(user)
    @current_user = user
    session[:session_token] = @current_user.session_token
  end

  def logged_in?
    !!@current_user
  end

  def logout
   if @current_user
      @current_user = User.reset_token!
      session[:session_token] = nil;
   else
    render json: ['Nope. User not found!'], status: 404
   end
  end

  def require_login
    return true if logged_in?
    redirect_to new_session_url
  end


end
