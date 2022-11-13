const { ocrSpace } = require("ocr-space-api-wrapper");

export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  try {
    // console.log(body.url);
    const OCR = await ocrSpace(body.url, {
      apiKey: "K81924757688957",
    })
      .then((data) => {
        // console.log(data);
        // parsed: data.ParsedResults[0].ParsedText
        // console.log(data.ParsedResults[0].ParsedText);
        // res.status(200).json({ results: data.ParsedResults[0].ParsedText });
        return data.ParsedResults[0].ParsedText;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });

    // console.log(OCR);
    // res.status(200).json(res1);
    // console.log(res);
    // let stringify = JSON.stringify({ results: OCR });
    // res.status(200).json({ results: OCR });
    res.status(200).send({ results: OCR });
    // res.status(500).json({ msg: "Something went wrong! 😕" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something went wrong! 😕" });
  }
}
