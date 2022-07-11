let table, minifyItems, getItem;

if (typeof window === "undefined") {
  const Airtable = require("airtable");

  // Authenticate
  Airtable.configure({
    apiKey: process.env.AIRTABLE_API_KEY,
  });
  // console.log(process.env.AIRTABLE_API_KEY);
  // Initialize a base

  const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

  // Reference a table

  table = base(process.env.AIRTABLE_TABLE_NAME);
  minifyItems = (records) => records.map((record) => getItem(record));

  const getItem = (record) => {
    return {
      name: record.fields.name,
      image: record.fields.image[0],
    };
  };
} else {
  table = null;
  getItem = null;
  minifyItems = null;
}

export { table, getItem, minifyItems };
