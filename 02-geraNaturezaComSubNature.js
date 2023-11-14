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
    const collectionSubNature = client.db("natures").collection("sub_nature");

    const result = await collectionNature.aggregate([
      {
        $lookup: {
          from: "sub_nature",
          localField: "subNatureCodes",
          foreignField: "code",
          as: "subNatureInfo"
        }
      },
      {
        $project: {
          "_id": 1,
          "code": 1,
          "name": 1,
          "subNatureCodes": {
            $map: {
              input: "$subNatureInfo",
              as: "subNature",
              in: {
                codeSubNature: "$$subNature.code",
                nameSubNature: "$$subNature.name"
              }
            }
          }
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
