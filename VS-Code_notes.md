# Visual Studio Code Notes

## Shortcuts
<kbd>CTRL</kbd> <kbd>,</kbd> will open the **setup** menu. <br>
<kbd>CTRL</kbd> <kbd>SHIFT</kbd> <kbd>7</kbd> will out-comment the current line or marked block. <br>
The same shortcut on a out-commented line will un-comment it. <br>
<kbd>CTRL</kbd> <kbd>ENTER</kbd> will open a new line below the cursor, without splitting the line above when the cursor is not at the end of the line. <br>
<kbd>CTRL</kbd> <kbd>SHIFT</kbd> <kbd>ALT</kbd> <kbd>DOWN</kbd> copies (duplicates) the current line to the line below the cursor. <br>
*this shortcut conflicts with a change-workspace shortcut on linux mint* <br>
<kbd>CTRL</kbd> <kbd>LEFT</kbd> or <kbd>CTRL</kbd> <kbd>RIGHT</kbd> will navigate you **word by word** through your code. <br>
<kbd>ALT</kbd> <kbd>UP</kbd> or <kbd>ALT</kbd> <kbd>DOWN</kbd> will move the current line up or down. <br>

## Keywords
If you're for example in an html paragraph and you want to add some **dummy text**, just type `<p>lorem</p>` and <kbd>ENTER</kbd>. <br>

```html
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae adipisci nemo ipsa, molestiae soluta sed repudiandae temporibus ipsum, cumque ducimus sit quas placeat optio. Exercitationem illo blanditiis iure accusamus deleniti.</p>
```

You want to specify the number of inserted words, type for example `<p>lorem10</p>` to insert ten words. <br>

```html
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, nostrum.</p>
```

**Note:** If you want that longer texts break and are not displayed in a single line, you should put **wordWrap** on in the settings. <br>

## General tricks
There is an Emmit method to create multiple items of the same type: <br>
If you want to create **4 list items**, you could enter `li`, let VS-Code create the full tag and copy it 3x. <br>
But you can simply type `li*4` <kbd>ENTER</kbd> and VS-Code will create all items for you at once. <br>

```html
<li></li>
<li></li>
<li></li>
<li></li>
```

<br>
If you **mark** a word you'd like to change and press <kbd>CTRL</kbd> <kbd>d</kbd>, VS-Code will select the next appearance of that word for you. <br>
Press <kbd>CTRL</kbd> <kbd>d</kbd> again to select a third pattern-match, and again, and again … till you've all the matches selected you'd like to change. <br>
You will edit all that selected matches at once then. Press <kbd>ESC</kbd> to exit that multi-edit mode. <br>

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

### add an Id
There is a shortcut, if you'd like to create a div with an id, like this: `<div id="about"></div>`. <br>
You can use Emmit to create that tag with the id for you, just type `div#about` and press <kbd>ENTER</kbd>. <br>
VS-Code will create the full tag for you. <br>
This will work with any tag, but if it's a **div**, you could actually only type `#about` and press <kbd>ENTER</kbd> for the same result. <br>

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



