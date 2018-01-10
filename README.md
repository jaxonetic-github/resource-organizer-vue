## resource Organizer

> A Vue.js project with webpack, vueloader, karma/mocha, and eslinting

## Project creation
The base of this Project is the webpack prepack.
>>vue init webpack ResourceOrganizer


# Project Structure
The Vue Webpack install creates the following structure
* `src/components` - folder with my custom `.vue` components
* `src/css` - put custom app CSS styles here. Don't forget to import them in `main.js`
* `src/main.js` - main app file where you include/import all required libs and init app
* `test/unit/specs` - directory with Karma test specs for web components in this app
* `build/` - build scripts
* `config/` - configurations
* `index.html` - Need to add YOUR google api key


# Added  dependencies 
>>npm install --save vuetify

In order for karma to use chrome
>>npm install karma-chrome-launcher --save-dev

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


