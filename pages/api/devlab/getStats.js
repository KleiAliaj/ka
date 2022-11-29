import axios from "axios";
const { Configuration, OpenAIApi } = require("openai");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);

      let userInput = req.body.input;
      let temp = req.body.temp || 0.3;
      let name = req.body.name;
      let kind = req.body.kind;
      let prompt;

      prompt = `The following text is a manufacturing record, and within it lies two numbers: the range number, and the score. Scan the provided text, find the score and range number, and return both numbers in the format of score / range. 
      Text:
      ${userInput}

      Numbers: 
      `;

      const response = await openai
        .createCompletion({
          // model: "text-davinci-003",
          model: "text-davinci-002",
          prompt: prompt,
          temperature: temp,
          max_tokens: 3000,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        })
        .then((data) => {
          return data.data.choices[0].text;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });

      res.status(200).json({ results: response });
      console.log("req successful!");
    } catch (err) {
      console.log("gpt3 api error");
      console.log(err.message);
      console.log(err);
      //   res.status(200).json({ err });
      res.status(200).json({ err });
    }
  } else {

    res.status(405);
    res.end();
  }
}

