const gitCore = require('@actions/core');
const gitHub = require('@actions/github');

const run = async() => {
 const owner = gitCore.getInput('owner');
 const prNumber = gitCore.getInput('pr-number');
 gitCore.setOutput(`The owner of the repository is ${owner} PR is ${prNumber}`);
};

run();