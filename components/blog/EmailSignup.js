import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./NewsletterForm";

function EmailSignup() {
//   const url =
//     "https://tyfiero.us13.list-manage.com/subscribe/post?u=81ddc1bd6ec9ec4e48aa4e4b7&amp;id=4de0cd91bb&amp;f_id=00ccc3e2f0ff";
const url = "https://assets.mailerlite.com/jsonp/152607/forms/66347209167210126/subscribe?callback=jQuery1830528097206493223_1663273735839&fields%5Bemail%5D=flyty%40protonmail.com&ml-submit=1&anticsrf=true&ajax=1&guid=16baeb97-d054-35c9-1959-a2d71e4876a6&_=1663273746771"
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
