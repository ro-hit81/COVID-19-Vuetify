const gj = {
    "type": "FeatureCollection", "features" : [
        {
            "type": "Feature",
            "geometry": {
                "type": "Ploygon",
                "coordinates": ["coordinates"]
            },
            "properties": {
                "OBJECTID": 1,
                "DS_ID" : 1
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Ploygon",
                "coordinates": ["coordinates"]
            },
            "properties": {
                "OBJECTID": 2,
                "DS_ID" : 3
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Ploygon",
                "coordinates": ["coordinates"]
            },
            "properties": {
                "OBJECTID": 3,
                "DS_ID" : 2
            }
        },
    ]
}

const dataToAdd = [
    {
        "ds_id": 3,
        "value": 10
    },
    {
        "ds_id": 1,
        "value": 20
    },
    {
        "ds_id": 2,
        "value": 30
    },
]

// const requireOutput = {
//     "type": "FeatureCollection", "features" : [
//         {
//             "type": "Feature",
//             "geometry": {
//                 "type": "Ploygon",
//                 "coordinates": ["coordinates"]
//             },
//             "properties": {
//                 "OBJECTID": 1,
//                 "DS_ID" : 1,
//                 "value": 20
//             }
//         },
//         {
//             "type": "Feature",
//             "geometry": {
//                 "type": "Ploygon",
//                 "coordinates": ["coordinates"]
//             },
//             "properties": {
//                 "OBJECTID": 2,
//                 "DS_ID" : 3,
//                 "value": 10
//             }
//         },
//         {
//             "type": "Feature",
//             "geometry": {
//                 "type": "Ploygon",
//                 "coordinates": ["coordinates"]
//             },
//             "properties": {
//                 "OBJECTID": 3,
//                 "DS_ID" : 2,
//                 "value": 30
//             }
//         },
//     ]
// }

// let requireOutput = [];
// for(let i =0; i<gj.features.length; i++) {
//     const properties = gj.features[i].properties
//     requireOutput.push({
//         ...properties,
//         ...dataToAdd.find((item) => item.ds_id === properties.DS_ID)
//     })
// }
// console.log(requireOutput)
let requireOutput = JSON.parse(JSON.stringify(gj));// For Deep Cloning so that gj does not get changed
for (i of requireOutput.features) 
    i.properties.value = dataToAdd.find((item) => item.ds_id === i.properties.DS_ID).value