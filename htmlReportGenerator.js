const reporter = require('cucumber-html-reporter')
var date = new Date()
var currentDate = date.getDate() + "_" + (date.getUTCMonth()+1)  + "_" + date.getFullYear()
    + "_" + date.getHours() + "_" + date.getMinutes() + "_" + date.getSeconds();

var options = {
    brandTitle: "Test e2e Qubika Sport Club",
    theme: "bootstrap",
    jsonFile: "Report/cucumber_report.json",
    output: "Report/cucumber_report_"+currentDate+".html",
    screenshotsDirectory: "./Screenshots/",
    storeScreenshots: true,
    reportSuiteAsScenario: true,
    launchReport:true,
    metadata:{
        "App Version":"1.0.0" ,
        "Test Env": "QA"
    }

}

reporter.generate(options)