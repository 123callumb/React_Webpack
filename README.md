# React_Webpack

This is a template for out React Web App.
It has material-ui the library we talked about.
It is also running a webpack dev server, so we can compile the file when we load it up to our server.
It is running the latest versions of babel. Babel makes sure all the javascript code we write is compatible with all browsers.

## SETUP

This template is for the people working on the front end to get used to react, material ui and fetching data. 
So once you have cloned the local repo to your computer. Make sure you have the latest version of node.js installed.
You can get that here: https://nodejs.org/en/
You want to open the repo folder in terminal/command prompt. I prefer to use an ide such as visual studio code which allows you to open the folder and open terminal/command prompt at that location.

Once you have the terminal/cmd open at the folder run the command 

```javascript
npm install
```
This will install all dependencies we are using on our project. It is likely e will be adding to this list during development, but this is a general base. 

## FILES

For development, you will be working in the project folder **src**. Inside of this folder you will find:
**js** - A folder that will contain all javascript files we write.
**css** - A folder that will contain all css we write.
**res** - A folder for resources such as fonts and images.
**App.js** - This is the entry point to our application. All used files will link back to this one.
**index.html** - The html file we are loading our application onto. We shouldn’t have to touch this file.

Please have a look at the files, I have left comments and examples to describe file structures etc.

## RUNNING
For development run the command:

```javascript 
npm start
```
This will run a development server which you can debug and edit on.

### PRODUCTION

You wont have to worry about this for now but if you’d like to generate your application into a static javascript bundle file to throw on a server then you can run:

```javascript
npm run build
```
The output will be in the folder **dist**

### OTHER 
Please msggggg me if there’s any problems setting up the project folder, I’m sure there will be some problems, but I that’s just coding :) 


