// * Custom Labels XML to CSV
/* 
*   Note: Please run `npm install` command before running this file to install xml2csv node module. 
*   Learn more about xml2csv node module here: https://github.com/wmfs/xml2csv
*/
'use strict'
const xml2csv = require('xml2csv')
xml2csv(
    {
        xmlPath: './CustomLabels.labels-meta.xml',
        csvPath: './customlabels.csv',
        rootXMLElement: "labels",
        headerMap: [
            ["fullName", "Full Name", "string"],
            ["categories", "Categories", "string"],
            ["language", "Language", "string"],
            ["protected", "Protected", "string"],
            ["shortDescription", "Short Description", "string"],
            ["value", "Value", "string"],
        ]
    },
    function (err, info) {
        if(err) {
            console.log(err);
        }
        if(info) {
            console.log('Total number of labels processed: ' + info.count + '\nLabels are stored in customlabels.csv file');
        }
    }
)