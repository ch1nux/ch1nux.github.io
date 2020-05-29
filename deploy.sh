#!/bin/bash

# Abort on errors
set -e

# Make sure you are on the right branch
git checkout gh-pages

# Build the page
vuepress build

cd .vuepress/dist

echo "www.chinux.tech" > CNAME

git add -A
git commit -m "Actualización $(date '+%d-%m-%Y %I:%M%p')"
git push -f https://github.com/chinuxparibus/chinuxparibus.github.io.git master

cd -
