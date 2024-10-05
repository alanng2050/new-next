#!/bin/bash

source_dir="$( dirname "${BASH_SOURCE[0]}" )/../@tinychange/new-next/template/"
if [[ "$1" == "" ]]
then
  read -p 'Enter your project name: ' project_name
else
  project_name=$1
fi

echo "Creating new project..."
cp -r $source_dir $project_name
cp -r $source_dir"../README.md" $project_name

cd $project_name
git init
mv gitignore .gitignore

echo "Running yarn install..."
yarn install


echo "Done."
echo "To run your project: cd $project_name && yarn dev"
