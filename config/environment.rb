# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
VitSite::Application.initialize!

ActionMailer::Base.delivery_method = :smtp

ActionMailer::Base.server_settings = {
   :address => "smtp.vit.fitness",
   :port => 25,
   :domain => "vit.fitness",
   :authentication => :login,
   :user_name => "username",
   :password => "password",
}

ActionMailer::Base.default_content_type = "text/html"
