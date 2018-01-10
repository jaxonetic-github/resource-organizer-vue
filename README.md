# Resource Organizer Vue Web Component

> A Vue.js project with webpack, vueloader, karma/mocha

See index.html, main.js, src/components/ for relevant front-end code.
Karma test are in test/unit/specs


## Project Structure
The Vue Webpack install creates the following structure
* `src/components` - folder with my custom `.vue` components
* `src/css` - put custom app CSS styles here. Don't forget to import them in `main.js`
* `src/main.js` - main app file where you include/import all required libs and init app
* `test/unit/specs` - directory with Karma test specs for web components in this app
* `build/` - build scripts
* `config/` - configurations
* `index.html` - Need to add YOUR google api key

### Project creation
The base of this Project is the webpack prepack.
>>vue init webpack ResourceOrganizer


## Dependencies
### Vuetify  dependencies 
>>npm install --save vuetify

### Karma Chrome launcher
>>npm install karma-chrome-launcher --save-dev

## adding documentation capabilities with [jsdoc](https://github.com/jsdoc3/jsdoc)
>>npm install --save-dev jsdoc
>>npm install --save-dev jsdoc-vue
>>node_modules/.bin/jsdoc  -c  config/jsDocConfig.json --verbose

The output of this command will produce the docs/ directory as specified in config/jsDocConfig.json

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


