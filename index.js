const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const Table = require('cli-table');

// Replace the placeholder with your Atlas connection string
const uri = "mongodb://127.0.0.1:27017";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Access the "nature_types" collection
    const collection = client.db("natures").collection("nature_type");

    // Perform a lookup with the "nature" collection to get the description
    const result = await collection.aggregate([
      {
        $lookup: {
          from: "nature",
          localField: "natureCodes",
          foreignField: "code",
          as: "natureCodes",
        },
      },
      {
        $unwind: "$natureCodes",
      },
      {
        $project: {
          _id: 0,
          name: 1,
          "natureCodes.code": 1,
          "natureCodes.name": 1,
          "natureCodes.description": 1,
        },
      },
    ]);

    // Convert the result to an array
    const natureTypeData = await result.toArray();

    // Log the retrieved documents
    console.log("Selected nature_type data with descriptions:");

    // Render the data in a table
    renderDataHierarchical(natureTypeData);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
function renderDataHierarchical(data) {
  var ultimoName = ''
  console.log("Nature_Type");
  data.forEach(item => {
    if(item.name != ultimoName){
    console.log(`\t${item.name}`);
    }else{
      console.log(`\t`);
    }
    
    if (item.natureCodes) {
      console.log(`\t\tcode: ${item.natureCodes.code} name: ${item.natureCodes.name} iof: 0`);
      console.log(`\t\t\t Documentos`);
      console.log(`\t\t\t Sub-naturezas`);
      
      if (item.natureCodes.name) {
  
        
        if (item.natureCodes.description) {
          console.log(`\t\t\tname: ${item.natureCodes.description}`);
        } else {
          console.log(`\t\t\t`);
        }
      } else {
        console.log(`\t`);
      }
    }

    console.log('\n'); // Adiciona uma linha em branco entre os itens

    ultimoName = item.name
  });
}
run().catch(console.dir);