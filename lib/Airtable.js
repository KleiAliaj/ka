// let table, linksTable, minifyLinkItems, minifyItems, getItem, getLinkItem;

// if (typeof window === "undefined") {
//   const Airtable = require("airtable");

//   Airtable.configure({
//     apiKey: process.env.AIRTABLE_API_KEY,
//   });

//   const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

//   table = base(process.env.AIRTABLE_TABLE_NAME);

//   minifyItems = (records) => records.map((record) => getItem(record));

//   const getItem = (record) => {
//     return {
//       name: record.fields.name,
//       image: record.fields.Compressed[0],
//       rank: record.fields.rank,
//       algorithm: record.fields.algorithm,
//     };
//   };
// } else {
//   table = null;
//   getItem = null;
//   minifyItems = null;
// }

// export { table, getItem, minifyItems };
