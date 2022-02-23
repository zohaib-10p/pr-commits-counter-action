### A Github custom action to restrict the number of commits in a PR

Different teams follow different practices. It is often required that a PR should only have X number of commits in order to keep the repo history clean.

This Github custom action will take number of allowed commits and perform the check on each PR.

#### Sample Workflow

name: Count Commits

on: pull_request

jobs:

  count-commits:
    runs-on: ubuntu-latest
    name: Count the commits
    steps:
      - name: Count Commits
        uses: zohaib-10p/testing-github-actions@master
        with:
          owner: ${{ github.repository_owner }}
          repository: ${{ github.event.repository.name }}
          pr-number: ${{ github.event.number }}
          github-token: ${{ secrets.GITHUB_TOKEN }}
          max-allowed-commits: 1
