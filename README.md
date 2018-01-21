# Resource Organizer Vue.js Web Component

> A Vue.js project with webpack, vueloader, karma/mocha tests, ...

See index.html, main.js, src/components/ for relevant front-end code.
Karma test are in test/unit/specs


## Project Structure
The Vue Webpack scaffold creates the following structure
* `src/components` - folder with my custom `.vue` components
* `src/css` - put custom app CSS styles here. Don't forget to import them in `main.js`
* `src/main.js` - main app file where you include/import all required libs and init app
* `test/unit/specs` - directory with Karma test specs for web components in this app
* `build/` - build scripts
* `config/` - configurations
* `index.html` - Need to add *YOUR* google api key

```
vue init webpack ResourceOrganizer
```

##  Extra Dependencies
#### Vuetify   
```
npm install --save vuetify
```
#### Karma Chrome launcher
Install Karma Chrome launcher if using Chrome Browser
```
npm install karma-chrome-launcher --save-dev
```

To run tests
```
npm run test
```
#### Documentation [jsdoc](https://github.com/jsdoc3/jsdoc)

```
npm install --save-dev jsdoc
npm install --save-dev jsdoc-vue
node_modules/.bin/jsdoc  -c  config/jsDocConfig.json --verbose
```
The output of this command will produce the docs/ directory as specified in config/jsDocConfig.json


## Screenshots and Demos

### Component Screenshot
```
npm run dev
```
produces:
![alt screenshot](https://github.com/jaxonetic-github/resource-organizer-vue/blob/master/src/assets/resource-directory-screenshot.png)

### Demos
See part of it here. [Codepen](https://codepen.io/jaxonetic/pen/ZvVYKp)


### Documentation 
```
node_modules/.bin/jsdoc  -c  config/jsDocConfig.json --verbose
```
produces:
![alt docuScreenShot](https://github.com/jaxonetic-github/resource-organizer-vue/blob/master/src/assets/jsdoc-screenshot.png)
