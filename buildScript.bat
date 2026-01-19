git pull origin build
git pull origin main

ng build --output-path docs

mv docs/browser/* docs/

copy CNAME docs/CNAME

git add .
git commit -m "Automated build and deploy to GitHub Pages"
git push origin build
