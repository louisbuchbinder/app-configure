# App Configure

***View On:***

* [NPM](https://www.npmjs.com/package/app-configure)
* [GITHUB](https://github.com/louisbuchbinder/app-configure)

```bash
npm install --save app-configure
```

### A Simple App Configuration Handler

```javascript
// Simple express example
var express = require('express');
var initial = require('./path/to/initial/handler');
var middleware = require('./path/to/middleware/handler');
var routes = require('./path/to/route/handler');
var app = express();

app.configure = require('app-configure');

app
  .configure(initial)
  .configure(middleware)
  .configure(routes)
  .listen(8000);
```

### In General

## Module: Configure
configure an app-context with a handler

***Parameters***

| Name    | Type     | Description                                     |
|---------|----------|-------------------------------------------------|
| handler | function | method should expect the app context            |
| args    | array    | optional array of args to call with the handler |

```javascript
var app = {
  doThis: function (val) { ... },
  doThat: function (val) { ... },
  configure: require('app-configure')
};

var handler = function (thisValue, thatValue) {
  var app = this;

  app.doThis(thisValue);
  app.doThat(thatValue);
};

app.configure(handler, ['this', 'that']);
```