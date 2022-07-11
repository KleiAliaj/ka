// import { NextApiRequest, NextApiResponse } from "next";
import Unsplash, { toJson } from "unsplash-js";

export default function getUser(req, res) {
  return new Promise((resolve) => {
    const u = new Unsplash({ accessKey: process.env.UNSPLASH_ACCESS_KEY });
    console.log(req);
    u.users
      .profile(process.env.UNSPLASH_USER)
      .then(toJson)
      .then((json) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Cache-Control", "max-age=180000");
        res.end(JSON.stringify(json));
        resolve();
      })
      .catch((error) => {
        console.log(error);
        res.json(error);
        res.status(405).end();
        resolve();
      });
  });
}
