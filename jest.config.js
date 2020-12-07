module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  "transform": {
      "^[^.]+.vue$": "vue-jest",
      "^.+\\.(js|jsx)?$": 'babel-jest'
    },  
/* 
transform: {
    “^.+\\.(js|jsx)?$”: “<rootDir>/node_modules/babel-jest”}
*/
  transformIgnorePatterns: [
    // "node_modules/"

  
    // "node_modules/(?!epic-spinners)",
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
/*  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  */
  testMatch: [
    '**/test/unit/specs/*.spec.js'
  ],
    setupFiles: ['<rootDir>/jest.setup.js'],
}