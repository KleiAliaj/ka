import { minifyLinkItems, linksTable } from "@/lib/AirtableLinks";

export default async (_req, res) => {
  try {
    const records = await linksTable.select({}).firstPage();
    // console.log(records);
    const minified = minifyLinkItems(records);
    res.status(200).json(minified);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something went wrong! 😕" });
  }
};
