#!/bin/bash

set -o errexit -o nounset

buildDir="dist"

commitSha=$(git rev-parse --short HEAD)
commitAuthorName=$(git --no-pager show -s --format='%an' HEAD)
commitAuthorEmail=$(git --no-pager show -s --format='%ae' HEAD)
commitMessage=$(git log --oneline -n 1)

repoName="angular-quickstart-lib-nightly"
repoUrl="https://github.com/jgodi/angular-quickstart-lib-nightly.git"
repoDir="nightly/$repoName"

echo "Cloning $repoUrl into $repoDir"
git clone $repoUrl $repoDir

echo "Cleaning nightly repo and moving release files into it"
rm -rf $repoDir/*
cp -r $buildDir/* $repoDir
cd $repoDir

# Prepare Git for pushing the artifacts to the repository.
git config user.name "$commitAuthorName"
git config user.email "$commitAuthorEmail"
git config credential.helper "store --file=.git/credentials"

echo "https://${NIGHTLY_GIT_TOKEN}:@github.com" > .git/credentials

git add -A
git commit -m "$commitMessage"
git tag "$commitSha"
git push origin master --tags

echo "Finished publishing nightly build"
