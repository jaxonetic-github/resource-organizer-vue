# resource_organizer

> A Vue.js project with webpack, vueloader, karma/mocha, and eslinting

## Project creation
The base of this Project is the webpack prepack.
>>vue init webpack ResourceOrganizer


# Project Structure
The Vue Webpack install creates the following structure
* `src/components` - folder with custom `.vue` components
* `src/components/city-directory.vue` - main app structure/component
* `src/css` - put custom app CSS styles here. Don't forget to import them in `main.js`
* `src/main.js` - main app file where you include/import all required libs and init app
* `src/util.js` - app constants and methods 

#Added  dependencies 
>>npm install --save vuetify

In order for karma to use chrome
>>npm install karma-chrome-launcher --save-dev

##

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

