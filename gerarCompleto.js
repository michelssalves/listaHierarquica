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

    const collectionNature = client.db("natures").collection("nature");
    const collectionDocType = client.db("natures").collection("doc_type");

    const result = await collectionNature.aggregate([
      {
        $lookup: {
          from: "doc_type",
          localField: "rules.docTypes",
          foreignField: "code",
          as: "docTypesInfo"
        }
      },
      {
        $unwind: "$docTypesInfo"
      },
      {
        $group: {
          _id: "$_id",
          code: { $first: "$code" },
          name: { $first: "$name" },
          rules: {
            $push: {
              code: "$docTypesInfo.code",
              name: "$docTypesInfo.name"
            }
          }
        }
      },
      {
        $project: {
          "_id": 1,
          "code": 1,
          "name": 1,
          "rules": 1
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
