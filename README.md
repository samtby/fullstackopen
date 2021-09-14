# fullstackopen 2021
*Deep Dive Into Modern Web Development*

#### The course of full stack open 2021

* part0 Fundamentals of Web apps
* part1 Introduction to React
* part2 Communicating with server
* part3 Programming a server with NodeJS and Express
* part4 Testing Express servers, user administration
* part5 Testing React apps
* part6 State management with Redux
* part7 React router, custom hooks, styling app with CSS and webpack
* part8 GraphQL
* part9 TypeScript
* part10 React Native
* part11 CI/CD

# Create React App

```
npx create-react-app myapp {. | myApp}
cd my-app
npm start
```
# Support example apps

* [Application Courses React App ](https://github.com/FullStack-HY/part2-notes/)

# Useful 

* [Thymeleaf used along with Java Spring](https://www.thymeleaf.org/)
* [ECMAScript6-ES6](http://es6-features.org/#BlockScopedVariables)
* [JS Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [create-react-app](https://github.com/facebook/create-react-app)
* [the React-library](https://reactjs.org/docs/getting-started.html)
* [React-component](https://reactjs.org/docs/components-and-props.html)
* [Babel](https://babeljs.io/)
* [XML](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction)
* [Props It is possible to pass data to components using so called props.](https://reactjs.org/docs/components-and-props.html)
* [JSbin](https://jsbin.com/?js,console)
* [ECMAScript compatibility table](http://kangax.github.io/compat-table/es2016plus/)
* [Install JSON Server](https://github.com/typicode/json-server#getting-started)
* [Using Concurrently with json-server and your React App](https://medium.com/@joelazarz/using-concurrently-with-json-server-and-your-react-app-3d07487acc50)
* [React Filter](https://sebhastian.com/react-filter/)
```
npm install -g json-server
```
* Run JSON Server on your app
```
npx json-server --port 3001 --watch db.json
```
* Install json-server as a development dependency (only used during development) by executing the command:
```
npm install json-server --save-dev
```
and making a small addition to the scripts part of the package.json file:

```
"server": "json-server -p3001 --watch db.json"
```
After install j-son server and backend as dependencies in our project.

```
 npm i -D json-server backend
```
In package.json
```
"dev": "concurrently \"npm run start\" \"npm run json-server\""
```
* [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

* [Promise based HTTP client for the browser and node.js](https://www.npmjs.com/package/axios)
Execute command at the root of the project:
```
npm install axios
```
Axios is now included among the other dependencies: in package.json in section dependencies

## Programer's materials

* [single responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle)
* [transitive dependencies ](https://lexi-lambda.github.io/blog/2016/08/24/understanding-the-npm-dependency-model/)
* [semantic versioning](https://docs.npmjs.com/about-semantic-versioning)
## JavaScript materials

* In Js Toutes les valeurs sont vraies sauf si elles sont définies comme fausses (c'est-à-dire, à l'exception de faux, 0, -0, 0n, "", null, undefined et NaN). 
```
//Truthy
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

* [Mozilla's JavaScript Guide](http://kangax.github.io/compat-table/es2016plus)
* [A re-introduction to JavaScript (JS tutorial) ](http://kangax.github.io/compat-table/es2016plus)
* [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)
* [javascript.info](https://github.com/getify/You-Dont-Know-JS)
* [Destructuring](https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0)
* [JS Refactor plugin for VS Code that automatically changes short form arrow functions into their longer form, and vice versa.](https://marketplace.visualstudio.com/items?itemName=cmstead.jsrefactor)
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
* [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
* [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
* [npm script](https://docs.npmjs.com/cli/v7/using-npm/scripts)
# JavaScript Arrays

* [Higher-order functions](https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
* [Map](https://www.youtube.com/watch?v=bCqtb-Z5YGQ&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=3)
* [Reduce basics](https://www.youtube.com/watch?v=Wl98eZpkp-c&t=31s)
* [Index as a key is an anti-pattern](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318)
* [Simplify your JavaScript – Use .map(), .reduce(), and .filter()](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d)


# Web
* [Representational State Transfer (REST)](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)
* [Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.5)

# Express

Express est une infrastructure d'applications Web Node.js minimaliste et flexible qui fournit un ensemble de fonctionnalités robuste pour les applications Web et mobiles. 
route-parameters
```
npm install express
```

On node app
```
const express = require('express')
const app = express()
var bodyParser = require('body-parser');  // A signale  undefine ==>response.json(request.body)
app.use(bodyParser.json()); // A signale  undefine ==>response.json(request.body)
```
*[A signale Part3 - Receiving data ](https://fullstackopen.com/en/part3/node_js_and_express#receiving-data)
## Problems on React 

* [Use Hooks with Array and Object](https://dev.to/brettblox/react-hooks-usestate-43en)
* [never mutate state directly in React!](https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly)
* [lists-and-keys](https://reactjs.org/docs/lists-and-keys.html#keys)

## Debugging React applications

* On application you can use instruction ```debugger``` 

* [React Developer Tools Firefox](https://addons.mozilla.org/fr/firefox/addon/react-devtools/)
* [React Developer Tools Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [The Beginner's Guide to React](https://egghead.io/courses/the-beginner-s-guide-to-react)

# How Debugging React applications on console

## Use
```
console.log('props value is', props)
```
## Never use
```
console.log('props value is' + props)
```
The most important snippet is the one for the console.log() command, for example clog. This can be created like so: 
```
{
  "console.log": {
    "prefix": "clog",
    "body": [
      "console.log('$1')",
    ],
    "description": "Log output to console"
  }
}
```
# Useful libraries

# Useful for VScode

## Protip: Visual Studio Code snippets

 [Instructions for creating snippets can be found here.](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_creating-your-own-snippets)

 [Useful, ready-made snippets can also be found as VS Code plugins, in the marketplace.](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets)
# Problems on Code React 

## [Hoock with Array and Object](https://dev.to/brettblox/react-hooks-usestate-43en)
# Problems encountred

## Update npm

```
npm install -g npm
```

## React-scripts not found

You need for node_module

```
npm install react-scripts --save
```

## Problem can't find module

```
npm cache verify && rm -rf node_modules/ && npm i
```
or 
```
npm i --legacy-peer-deps
```
or
```
npm update --force
```


Node applicaiton:  We can update the dependencies of the project with the command:

```
npm update
```

Node applicaiton: Likewise, if we start working on the project on another computer, we can install all up-to-date dependencies of the project defined in package.json with the command:

```
npm install
```
## Node App auto refresh with wsl2 

 * [nodemon](https://github.com/remy/nodemon) 

```
// Install nodemon globally with Node JS
npm install nodemon -g
```

```
npm install --save-dev nodemon
```

```
// On package.json in   "scripts" section add 
"dev": "nodemon -L index.js", -A signaler
```
## React auto refresh with wsl2 

### Solution n°1

We need to create a .env file at the root of the projet and add this two environnement variable.

```
CHOKIDAR_USEPOLLING=true
FAST_REFRESH=false
```

Add a environnement variable to Key API on .env
REACT_APP_API_KEY=MyKey

Using on React Component
```
const api_key = process.env.REACT_APP_API_KEY
```
### Solution n°2

Put the project inside the wsl directory that can be accessible with \\wsl$ variable inside Windows environement.

## Cypress launch with Windows WSL

Cypress doesn't launch and don't give us any errors.
We need to first download an XServer for windows, for example : https://github.com/ArcticaProject/vcxsrv and configure the shortcut target with -ac arguments.

```
C:/{pathtoexecutable}/xLaunch.exe -ac
```

When Xlaunch is launched, we need to tick the "Disable access control" box.

Next we need to export the DISPLAY environement variable with the wsl2 ip thanks to this script.

```
# set DISPLAY variable to the IP automatically assigned to WSL2
export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2; exit;}'):0.0
```

After that we start the dbus service with this command

```
# Automatically start D-Bus to allow communication with Cypress GUI app
sudo /etc/init.d/dbus start &> /dev/null
```
### Fix warnings in Browser Toolbox.
[hg.mozilla.org](https://hg.mozilla.org/integration/autoland/rev/b800ffcad8496b9124b7d246b15b4443d0be3830)