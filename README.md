# Easy Shopping

> Easy Shopping is a e-commerce interface for a shopping site like souq-amazon.

## What did I used ?

-   ExpressJS
-   Sqlite
-   ReactJs
-   Material Ui

### Express Server

contains two parts

-   Feed  
     all it's purpose to scrap graphql api from a website I found somewhere in google and it called feed because it feeds data to database.
-   Apis  
     server data for the reactjs application from sqlite.

### ReactJs

contains 2 main folder

-   Pages  
     which contains all Route pages that used by react-router-dom.
-   Components
    contains the component (pieces) that builds up the pages and the whole application.

### How To run application ?

1. first we need to feed database
2. build the front end
3. run the server

```js
// build will take time / internet
$ npm run build

// should fire on port 8080
$ npm run start
```

#### Credits

-   [Mohamed Elmdary](https://github.com/MohamedElmdary)
-   [Facebook](https://www.facebook.com/mohamed.rabie.5439087/)
