# HTML Notes

## Tag Syntax
A tag is an element surrounded in angle brackets. <br>
The most HTML elements, like a **header** or a **paragraph**, have a **start & end tag**. <br>

```html
<h1>Hello</h1>
<p>Welcome to my website</p>
```

Some tags, like the **line break** close themselves (remnant of XHTML). <br>
Those are called **self closing tags**. <br>

```html
<br>      <!-- Valid in HTML5 -->
<br / >   <!-- Valid in HTML5 & XHTML -->
```

## Doctype & Basic Layout
The **doctype** declaration must be the first thing in your HTML document. <br>
It tells the browser what type of document it is. <br>
w3school: [HTML Doctype](https://www.w3schools.com/tags/ref_html_dtd.asp) and valid elements in different docktypes. <br>
The next tag is the `<html>` tag. Inside of it, we have the `<head>` and the `<body>` tag. <br>
**head** and **body** are indented – those are children of the **html** tag. <br>
The head and body tags are very different: <br>
### \<head\>
This tag is for things like meta tags, if you want to associate keyword with you page. <br>
It is basically just information about your page. It doesn't actually display in the body of the browser. <br>
One thing that should definitely be put in the head is the **title**. <br>
The title won't show in the browser body, but in the **browser tab**. <br>
### \<body\>
Everything placed within the **body tags** will show up in the **browser body**. <br>
In our example, it's a **headline** (`<h1>`) and a **paragraph** (`<p>`) which are displayed when opening the page. <br>
### Comments
Comments in HTML are placed within such a tag: `<!-- comment -->`. <br>
They won't show in the browser body, in the source code. <br>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <!-- This is a comment -->
    <h1>My Website</h1>
    <p>This is not my first website</p>   
  </body>
</html>
```

