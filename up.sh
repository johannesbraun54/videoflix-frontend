#!/usr/bin/env bash


echo "Pulling latets changes from the remote repository..."
git pull

echo "adding all changes..."
git add .

read -p "Enter commit message: " msg
git commit -m "$msg"

git push
echo "Pushing changes to the remote repository..."
echo "Done."