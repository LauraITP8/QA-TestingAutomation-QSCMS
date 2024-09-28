let options =[
    '--require-module ts-node/register', //load ty module
    '--require src/tests/stepdefinitions/*.ts',
    '--format progress', //load custo formatter
    '--format json:./Report/cucumber_report.json',
].join(' ');

let run_features=[
    'src/tests/features/e2e/*.feature',
    options,
].join(' ')

module.exports={
    test_runner: run_features
}