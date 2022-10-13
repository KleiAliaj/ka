import axios from "axios";

const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });
export default async function handler(req, res) {
  let response = {};
  try {
    const getDB = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: "Hide",
        checkbox: {
          equals: false,
        },
      },
      sorts: [
        {
          property: "Rank",
          direction: "ascending",
        },
      ],
    });
    response = getDB;
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({ response });
}
