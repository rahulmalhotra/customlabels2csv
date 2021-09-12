# Custom Labels <-> CSV [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/intent/tweet?text="customlabels2csv"%20tool%20helps%20you%20to%20convert%20your%20salesforce%20custom%20labels%20file%20to%20a%20csv%20file%20so%20that%20the%20labels%20can%20be%20updated%20easily%20and%20can%20be%20deployed%20back%20to%20salesforce%20in%20bulk.&url=https://github.com/rahulmalhotra/customlabels2csv&via=rahulcoder&hashtags=customlabels,salesforce,csv,salesforcedevelopers)

## Overview

**customlabels2csv** tool helps you to convert your custom labels xml file to a csv file so that you can easily update the error/warning/success messages, you're using in salesforce. You can also convert your csv file back to xml and push/deploy it to your salesforce org to update all the custom labels in one go.

## Installing

You should have Node.js installed in your local system. You can download it from [here](https://nodejs.org). Clone the repository by the executing the below command or downloading the code directly as a zip file.

```
git clone https://github.com/rahulmalhotra/customlabels2csv.git
cd customlabels2csv
```

In order to install the necessary modules, after cloning the repository, you can navigate to the base folder and run the below command to install the dependencies:

```
npm install
```

**customlabels2csv** convertor is now ready for use.

## Usage

You can update the CustomLabels.labels-meta.xml file or replace it directly with your own custom labels xml file.

### Custom Labels XML to CSV conversion

To convert the custom labels xml file to csv file, open the terminal/cmd, navigate to the customlabels2csv folder and run the below command:

```
node xml2csv.js
```

You'll get the output as shown below:

![xml2csv](https://github.com/rahulmalhotra/customlabels2csv/blob/master/images/xml2csv.png)

A new file will be created with name **customlabels.csv** or if this file is already present, it'll be updated as shown below:

![xml2csvoutput](https://github.com/rahulmalhotra/customlabels2csv/blob/master/images/xml2csvoutput.png)

### CSV to Custom Labels XML conversion

To convert the csv file to custom labels xml file, open the terminal/cmd, navigate to the customlabels2csv folder and run the below command:

```
node csv2xml.js
```

You'll get the output as shown below:

![csv2xml](https://github.com/rahulmalhotra/customlabels2csv/blob/master/images/csv2xml.png)

A new file will be created with name **NewCustomLabels.labels-meta.xml** or if this file is already present, it'll be updated as shown below:

![csv2xmloutput](https://github.com/rahulmalhotra/customlabels2csv/blob/master/images/csv2xmloutput.png)


## Tools and Softwares used

If you want to make any changes in the code, please make sure that you have [Node.js](https://nodejs.org) installed. You can use any of the IDEs you prefer for development.
However I like to use VS Code IDE.

Below are the tools or softwares I use personally :-

* [Node.js](https://nodejs.org) - JavaScript Runtime
* [VS Code](https://code.visualstudio.com) - Open Source IDE

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on code of conduct and the process for submitting pull requests.

## Authors

* **Rahul Malhotra** - [@rahulcoder](https://twitter.com/rahulcoder)

## License

This project is licensed under the BSD 3-Clause License - see the [LICENSE.md](LICENSE.md) file for details.
