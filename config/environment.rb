# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
VitSite::Application.initialize!

ActionMailer::Base.smtp_settings = {
  :address        => "smtp.gmail.com",
  :port           => 587,
  :domain         => "vit.fitness",
  :user_name      => "beta@vit.fitness",
  :password       => "Vitruvian",
  :authentication => :plain
}