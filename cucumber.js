let options =[
    '--require-module ts-node/register',
    '--require src/tests/stepdefinitions/*.ts',
    '--format progress'
].join(' ');

let run_features=[
    'src/tests/features/e2e/*.feature',
    options,
].join(' ')

module.exports={
    test_runner: run_features
}