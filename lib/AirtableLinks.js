// let linksTable, minifyLinkItems, getLinkItem;

// if (typeof window === "undefined") {
//   const Airtable = require("airtable");

//   // Authenticate
//   Airtable.configure({
//     apiKey: process.env.AIRTABLE_API_KEY,
//   });
//   // console.log(process.env.AIRTABLE_API_KEY);
//   // Initialize a base

//   const linksBase = Airtable.base(process.env.AIRTABLE_LINKS_BASE_ID);

//   // Reference a table

//   linksTable = linksBase(process.env.AIRTABLE_LINKS_TABLE_NAME);
//   minifyLinkItems = (records) => records.map((record) => getLinkItem(record));

//   const getLinkItem = (record) => {
//     // console.log(record.fields);
//     let faves = record.fields.fav ? record.fields.fav : false;

//     return {
//       title: record.fields.title,
//       url: record.fields.url,
//       fav: faves,
//       type: record.fields.type,
//       note: record.fields.note,
//     };
//   };
// } else {
//   linksTable = null;
//   getLinkItem = null;
//   minifyLinkItems = null;
// }

// export { linksTable, minifyLinkItems, getLinkItem };
