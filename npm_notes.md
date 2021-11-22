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
