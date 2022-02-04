#!/usr/bin/env bash

npm install
npm run build
npm run build:cleanup

git add .
git commit -m 'Update package'
git tag -a -m 'Release package' v1.2
git push --follow-tags
git push
