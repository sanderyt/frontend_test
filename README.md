# WisePops Frontend Test

## Requirements

* [Node.js](https://nodejs.org)
* [Yarn](https://yarnpkg.com)

## Basics

WisePops is on a mission to provide marketers with the best tool to create popups.

In this exercise, we'll test your React skill by creating a simple WisePops clone.

The project is already setup in this repository so to start, fork it and when
you are done invite @clmnt-wisepops to collaborate on it.

## Steps

For each step that follows you will have to edit some files already provided,
but doesn't hesitate to go further. Also, it will be great if you split your
steps using branches or commits.

``` sh
# Install dependencies
yarn

# Start API & Dev server
yarn start
```

### 1. Show a static popup on `/demo` page

Go to [Demo.js](src/pages/Demo.js) file and fill `render` method to show
an overlay that contains the message stored in `popup` variable.

This page can be seen on http://localhost:8000/demo

### 2. Fetch popup from a fake REST API

Go to [popup.js](/src/lib/popup.js) file and replace `getPopup` function
body to fetch popup definition from http://localhost:8001/popup instead.

This will imply some change on `Demo` component too.

### 3. Edit the popup on `/popup` page

Go to [Popup.js](/src/pages/Popup.js) file and fill `Popup` component to
be able to edit a Popup definition. For information we use
[json-server](https://github.com/typicode/json-server) as a fake API server
so you will be able to persist change on this API.

### 4. Only show the popup on first visit

On a real use case, we don't want to show the popup each time a user visit
the page so adapts the code to show the popup only on the first visit.

For this one you are free to implement it the way you want.
