var natureJson = [
{
    "_id" : ObjectId("5b9045c33c5eb200ae223159"),
    "code" : "EXPMERC",
    "name" : "Exportação de mercadorias",
    "subNatureCodes" : [
        "AVISTAPAGAVISTA",
        "PAGPRAZREMSEMSAQ",
        "PAGANTECIPADO",
        "OUTRAOPCEXPMEC"
    ]
},
{
    "_id" : ObjectId("5bb388af5a637e3333d9e6d9"),
    "code" : "EXPVIVARTCONSLIMPCARG",
    "name" : "Exportação de víveres, artigos para conservação, limpeza e acomodação de carga",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "COPFATCOM",
            "COPCONTRANSINT",
            "RESD"
        ]
    },
},
{
    "_id" : ObjectId("5bb277235a637e3333d9a9bf"),
    "code" : "PAGTRANSPFRETE",
    "name" : "Pagamento de transporte ou frete",
    "subNatureCodes" : [
        "TRANSPAEREO",
        "TRANSPMARIT",
        "TRANSPRODO",
        "TRANSPOUTROS"
    ]
},
{
    "_id" : ObjectId("5bb27a585a637e3333d9aa5a"),
    "code" : "PAGSEGRESSEG",
    "name" : "Pagamento de seguro ou resseguro",
    "subNatureCodes" : [
        "SEGFRETTRANSPEXPORT",
        "SEGFRETTRANSPIMPORT",
        "RESSEG",
        "SEGVID",
        "RECUPSINISTROS",
        "OUTROSSEGDIRETOS",
        "OUTROSSERVRELSEGUROS"
    ]
},
{
    "_id" : ObjectId("5bb388af5a637e3333d9e6db"),
    "code" : "EXPMERCPAGJU",
    "name" : "Exportação de mercadorias em pagamento de juros",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "COPFATCOM",
            "COPCONTRANSINT",
            "RESD"
        ]
    },
},
{
    "_id" : ObjectId("5bb377a35a637e3333d9d1c2"),
    "code" : "RECREFTRANSFRET",
    "name" : "Recebimento referente a transporte ou frete",
    "subNatureCodes" : [
        "TETRANSPAEREO",
        "TETRANSPMAR",
        "TETRANSPRODO",
        "TETRANSPOUTROS"
    ]
},
{
    "_id" : ObjectId("5bb388af5a637e3333d9e6d5"),
    "code" : "EXPJOIASGEMPEDOURO",
    "name" : "Exportação de jóias, gemas, pedras preciosas e artefatos de ouro e de pedras preciosas",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "COPFATCOM",
            "CONHEEMBAR",
            "RESD"
        ]
    },
},
{
    "_id" : ObjectId("5bb388af5a637e3333d9e6d7"),
    "code" : "EXPCOMLUBBENADQEMBEST",
    "name" : "Exportação de combustíveis, lubrificantes e outros bens adquiridos por embarcações estrangeiras",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "COPFATCOM",
            "RESD"
        ]
    },
},
{
    "_id" : ObjectId("5bb388af5a637e3333d9e6dd"),
    "code" : "OUTROTIPEXP",
    "name" : "Outro tipo de exportação",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "COPFATCOM",
            "COPCONTRANSINT",
            "RESD"
        ]
    },
},
{
    "_id" : ObjectId("5bb270f55a637e3333d9a8a2"),
    "code" : "IMPMERCLOJAFRANCA",
    "name" : "Importação de mercadorias para venda em loja franca",
    "rules" : {
        "iof" : 0.0,
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "COPFATCOM",
            "COPCONTRANSINT",
            "LINCIMPDECEXSISCOMEX"
        ]
    },
},
{
    "_id" : ObjectId("5bb270f55a637e3333d9a8a6"),
    "code" : "IMPLIVPERFIS",
    "name" : "Importação de livros e de periódicos adquiridos em meio físico",
    "rules" : {
        "iof" : 0.0,
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "COPFATCOM",
            "COPCONTRANSINT",
            "LINCIMPDECEXSISCOMEX"
        ]
    },
},
{
    "_id" : ObjectId("5bb270f55a637e3333d9a8a8"),
    "code" : "IMPSOFTNAOCUSTFIS",
    "name" : "Importação de software pronto para uso não customizado e adquirido em meio físico",
    "rules" : {
        "iof" : 0.0,
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "COPFATCOM",
            "LINCIMPDECEXSISCOMEX"
        ]
    },
},
{
    "_id" : ObjectId("5bb286de5a637e3333d9ac89"),
    "code" : "EXPORSOFTNAOCOSTFISICO",
    "name" : "Exportação de software pronto para uso, não customizado e adquirido em meio físico",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "COPFATCOM",
            "COPCONTRANSINT",
            "RESD"
        ]
    },
},
{
    "_id" : ObjectId("5bb270f55a637e3333d9a8a4"),
    "code" : "IMPPETRBRUDERIV",
    "name" : "Importação de petróleo bruto e de derivados",
    "rules" : {
        "iof" : 0.0,
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "COPFATCOM",
            "COPCONTRANSINT",
            "COMPIMP"
        ]
    },
},
{
    "_id" : ObjectId("5bb2730f5a637e3333d9a905"),
    "code" : "OUTROTIPOIMP",
    "name" : "Outro tipo de Importação",
    "rules" : {
        "iof" : 0.0,
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("5bb380de5a637e3333d9dd9c"),
    "code" : "CONSIGNACAO",
    "name" : "Consignação",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "COPFATCOM",
            "CONHEEMBAR",
            "RESD"
        ]
    },
},
{
    "_id" : ObjectId("5e61352ee47b81677158a063"),
    "code" : "IMPBTB",
    "name" : "importações back-to-back",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("5bb283935a637e3333d9abe7"),
    "code" : "TRANSFUNILAT",
    "name" : "Transferências unilaterais",
    "rules" : {
        "iof" : 0.0,
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("5bb283935a637e3333d9abed"),
    "code" : "MOVCAPITBREXT",
    "name" : "Movimentações de capitais brasileiros no exterior",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
    "subNatureCodes" : [
        "AQUISMOLDFERRAMPERMEXT"
    ]
},
{
    "_id" : ObjectId("5bb37b565a637e3333d9d570"),
    "code" : "RECEBADSENSE",
    "name" : "Recebimento do AdSense",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("5bb379bb5a637e3333d9d3e2"),
    "code" : "TERECREFSEGRESS",
    "name" : "Recebimento referente a seguro ou resseguro",
    "subNatureCodes" : [
        "TESEFRETRANEXP",
        "TESEFRETRANSIMP",
        "TERESSEG",
        "TESEGVIDA",
        "TEOUTROSSEGDIR",
        "TEOUTRSERVRELSEG",
        "TERECSIN"
    ]
},
{
    "_id" : ObjectId("5f7ef800e5300617043a6c6d"),
    "code" : "CRIPTOATIVOS",
    "name" : "Criptoativos",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [

        ]
    },
},
{
    "_id" : ObjectId("5b9045c33c5eb200ae22315b"),
    "code" : "TRANSFUNI",
    "name" : "Transferências Unilaterais",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPREC"
        ]
    },
},
{
    "_id" : ObjectId("5bb283935a637e3333d9abe9"),
    "code" : "PAGAMENTOSERVDIVER",
    "name" : "Pagamento de serviços diversos",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("5bb283935a637e3333d9abeb"),
    "code" : "RENDASCAPITAIS",
    "name" : "Rendas de capitais",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("5b9045c33c5eb200ae223157"),
    "code" : "PAGVIAGINT",
    "name" : "Pagamento de viagem internacional",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("5bb283935a637e3333d9abef"),
    "code" : "ENVCAPBRTOEXT",
    "name" : "Envio de capital/ganho brasileiro para o exterior",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("5ede737354b1b80412139aca"),
    "code" : "Demurrage",
    "name" : "Demurrage",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPREC"
        ]
    },
},
{
    "_id" : ObjectId("5f762771dac3634915981174"),
    "iof" : NumberInt(0),
    "ir" : NumberInt(0),
    "limit" : NumberInt(0),
    "docTypes" : [
        "COPFATCOM",
        "DUE"
    ]
},
{
    "_id" : ObjectId("5f762868dac363491598117d"),
    "iof" : NumberInt(0),
    "ir" : NumberInt(0),
    "limit" : NumberInt(0),
    "docTypes" : [
        "DOCCOMPREC"
    ]
},
{
    "_id" : ObjectId("5f7628a8dac3634915981180"),
    "iof" : NumberInt(0),
    "ir" : NumberInt(0),
    "limit" : NumberInt(0),
    "docTypes" : [
        "DOCCOMPREC"
    ]
},
{
    "_id" : ObjectId("5bb37b565a637e3333d9d561"),
    "code" : "TETRANSUNIL",
    "name" : "Transferência unilateral",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("5bb37b565a637e3333d9d563"),
    "code" : "TESERVDIVER",
    "name" : "Serviços diversos",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("5f762a8fdac3634915981195"),
    "code" : "FACPAGEXT",
    "name" : "Transferência do exterior / Facilitadoras de pagamentos internacionais",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("5bb37b565a637e3333d9d55d"),
    "code" : "TERECEBREFVAIGINT",
    "name" : "Recebimento referente a viagem internacional",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("5bb37b565a637e3333d9d55f"),
    "code" : "TERECREFARBIT",
    "name" : "Recebimento referente a arbitragens",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("5bb37b565a637e3333d9d565"),
    "code" : "TERENCAPI",
    "name" : "Rendas de capitais",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("5bb37b565a637e3333d9d567"),
    "code" : "TERETCAPBREXT",
    "name" : "Retorno de capital/ganho de brasileiro do exterior",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("5bb37b565a637e3333d9d569"),
    "code" : "TEMOVCAPESTRBRA",
    "name" : "Movimentações de capitais estrangeiros no Brasil",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("60bf51f3f94a7c2a5eb4affc"),
    "code" : "DIRAUTCESUSOPROGCOMPUT",
    "name" : "Direitos autorais - Cessão ou uso de programas de computador",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("60e85b4b4ac74e0ae3bd68d2"),
    "code" : "DEMINHATITUNOEXT",
    "name" : "De minha titularidade no exterior",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [

        ]
    },
},
{
    "_id" : ObjectId("60e860a84ac74e0ae3bd68d8"),
    "code" : "DEDIVIDEXT",
    "name" : "De dividendos do exterior",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "COPCONTRATINVESTBRASIL",
            "COPBALANCOUDEMONSTBASECALC",
            "COPATOSOCIETPAGAMJURO",
            "CBEDECLARCAPITEXTACIMA100K"
        ]
    },
    "codeNature" : "52405"
},
{
    "_id" : ObjectId("60e860da4ac74e0ae3bd68d9"),
    "code" : "DEUMAPF",
    "name" : "De uma pessoa física",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [

        ]
    },
    "codeNature" : "37004"
},
{
    "_id" : ObjectId("60e860f64ac74e0ae3bd68da"),
    "code" : "PARAFINSEDUCAC",
    "name" : "Para fins educacionais",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
    "codeNature" : "37011"
},
{
    "_id" : ObjectId("60e8618b4ac74e0ae3bd68dd"),
    "code" : "DEALUGDEIMOVEIS",
    "name" : "De aluguel de imóveis",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "CONTLOCIMOVDOC"
        ]
    },
    "codeNature" : "47915"
},
{
    "_id" : ObjectId("60e861bb4ac74e0ae3bd68de"),
    "code" : "DEVENDADEIMOVEISNOPAIS",
    "name" : "De venda de imóveis no país",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "CONTRATCOMPROUVEND",
            "CERTNEGATIVIMOVEL"
        ]
    },
    "codeNature" : "72911"
},
{
    "_id" : ObjectId("60e861dd4ac74e0ae3bd68df"),
    "code" : "DEVENDADEIMOVEISNOEXT",
    "name" : "De venda de imóveis no exterior",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "CONTRATCOMPROUVEND"
        ]
    },
    "codeNature" : "67940"
},
{
    "_id" : ObjectId("60e859404ac74e0ae3bd68ca"),
    "code" : "ENVPARAPESSOAFISICA",
    "name" : "Enviar para uma pessoa física",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [

        ]
    },
    "codeNature" : "37004"
},
{
    "_id" : ObjectId("60e859ea4ac74e0ae3bd68cc"),
    "code" : "PAGCUSTEDUCNOEXT",
    "name" : "Pagar custos com educação no exterior",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "CONTRATPRESTSERVICORRESPOBRIGDIVID",
            "FATOUOUTRDOCUMJUSTIFREMESS"
        ]
    },
    "codeNature" : "47719"
},
{
    "_id" : ObjectId("60e85a5e4ac74e0ae3bd68cf"),
    "code" : "PAGALUGUELEXT",
    "name" : "Pagar aluguel de imóvel no exterior",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "CONTLOCIMOVDOC"
        ]
    },
    "codeNature" : "47915"
},
{
    "_id" : ObjectId("60e85ab84ac74e0ae3bd68d1"),
    "code" : "PAGTRATAMENTSAUDE",
    "name" : "Pagar tratamento de saúde",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "CONTRATPRESTSERVICORRESPOBRIGDIVID"
        ]
    },
    "codeNature" : "47726"
},
{
    "_id" : ObjectId("60e8577e4ac74e0ae3bd68c4"),
    "code" : "ENVMINHACONTAEXT",
    "name" : "Envio de dinheiro para minha conta corrente no exterior",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [

        ]
    },
    "codeNature" : "67500"
},
{
    "_id" : ObjectId("60e858b14ac74e0ae3bd68c9"),
    "code" : "ENVMINHACORRETINVEST",
    "name" : "Envio de dinheiro para minha corretora de investimentos",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [

        ]
    },
    "codeNature" : "67005"
},
{
    "_id" : ObjectId("62db067ddf056149e4802210"),
    "code" : "RECEBFUNDEINVESTIM",
    "name" : "Fundos de investimento",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("61018bfe33f4e72ed0549a29"),
    "code" : "DIRAUTLICENCOPDISTPROGCOMP",
    "name" : "Direitos autorais - Licença para cópia e distribuição de programas de computador",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("6171c4d089494b096ec5078d"),
    "code" : "DEMURRAGEPAREXT",
    "name" : "Demurrage",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("606368c1af6b8324f12a80de"),
    "code" : "ENCOMINTERNAC",
    "name" : "Encomendas Internacionais",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "COPFATCOM",
            "COPCONTRANSINT"
        ]
    },
},
{
    "_id" : ObjectId("612fac3f9fc9fc7477962bf0"),
    "code" : "INVDIRETDIVIDDISTRLUCR",
    "name" : "Investimento direto - Dividendos/distribuição de lucros",
    "rules" : {
        "iof" : 0.0,
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "RDEROF",
            "COPIATOVALAPUR",
            "BALANCPERIODAPURLUCR"
        ]
    },
},
{
    "_id" : ObjectId("6171cd9889494b096ec5078f"),
    "code" : "FACILITPAGINTERNAC",
    "name" : "Facilitadora de pagamentos internacionais",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "COPFATCOM",
            "ACAM2020",
            "CONTRATOMADSERVIEXT"
        ]
    },
},
{
    "_id" : ObjectId("61b35ee54680125bc6b692a9"),
    "code" : "12036",
    "name" : "Encomendas Internacionais (DESATIVADA)",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "COPFATCOM",
            "COPCONTRANSINT",
            "DARF"
        ]
    },
    "status" : "disable"
},
{
    "_id" : ObjectId("623219cee7cd5623c34789f0"),
    "code" : "PAGEDUCACEMVIAG",
    "name" : "Pagamento de educação em viagem",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("60e860444ac74e0ae3bd68d7"),
    "code" : "DEVENDAACOES",
    "name" : "De venda de Ações",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
    "codeNature" : "67005"
},
{
    "_id" : ObjectId("60e8612f4ac74e0ae3bd68db"),
    "code" : "DESERVICADS",
    "name" : "De serviços/ADS",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
    "codeNature" : "47757"
},
{
    "_id" : ObjectId("60e862034ac74e0ae3bd68e0"),
    "code" : "PORSERVICDESAUD",
    "name" : "Por serviços de saúde",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [

        ]
    },
    "codeNature" : "47733"
},
{
    "_id" : ObjectId("60e862244ac74e0ae3bd68e1"),
    "code" : "DEDOACOES",
    "name" : "De doações",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
    "codeNature" : "37080"
},
{
    "_id" : ObjectId("60e85a214ac74e0ae3bd68cd"),
    "code" : "PAGPRODUTOS",
    "name" : "Pagar produtos no exterior",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "INVOICEORDOCEQUIVAL"
        ]
    },
    "codeNature" : "12036"
},
{
    "_id" : ObjectId("60ed9d16cad51116ed199d59"),
    "code" : "PAGSERVICOS",
    "name" : "Pagar serviços no exterior",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("60ed9dcfcad51116ed199d5a"),
    "code" : "PAGCOMPRAEXT",
    "name" : "Pagar compra de imóvel no exterior",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "CONTRATCOMPROUVEND"
        ]
    },
    "codeNature" : "67940"
},
{
    "_id" : ObjectId("61b38ee04680125bc6b692cd"),
    "code" : "ENVCORRETINTERN",
    "name" : "Enviar para uma corretora internacional",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [

        ]
    },
    "codeNature" : "37004"
},
{
    "_id" : ObjectId("62db063edf056149e4802209"),
    "code" : "PAGEMPRESTDIRETOS",
    "name" : "Empréstimos diretos",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "CONTRATEMPRESTIM"
        ]
    },
},
{
    "_id" : ObjectId("62db064bdf056149e480220a"),
    "code" : "PAGACOES",
    "name" : "Ações",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("62db0654df056149e480220b"),
    "code" : "PAGFUNDEINVESTIM",
    "name" : "Fundos de investimento",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("62db065cdf056149e480220c"),
    "code" : "PAGREDUCDECAPITAL",
    "name" : "Aumento / Redução de capital",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "RDEIED",
            "COPATOSOCIETREDUCAPITRESTISOC"
        ]
    },
},
{
    "_id" : ObjectId("62db0663df056149e480220d"),
    "code" : "PAGAUMENTOREDUCPARTICIP",
    "name" : "Aumento / Redução de participação",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("62db066cdf056149e480220e"),
    "code" : "RECEBEMPRESTDIRETOS",
    "name" : "Empréstimos diretos",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "RDEROF",
            "CONTRATEMPRESTIM"
        ]
    },
},
{
    "_id" : ObjectId("62db0675df056149e480220f"),
    "code" : "RECEBACOES",
    "name" : "Ações",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "RDEOPCIONAL"
        ]
    },
},
{
    "_id" : ObjectId("62db0684df056149e4802211"),
    "code" : "RECEBREDUCDECAPITAL",
    "name" : "Aumento / Redução de capital",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "RDEIED"
        ]
    },
},
{
    "_id" : ObjectId("62db068cdf056149e4802212"),
    "code" : "RECEBAUMENTOREDUCPARTICIP",
    "name" : "Aumento / Redução de participação",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("634ee2675caf7b3a38598b8d"),
    "code" : "RECEBPORSERVPRESTADEXT",
    "name" : "Recebimento por serviço prestado ao exterior",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("5b9045c33c5eb200ae223155"),
    "code" : "IMPORMERC",
    "name" : "Importação de mercadorias",
    "subNatureCodes" : [
        "AVISTAPAGAVISTA",
        "PAGANTECIPADO",
        "PAGPRAZREMSEMSAQ",
        "FINCURTPRAZ",
        "PARCNAOFINAN",
        "CAMBSIMPIMP",
        "OUTRAOPCIMP",
        "FINANLONGOPRAZO"
    ]
},
{
    "_id" : ObjectId("63650bcafca96f2fb6b563a5"),
    "code" : "PAGFORNECNOEXT",
    "name" : "Pagamento de fornecedores no exterior",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("63d3bd61b77a7704e4475c38"),
    "code" : "CONTOUTROSMEIACONDICDECARG",
    "name" : "Contêiner e outros meios de acondicionamento de carga",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("64540d17a0a2377d9d0a1689"),
    "code" : "PRODUCAODECONTEUDO",
    "name" : "Produção de conteúdos",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPRAZPAG"
        ]
    },
},
{
    "_id" : ObjectId("60e85a8f4ac74e0ae3bd68d0"),
    "code" : "APORTEMPRESEXT",
    "name" : "Aporte de empresas no exterior",
    "rules" : {
        "iof" : NumberInt(0),
        "ir" : NumberInt(0),
        "limit" : NumberInt(0),
        "docTypes" : [
            "DOCCOMPCONSTEMPEXTERIOR"
        ]
    },
    "codeNature" : "67005"
},
];
db.nature.insertMany(natureJson);