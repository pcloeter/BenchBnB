class User < ApplicationRecord
  validates :username, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_token
  attr_reader :password

  def self.generate_token
    SecureRandom.urlsafe_base64
  end

  def self.find_by_credentials(credentials)
    user = User.find_by(username: credentials[:username])
    if user
      return user if is_password?(credentials[:password])
    else
      return nil
    end
  end


  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    return BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = User.generate_token
    self.save!
    self.session_token
  end

  def ensure_token
    return self.session_token ||= User.generate_token
  end
end