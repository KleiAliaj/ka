const { ocrSpace } = require("ocr-space-api-wrapper");

export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  try {
    // console.log(body.url);
    const OCR = await ocrSpace(
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdigitalnativestudios.com%2Ftextmeshpro%2Fdocs%2Frich-text%2Fline-indent.png&f=1&nofb=1&ipt=5cd02cb3df72a50ed4e787b503071aa28b402154703d860b51d3dad46768fb6f&ipo=images",
      {
        apiKey: "K81924757688957",
      }
    )
      .then((data) => {
        // const clean = JSON.parse(data);
        // console.log(clean);
        // console.log(clean.ParsedResults.ParsedText);
        console.log(data);
        // parsed: data.ParsedResults[0].ParsedText
        // console.log(data.ParsedResults[0].ParsedText);
        // res.status(200).json({ results: data.ParsedResults[0].ParsedText });
        // return data.ParsedResults[0].ParsedText;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });

    console.log(OCR);
    // res.status(200).json(res1);
    // console.log(res);
    // let stringify = JSON.stringify({ results: OCR });
    // res.status(200).json({ results: OCR });
    res.status(200).send({ results: "TESTING HOLY SHIT" });
    // res.status(500).json({ msg: "Something went wrong! 😕" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something went wrong! 😕" });
  }
}
