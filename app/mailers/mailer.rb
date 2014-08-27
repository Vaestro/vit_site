class Mailer < ActionMailer::Base
  def invitation(user)
      recipients    recipient.email
      from          vit@fitness.com
      subject       "Welcome to VIT"
      sent_on       Time.now
      body          {:url => "http://example.com/login"}
    end
end
