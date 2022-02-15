// more info here

// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

// Watch mode for a file
// eg: tsc app.ts --watch or -w
// nb: quit with Ctrl C

// to watch a whole project (only need to do once)
// eg: tsc --init

// whole project in the directory is now managed by TS
// creates a tsconfig.json file for additional config

// then run tsc -w to auto compile any saved .ts files

// eg: be sure to exclude node_modules, and place these at the bottom of the
// tsconfig.json file, but before the last'}' eg:

// "exclude": [
//   "node_modules"
// ]
