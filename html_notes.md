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

## Meta Tags
Meta tags are tags or snippets, that describe a page's content. <br>
They don't appear in the body of the web page. <br>
<br>
When you create a new html file with VS-Code Emmet, it's going to create three default **meta tags**. <br>
It also adds a **lang** attribute – which is not mandatory, but it describes the language of the page. <br>
The attributes of a tag describe its properties. The meta tags are identical except for their attributes. <br>

* charset – describes the character encoding of the page
* the **viewport** tag describes the responsiveness to different screen sizes
* http-equiv – describes browser comparability

<br>
The **title** is not only displayed in the browser tab, it is an very important for search engines, as it will show up there as the link to your page. <br>
The additional text displayed in the search engine result page is the html **description**. <br>
Another search engine related tag is the **keywords** tag. It's an other place for a content description, which is better readable for a crawler. <br>
If you don't want your page to show up in a search result, use the **robots** tag. <br>
**NOINDEX** will ensure your page doesn't get listed, **NOFOLLOW** specifies that no links within the page get followed and listed. <br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta name="description" content="This is my website description.">
  <meta name="keywords" content="web dev, Salesforce, LWC, JavaScript, html, css">
  <meta name="robots" content="NOINDEX, NOFOLLOW">
  <title>Meta Tags</title>
</head>
<body>
  
</body>
</html>
```

## Headings, Paragraphs, Typography
### Headings
The `<H1>` to `<H6>` tags are the heading tags. **H1** is the largest, **H6** is the smallest heading. <br>
It's good practice to have only one **H1** heading per page. <br>
It is like the **tilte** of the page and might play a role in the search engine interpretation of you page. <br>
## Formating
Everything within a `<strong>something</strong>` tag is gonna be displayed **bold**. <br>
The **emphasis** tag `<em>something</em>` is going to display everything between **italic**. <br>
To reflect a **line break** in the browser, you need to add a self-closing `<br>` tag. <br> 
The **horizontal rule** tag `<hr>` will insert a line across the screen. <br>
The `<del>something</del>` tag acts like a **strike through**. <br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Headings, Paragraphs, Typography</title>
</head>
<body>
  <!-- Headings -->
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>

  <!-- Paragraph -->
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odio necessitatibus veniam in enim fuga odit! <strong>Facilis mollitia modi commodi aut expedita saepe delectus</strong> repellat deserunt cumque dolorem quidem, dicta voluptatem natus, excepturi assumenda sit possimus quis numquam adipisci, quam enim ducimus recusandae. <em>Ex itaque voluptatum, dignissimos impedit quibusdam pariatur assumenda debitis accusantium nostrum eligendi tempora, voluptatem ut.
  <!-- Line Break -->
  <br>
  <br>
  </em> Iure quae, officia enim quis nihil sed in eligendi dolore, repudiandae natus, tempore magnam laborum minima quibusdam vel voluptate tempora nemo sint blanditiis. 
  <!-- Horizontal Rule -->
  <hr>
  Itaque minima error magnam quae, <del>explicabo accusamus</del> soluta. Aliquam, tenetur alias! Rem, modi esse nostrum quidem ex laborum eligendi.</p>
</body>
</html>
```

