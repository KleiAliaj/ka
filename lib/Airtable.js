const Airtable = require("airtable");

// Authenticate
Airtable.configure({
  apiKey: "keyGqjBOAgRuzcaO6",
  //   apiKey: process.env.AIRTABLE_API_KEY,
});
console.log(process.env.AIRTABLE_API_KEY);
// Initialize a base
const base = Airtable.base("appWZzkOfjdXXtrFk");
// const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

// Reference a table
const table = base("tblvFjnkfueawoq6r");
// const table = base(process.env.AIRTABLE_TABLE_NAME);
const minifyItems = (records) => records.map((record) => getItem(record));

const getItem = (record) => {
  return {
    name: record.fields.name,
    image: record.fields.image[0],
  };
};

export { table, getItem, minifyItems };
