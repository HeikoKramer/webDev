# npm notes
Document to store information about interesting packages. <br>

## nodemon
`nodemon` automatically restarts your Node.js server when it detects changes in the directory. <br>
Click the link for the [complete documentation](https://www.npmjs.com/package/nodemon). <br>
If you don't want to install `nodemon` globally, you can as well well install it only as as **dev dependancy**: <br>

```sh
npm -i -D nodemon
```

Add then the following to the *package.json* (replace *server.js* with your server's filename): <br>

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  }
```

Now you can start your server with `npm start`. <br>
When you edit any **.js**, **.mjs** or **.json** file in the repo and **save**, the server will **automatically restart**. <br>

## .ENV
[dotenv](https://github.com/motdotla/dotenv) is a zero-dependency module that loads environment variables from a *.env* file into `process.env`. <br>


## morgan
[morgan](https://www.npmjs.com/package/morgan) is a HTTP request logger middleware for Node.js. <br>

## colors
[colors](https://www.npmjs.com/package/colors) allows you to style console output generated by Node.js. <br>
To apply colors to the output, simple add options to it via dot notation: <br> 

```js
console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.black.bold.bgBrightGreen)

console.log(`MongoDB Connected: ${conn.connection.host}`.black.bold.bgYellow);
```

![node-colors](/images/node-colors.png)


## slugify
[slugify](https://www.npmjs.com/package/slugify) is used to convert any string into a **URL ready** string. <br>

## node-geocoder
[node-geocoder](https://www.npmjs.com/package/node-geocoder) is a library for geocoding and reverse geocoding. <br>
You can specify a provider, parse in an address string and get back full address information + coordinates, etc. <br>

## express-fileupload
[express-fileupload](https://www.npmjs.com/package/express-fileupload) is a simple express middleware for uploading files. <br>

