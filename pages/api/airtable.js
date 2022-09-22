import { minifyItems, table } from "@/lib/Airtable";

export default async function handler(_req, res) {
  try {
    const records = await table.select({}).all();
    const minified = minifyItems(records);
    res.status(200).json(minified);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something went wrong! 😕" });
  }
}
