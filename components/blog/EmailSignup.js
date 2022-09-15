import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./NewsletterForm";

function EmailSignup() {
  const url =
    "https://tyfiero.us13.list-manage.com/subscribe/post?u=81ddc1bd6ec9ec4e48aa4e4b7&amp;id=4de0cd91bb&amp;f_id=00ccc3e2f0ff";

  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <div>
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => {
              subscribe(formData);
            }}
          />
        </div>
      )}
    />
  );
}

export default EmailSignup;
