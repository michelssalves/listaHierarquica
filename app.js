const { MongoClient, ServerApiVersion } = require("mongodb");
const Table = require('cli-table');

const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const subNatureCollection = client.db("natures").collection("sub_nature");
    const docTypeCollection = client.db("natures").collection("doc_type");

    // Select code, name, and docTypes fields from sub_nature collection
    const result = await subNatureCollection.find({}, { projection: { _id: 0, code: 1, name: 1, 'rules.docTypes': 1 } });
    const subNatureData = await result.toArray();

    console.log("Selected sub_nature data:");
    await renderData(subNatureData, docTypeCollection);
  } finally {
    await client.close();
  }
}

async function renderData(data, docTypeCollection) {

  let currentNature = null;
  let currentSubNature = null;
  for (const item of data) {
    const natureCode = item.natureCode || 'Nature';
    const subNatureCode = item.subNatureCode || 'SubNature';
    const code = item.code || 'N/A';
    const name = item.name || 'N/A';
    const doctypes = Array.isArray(item.rules.docTypes) ? item.rules.docTypes : [];

    if (natureCode !== currentNature) {
      console.log(`${natureCode}`);
      currentNature = natureCode;
    }

    if (subNatureCode !== currentSubNature) {
      console.log(`  ${subNatureCode}`);
      currentSubNature = subNatureCode;
    }

    console.log(`    Code: ${code} Name: ${name}`);

    for (const docType of doctypes) {
      // Fetch name from doc_type collection based on docType code
      const docTypeName = await fetchDocTypeName(docTypeCollection, docType);
      console.log(`      DocType: ${docType} Name: ${name} DocTypeName: ${docTypeName || 'N/A'}`);
    }

    console.log(); // Add a newline to separate different entries
  }
}

async function fetchDocTypeName(docTypeCollection, docTypeCode) {
  const result = await docTypeCollection.findOne({ code: docTypeCode }, { projection: { _id: 0, name: 1 } });
  return result ? result.name : 'N/A';
}

run().catch(console.dir);
