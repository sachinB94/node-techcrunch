# node-9gag

*A simple API for accessing techcrunch news*
*(Built on ES6. Compiled by babel)*

## Installation

npm install --save node-techcrunch

##Usage

```js
var tc = require('node-techcrunch')
```

- Get news name by tag name

```js
tc.crunchTag('tag')
  .then(function(res) {
    // success
    // res = [
    //   {
    //     title: ,
    //     link: ,
    //     tag: ,
    //     author: ,
    //     timestamp: ,
    //     excerpt:
    //   }
    // ]
  })
  .catch(function(err) {
    // error
  });
```

- Get a news as JSON from its link

```js
tc.crunchLink('link')
  .then(function(res) {
    // success
    // res = {
    //   title: ,
    //   next: {
    //     title: ,
    //     link:
    //   },
    //   text:
    // }
  })
  .catch(function(err) {
    // error
  });
```

- Get a latest single news as JSON

```js
tc.crunchLast()
  .then(function(res) {
    // success
    // res = {
    //   title: ,
    //   next: {
    //     title: ,
    //     link:
    //   },
    //   text:
    // }
  })
  .catch(function(err) {
    // error
  });
```