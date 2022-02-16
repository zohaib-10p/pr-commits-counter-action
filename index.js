const gitCore = require('@actions/core');
const gitHub = require('@actions/github');

const run = async () => {
   const owner = gitCore.getInput('owner');
   const prNumber = gitCore.getInput('pr-number');
   const repository = gitCore.getInput('repository');
   const token = gitCore.getInput('github-token');
   const maxAllowedCommits = gitCore.getInput('max-allowed-commits');
   const client = gitHub.getOctokit(token);
   const commits = await client.rest.pulls.listCommits({
      owner: owner,
      repo: repository,
      pull_number: prNumber,
   });
   gitCore.setCommandEcho(true);
   if(commits.data.length > maxAllowedCommits){
      gitCore.setFailed(`Your PR has ${commits.data.length} commits. Maximum allowed commits in a PR is ${maxAllowedCommits}`);
   } else {
      gitCore.setOutput('totalCommits', commits.data.length);
   }
   
};

run();

