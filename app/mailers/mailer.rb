class Mailer < ActionMailer::Base
  default from: "beta@vit.fitness"

    def invite_email(visitor)
      mail to: visitor.email, subject: "Invitation Request Received"
    end
end
