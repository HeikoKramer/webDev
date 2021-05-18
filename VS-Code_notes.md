# Visual Studio Code Notes

## Shortcuts
<kbd>CTRL</kbd> <kbd>,</kbd> will open the **setup** menu. <br>
<kbd>CTRL</kbd> <kbd>SHIFT</kbd> <kbd>7</kbd> will out-comment the current line or marked block. <br>
The same shortcut on a out-commented line will un-comment it. <br>

## HTML specific
If you're typing just a <kbd>!</kbd> and press <kbd>ENTER</kbd>, VS Code will add a whole set of default HTML tags. <br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

## Extensions
### Live Server
An useful extension for working with HTML files is **Live Server**. <br>
After installing the extension you can simply right-click your document an press *Open with Live Server* to view your page in the browser. <br>
Instead of right-clicking and selecting the option, you can press <kbd>ALT</kbd> <kbd>ALT gr</kbd> <kbd>l</kbd> <kbd>o</kbd> all together. <br>
The address shown in the browser will look like this: `http://127.0.0.1:5500/02.live_server.html` <br>
Live server will provide a loop back address to your locale host on port 5500. <br>
Of course you could just open the HTML file with the browser, the address would then look like this: <br>
`file:///home/heiko/repos/github/webDev/htmlsandbox/02.live_server.html` <br>
An advantage of Live Server is that it automatically reloads the page when you save it in VS-Code. <br>
The manually opened HTML file has also to be refreshed manually to display the latest changes. <br> 
To **stop the server** you can click the **Port: 5500** symbol in the lower right corner of VS Code, right click and press *Stop Live Server* or press <kbd>ALT</kbd> <kbd>ALT      gr</kbd> <kbd>l</kbd> <kbd>c</kbd>. <br>


