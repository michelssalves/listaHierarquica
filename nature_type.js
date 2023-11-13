var natureTypeJson = [
{
    "_id" : ObjectId("60e75f8c4ac74e0ae3bd685f"),
    "name" : "Para mim",
    "type" : "BUYING",
    "subType" : "TRANSFERBUY",
    "natureCodes" : [
        "ENVMINHACONTAEXT",
        "ENVMINHACORRETINVEST"
    ],
    "clientType" : "PF"
},
{
    "_id" : ObjectId("5b90478b3c5eb200ae2232a9"),
    "name" : "Exportação",
    "type" : "SELLING",
    "subType" : "TRADESELL",
    "clientType" : "PJ",
    "natureCodes" : [
        "EXPMERC",
        "EXPORSOFTNAOCOSTFISICO",
        "EXPCOMLUBBENADQEMBEST",
        "EXPVIVARTCONSLIMPCARG",
        "EXPMERCPAGJU",
        "OUTROTIPEXP"
    ]
},
{
    "_id" : ObjectId("5b90478b3c5eb200ae2232a5"),
    "name" : "Importação",
    "type" : "BUYING",
    "subType" : "TRADEBUY",
    "clientType" : "PJ",
    "natureCodes" : [
        "IMPORMERC",
        "IMPMERCLOJAFRANCA",
        "IMPPETRBRUDERIV",
        "IMPLIVPERFIS",
        "IMPSOFTNAOCUSTFIS",
        "OUTROTIPOIMP",
        "IMPBTB"
    ]
},
{
    "_id" : ObjectId("60e84e9e4ac74e0ae3bd68ba"),
    "name" : "Para outra pessoa ou empresa",
    "type" : "BUYING",
    "subType" : "TRADEBUY",
    "natureCodes" : [
        "ENVPARAPESSOAFISICA",
        "PAGCUSTEDUCNOEXT",
        "PAGPRODUTOS",
        "PAGSERVICOS",
        "PAGALUGUELEXT",
        "PAGCOMPRAEXT",
        "APORTEMPRESEXT",
        "PAGTRATAMENTSAUDE",
        "ENVCORRETINTERN"
    ],
    "clientType" : "PF"
},
{
    "_id" : ObjectId("60e852df4ac74e0ae3bd68bb"),
    "name" : "Para mim",
    "type" : "SELLING",
    "subType" : "TRADESELL",
    "natureCodes" : [
        "DEMINHATITUNOEXT",
        "DEVENDAACOES",
        "DEDIVIDEXT",
        "DEUMAPF",
        "PARAFINSEDUCAC",
        "DESERVICADS",
        "DEALUGDEIMOVEIS",
        "DEVENDADEIMOVEISNOPAIS",
        "DEVENDADEIMOVEISNOEXT",
        "PORSERVICDESAUD",
        "DEDOACOES"
    ],
    "clientType" : "PF"
},
{
    "_id" : ObjectId("5b90478b3c5eb200ae2232a7"),
    "name" : "Transferência para o exterior",
    "type" : "BUYING",
    "subType" : "TRANSFERBUY",
    "clientType" : "PJ",
    "natureCodes" : [
        "PAGVIAGINT",
        "PAGEDUCACEMVIAG",
        "PAGTRANSPFRETE",
        "PAGSEGRESSEG",
        "TRANSFUNILAT",
        "PAGAMENTOSERVDIVER",
        "RENDASCAPITAIS",
        "MOVCAPITBREXT",
        "ENVCAPBRTOEXT",
        "DEMURRAGEPAREXT",
        "CRIPTOATIVOS",
        "ENCOMINTERNAC",
        "DIRAUTCESUSOPROGCOMPUT",
        "DIRAUTLICENCOPDISTPROGCOMP",
        "INVDIRETDIVIDDISTRLUCR",
        "FACILITPAGINTERNAC",
        "12036",
        "PAGEMPRESTDIRETOS",
        "PAGACOES",
        "PAGFUNDEINVESTIM",
        "PAGREDUCDECAPITAL",
        "PAGAUMENTOREDUCPARTICIP",
        "PAGFORNECNOEXT",
        "CONTOUTROSMEIACONDICDECARG"
    ]
},
{
    "_id" : ObjectId("60e853444ac74e0ae3bd68bd"),
    "name" : "Para outra pessoa ou empresa",
    "type" : "SELLING",
    "subType" : "TRANSFERSELL",
    "natureCodes" : [
        "PRODUCAODECONTEUDO"
    ],
    "clientType" : "PF"
},
{
    "_id" : ObjectId("5b90478b3c5eb200ae2232ab"),
    "name" : "Transferência do exterior",
    "type" : "SELLING",
    "subType" : "TRANSFERSELL",
    "clientType" : "PJ",
    "natureCodes" : [
        "RECEBPORSERVPRESTADEXT",
        "TRANSFUNI",
        "RECREFTRANSFRET",
        "TERECREFSEGRESS",
        "TERECEBREFVAIGINT",
        "TERECREFARBIT",
        "TESERVDIVER",
        "TERENCAPI",
        "TERETCAPBREXT",
        "TEMOVCAPESTRBRA",
        "FACPAGEXT",
        "RECEBADSENSE",
        "DIRAUTCESUSOPROGCOMPUT",
        "DIRAUTLICENCOPDISTPROGCOMP",
        "RECEBEMPRESTDIRETOS",
        "RECEBACOES",
        "RECEBFUNDEINVESTIM",
        "RECEBREDUCDECAPITAL",
        "RECEBAUMENTOREDUCPARTICIP",
        "PRODUCAODECONTEUDO"
    ]
},
];
db.nature_type.insertMany(natureTypeJson);