### Demo
See part of it here. [Codepen](https://codepen.io/jaxonetic/pen/ZvVYKp)


### Project Structure
Using the Vue Webpack scaffold and jsDocs, you get a structure below. 
* `src/components` - my custom `.vue` components
* `docs` - See details below.
* `src/css` - Custom CSS styles go here. Don't forget to import them in `main.js`
* `src/main.js` - main app file where you include/import all required libs and init app
* `test/unit/specs` - directory with Karma test specs for web components in this app
* `build/` - build scripts
* `config/` - configurations
* `index.html` - Need to add google api key.  I may not always provide it.  That is why I made the screenshot.

```
vue init webpack ResourceOrganizer
```

#### Documentation [jsdoc](https://github.com/jsdoc3/jsdoc)

```
npm install --save-dev jsdoc
npm install --save-dev jsdoc-vue
node_modules/.bin/jsdoc  -c  config/jsDocConfig.json --verbose
```
The output of this command will produce the docs/ directory as specified in config/jsDocConfig.json and,

![alt docuScreenShot](https://github.com/jaxonetic-github/resource-organizer-vue/blob/master/src/assets/jsdoc-screenshot.png)

### Component Screenshot
```
npm run dev
```
produces:
![alt screenshot](https://github.com/jaxonetic-github/resource-organizer-vue/blob/master/src/assets/resource-directory-screenshot.png)


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
