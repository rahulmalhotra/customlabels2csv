// * Custom Labels CSV to XML
'use strict'
const fs = require("fs");
fs.readFile('./customlabels.csv', (err, data) => {
    if (err) console.log(err);;
    let csvData = data.toString();
    csvData = csvData.split('\n').map(row => row.trim())
    let headings = csvData[0].split(',')
    let xml = ``
    for(let i = 1; i < csvData.length-1; i++) {
        let details = csvData[i].match(/(".*?"|[^"\s]+)(?=\s*,|\s*$)/g);
        for(let j = 0; j < headings.length; j++) {
            if(details[j] === ',') {
                details[j] = '';
            }
            xml += `<${headings[j]}>${details[j]}</${headings[j]}>`.replace('&','&amp;');
        }
    }

    /* 
    *   Replacing special characters
    *   Note: You can update this section as per the special characters you're using in your custom labels that 
    *   can be considered as a part of xml.
    *   The special character includes <, >, emojis etc. because the greater and less than signs
    *   can be considered as a closing tag while forming xml
    *   Below are some common examples:
    */
    // * Replacing greater than sign (>) at the end of label text
    xml = xml.replace(/>"/g,'>');
    // * Replacing less than sign (<) at the start of label text
    xml = xml.replace(/"</g,'<');
    // * Replacing double less than sign (<<) anywhere in the label text
    xml = xml.replace(/<</g,'&lt;&lt;');
    // * Replacing double greater than sign (>>) anywhere in the label text
    xml = xml.replace(/>>/g,'&lt;&lt;');
    // * Replacing smile emoji with code
    xml = xml.replace('😊', '&#x1f60a;');
    // * Replacing -> with -&gt; to be considered in xml
    xml = xml.replace(/->/g,'-&gt;');
    /* 
    *   Feel free to add more replace lines here if your xml is not properly generated 
    *   because of some other special characters
    */

    // * Setting up tags
    xml = xml.replace(/<Full Name>/g, '<fullName>');
    xml = xml.replace(/<\/Full Name>/g, '</fullName>');
    xml = xml.replace(/<Language>/g, '<language>');
    xml = xml.replace(/<\/Language>/g, '</language>');
    xml = xml.replace(/<Categories>/g, '<categories>');
    xml = xml.replace(/<\/Categories>/g, '</categories>');
    xml = xml.replace(/Protected/g, 'protected');
    xml = xml.replace(/Short Description/g, 'shortDescription');
    xml = xml.replace(/<Value>/g, '<value>');
    xml = xml.replace(/<\/Value>/g, '</value>');
    xml = xml.replace(/<fullName>/g, '</labels><labels><fullName>')
    xml += '</labels>';

    // * Setting up first and last <labels> tag
    xml = xml.slice(0, xml.indexOf('</labels>')) + xml.slice(xml.indexOf('</labels>') + '</labels>'.length);

    // * Adding xml and custom labels parent tag
    xml = '<?xml version="1.0" encoding="UTF-8"?>\n<CustomLabels xmlns="http://soap.sforce.com/2006/04/metadata">\n' + xml + '</CustomLabels>\n';

    // * Removing empty categories
    xml = xml.replace(/<categories><\/categories>/g, '')

    // * Adding next line characters
    xml = xml.replace(/<\/fullName>/g, '</fullName>\n')
    xml = xml.replace(/<\/language>/g, '</language>\n')
    xml = xml.replace(/<\/categories>/g, '</categories>\n')
    xml = xml.replace(/<\/protected>/g, '</protected>\n')
    xml = xml.replace(/<\/shortDescription>/g, '</shortDescription>\n')
    xml = xml.replace(/<\/value>/g, '</value>\n')

    /* 
    *   Setting labels tag with indentation and next line characters
    *   Default 4 spaces indentation is considered here.
    */
    xml = xml.replace(/<labels>/g, '    <labels>\n')
    xml = xml.replace(/<\/labels>/g, '    </labels>\n')

    /* 
    *   Setting up other tags with indentation
    *   Default 4 spaces indentation is considered here.
    */
    xml = xml.replace(/<fullName>/g, '        <fullName>')
    xml = xml.replace(/<language>/g, '        <language>')
    xml = xml.replace(/<categories>/g, '        <categories>')
    xml = xml.replace(/<protected>/g, '        <protected>')
    xml = xml.replace(/<shortDescription>/g, '        <shortDescription>')
    xml = xml.replace(/<value>/g, '        <value>')

    // * Writing the processed xml into a new file
    fs.writeFile("./NewCustomLabels.labels-meta.xml", xml, { flag: 'w+' }, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The new custom labels xml file is saved with name: NewCustomLabels.labels-meta.xml");
    });
})