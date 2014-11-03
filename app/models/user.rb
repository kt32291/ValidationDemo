class User < ActiveRecord::Base
  validates :first_name, :last_name, :email, :username, :password, presence: true
  validate :username_requirements


  def username_requirements
    errors.add(:username, "must contain only letters and numbers") unless username =~ /^(?=.*\D)[-\w]+$/
  end

end
