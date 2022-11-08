const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_KEY);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
 ${body.message}
 <br/>
 This message was sent by an automated AI QA detection system. You are listed as a stakeholder for this batch.
`;

  const data = {
    to: body.stakeHolder,
    from: "tyfiero@gmail.com",
    subject: `Batch Results`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };
  await mail.send(data);
  res.status(200).json({ status: "OK" });
}
