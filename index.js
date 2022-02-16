const gitCore = require('@actions/core');
const gitHub = require('@actions/github');

const run = async() => {
 const owner = gitCore.getInput('owner');
 gitCore.setOutput(`The owner of the repository is ${owner}`);
};

run();