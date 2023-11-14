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
        $unwind: { path: "$docTypesInfo", preserveNullAndEmptyArrays: true }
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
          "rules": {
            $map: {
              input: "$rules",
              as: "rule",
              in: {
                codeDoc: "$$rule.code", // Renomear o campo 'code'
                nameDoc: "$$rule.name" // Manter o campo 'name'
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
