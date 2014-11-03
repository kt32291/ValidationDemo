class UsersController < ApplicationController

  def index
    @users = User.all
    if params[:email]
      email = params[:email].downcase
      @users = @users.where(email: email)
    end
  end

  def new
  end

  def create
    @user = User.new(email: params[:email], first_name: params[:first_name], last_name: params[:last_name], username: params[:username], password: params[:password])

    respond_to do |format|
      if @user.save
        format.html { redirect_to @user, notice: 'User was successfully created.' }
        format.json { render json: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

end
