source 'https://rubygems.org'
ruby '2.1.1'
#ruby-gemset=railstutorial_rails_4_0

gem 'rails', '4.0.5'
gem 'sprockets', '2.11.0'
gem 'active_attr'

group :development, :test do
  gem 'sqlite3', '1.3.8'
  gem 'rspec-rails', '2.13.1'
  gem 'guard-rspec', '2.5.0'
end

group :test do
  gem 'selenium-webdriver', '2.35.1'
  gem 'capybara', '2.1.0'
# Uncomment this line on OS X.
  gem 'growl', '1.0.3'
  gem 'factory_girl_rails', '4.2.0'
end

gem 'sass', '3.2.13'
gem 'sass-rails', '4.0.1'
gem 'uglifier', '2.1.1'
gem 'coffee-rails', '4.0.1'
gem 'jquery-rails', '3.0.4'
gem 'turbolinks', '1.1.1'
gem 'jbuilder', '1.0.2'
gem 'yui-compressor', '~> 0.12.0'

group :doc do
  gem 'sdoc', '0.3.20', require: false
end

group :production, :staging do
  gem 'pg'
  gem 'rails_12factor'
end