import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const options = {
        method: "POST",
        url: "https://api.mailerlite.com/api/v2/groups/66347255016195516/subscribers",
        headers: {
          accept: "application/json",
          "X-MailerLite-ApiDocs": "true",
          "content-type": "application/json",
          "X-MailerLite-ApiKey": process.env.MAILERLITE_KEY,
        },
        data: {
          email: req.body.email,
          resubscribe: false,
          autoresponders: true,
          type: "unconfirmed",
        },
      };

      await axios
        .request(options)
        .then(function (response) {
          res.status(200).json({ results: "success" });
          console.log("Sign-up successful!");
        })
        .catch(function (error) {
          console.log("Error :(");
          res.status(200).json({ results: "error" });
        });
    } catch (err) {
      console.log("MailerLite api error");
      res.status(200).json({ results: "error" });
    }
  } else {
    res.status(405);
    res.end();
  }
}
