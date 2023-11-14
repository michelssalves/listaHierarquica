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

    // Access the "natures" collection
    const collection = client.db("natures").collection("nature");
    // Access the "subnatures" collection
    const collection = client.db("natures").collection("sub_nature");

    // Find all documents in the "nature" collection
    //const cursor = collection.find({}); Esse comando lista tudo na coction

       // Perform a $lookup to join "subnature" with "nature" based on the specified fields
       const result = await collectionNature.aggregate([
        {
          $lookup: {
            from: "subnature",
            localField: "subNatureCodes",
            foreignField: "code",
            as: "subNatureData",
          },
        },
        {
          $unwind: "$subNatureData",
        },
        {
          $project: {
            _id: 0,
            natureField1: 1, // Specify the fields you want from the "nature" collection
            natureField2: 1,
            // Include fields from the "subnature" collection
            subNatureField1: "$subNatureData.field1",
            subNatureField2: "$subNatureData.field2",
          },
        },
      ]).toArray();
  
    // Print the result
    console.log(result);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}


run().catch(console.dir);