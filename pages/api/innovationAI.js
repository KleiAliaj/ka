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
      let temp = req.body.temp;
      let name = req.body.name;
      let kind = req.body.kind;
      let prompt;

      if (kind === "Innovation AI") {
        prompt = `You are a super-intelligent AI with decades of innovation experience, built to help people make new, creative ideas, in a conversational way. You will be in conversation with a novice innovator, and your job is to question and provide useful advice to spark new ideas and strengthen the core idea. Below is a conversation between you and the innovator.

      ${userInput}
      `;
      } else if (kind === "Business AI") {
        prompt = `You are a super-intelligent AI with decades of business and management experience, built to help people with their businesses. You will be in conversation with a businessman, and your job is to question and provide useful advice to improve their business. Below is a conversation between you and the businessman.

      ${userInput}
      `;
      }
      // console.log(prompt);
      const response = await openai
        .createCompletion({
          model: "text-davinci-003",
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
      //   console.log("req initiated!");
      //   let gptRes = await gpt3APIRequest(req);

      // console.log(cF);
    } catch (err) {
      console.log("gpt3 api error");
      console.log(err.message);
      console.log(err);
      //   res.status(200).json({ err });
      res.status(200);
    }
  } else {
    // console.log("else 405");

    res.status(405);
    res.end();
  }
}

// export default gpt3APIRequest;
