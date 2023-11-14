const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

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

    const collectionNatureDoc = client.db("natures").collection("natureDoc");
    const collectionNatureSub = client.db("natures").collection("natureSub");

    const result = await collectionNatureDoc.aggregate([
      {
        $lookup: {
          from: "natureSub",
          localField: "_id",
          foreignField: "_id",
          as: "natureSubInfo"
        }
      },
      {
        $unwind: { path: "$natureSubInfo", preserveNullAndEmptyArrays: true }
      },
      {
        $project: {
          "_id": 1,
          "code": 1,
          "name": 1,
          "natureSubInfo": 1
        }
      }
    ]).toArray();

    // O resultado do "join" estará em 'result'
    console.log(JSON.stringify(result, null, 2));

  } finally {
    await client.close();
  }
}

run().catch(console.dir);
