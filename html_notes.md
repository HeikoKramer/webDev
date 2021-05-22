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

![typography](/images/04_typography.png)

## Links and images
### Links
A **link** is represented with an `<a>` tag. Every link needs an **href** attribute – that's the location, where you're linking to. <br>
An `<a>` is an **inline** element. So if you want to show two links under each other, you'll need a `<br>` tag in between them. <br>
Or you could wrap them into different paragraphs, which are **block level** elements. <br>
The **target** attribute specifies where the link is opened. [Full option list](https://www.w3schools.com/tags/att_a_target.asp). <br>
If you start your **href** content with a **/** – it's referencing a file within the same directory as the current page (internal link). <br>
### Images
The `<img src="" alt="">` specifies an **image**. <br>
**src** stands for **source** (location of an image). <br>
**alt** is the **alternative text** that will show if the image is not there or can't be shown due to some reason. <br>
You can set the **width** and **height** in html, but it is usually better to do that in css. <br>
The **heigth** will auto-adjust when the **width** is set. <br>
You can link to **internal** or **external** images, just the same way as with any other link. <br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Links and Images</title>
</head>
<body>
  <!-- External link -->
  <p>
    <a href="http://google.com">Click for Google</a>
  </p>
  <p>
    <a href="http://google.com" target="_blank">Click for Google</a>
  </p>

  <!-- Internal link -->
  <p>
    <a href="/04_typography.html">Typography</a>
  </p>

  <!-- Local image -->
  <img src="/images/sample.png" alt="My Image" width="200">
  <br>
  <!-- Remote image -->
  <img src="https://source.unsplash.com/200x150/?datacenter" alt="My Image2">
</body>
</html>
```

![links and images](/images/05_links_and_images.png)

## List and tables
### Lists
An **unordered list** is wrapped in `<ul></ul>` tags and contains **list items** wrapped in `<li></li>` tags. <br>
You can set a list-style with the **style** attribute, but usually you would do that with css. <br>
An **ordered list** works as the unordered equivalent, but is wrapped in `<ol></ol>` tags. <br>
The default **type** of an ordered list is a numbered list, 1., 2., 3., … <br>
You can change the type of the list with the **type** attribute. <br>

* type="1"
  * 1.
  * 2.
  * 3.
* type="A"
  * A.
  * B.
  * C.
* type="a"
  * a.
  * b.
  * c.
* type="I"
  * I.
  * II.
  * III.
* type="i"
  * i.
  * ii.
  * iii.

You can put a list inside a list – which is called **nested list**. <br>
The nested list elements will be indented. <br>

### Tables
Tables are used for tabular data. They are wrapped into `<table></table>` tags. <br>
A table can contain a **header**, a **body** and a **footer**. <br>
The **header** contains the table **head cells** (`<th></th>`), while the **body** contains the **standard cells** (`<td></td>`). <br>
Head and standard cells are wrapped in table row tags (`<tr></tr>`). <br>
Although it is recommended to use css, the **style** attribute allows to adjust table attributes like the **width**. <br>

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
  <!-- Unordered lists -->
  <ul style="list-style: square">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>

  <!-- Ordered list -->
  <ol type="A">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ol>

  <!-- Nested list -->
  <ul>
    <li>Item 1</li>
    <li>Item 2
      <ul>
        <li>Nested Item 1</li>
        <li>Nested Item 2</li>
      </ul>
    </li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>

  <!-- Tables -->
  <table style="width: 600px">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>jdoe@gmail.com</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>Doe</td>
        <td>j.doe@gmail.com</td>
      </tr>
      <tr>
      <td>Nathan</td>
      <td>Poe</td>
      <td>npoe@gmail.com</td>
    </tr>
    </tbody>
  </table>
</body>
</html>
```

![Lists and Tables](/images/06_lists_tables.png)

## Forms & input
### Forms
Forms on a website are displayed with css and html – but the processing of the input data happens in the back end, with some sort of programming language. <br>
<br>
A **form** is wrapped in `<form></form>` tags. <br>
The **action** attribute specifies where the form's content is handed over to. <br>
You can separate multiple form items with `<div></div` tags (**division**). <br>
### Labels & input
The `<lable></lable>` tags can be used to describe **input** fields, which are presented by an `<input>` tag. <br>
The **for** attribute of the **lable** should match with the **id** attribute of the **input** to link those two elements together. <br>
The default type for an **input** field is **text**, but you can specify other types like **email**. <br>
That is a html build in (client-side) data type validation method. [List of input types](https://www.w3schools.com/html/html_form_input_types.asp) <br>
To display label and input field in separated lines without css, put `<br>` tags between them. <br>
An input field can have a **pre-populated** value, when you add the **value** attribute to it's tag. <br>
The **placeholder** attribute will not add a value to a field, but **display an example**, which will disappear when you enter a value. <br> 
### Text area
There is an own tag type (`<textarea></textarea>`) for lager text fields. <br>
The **textarea** comes with a closing tab, the size of the field can be specified without css, with the **cols** and **rows** attributes. <br>
### Select
The `<select></select>` tabs are the wrapper for a basic **pick list**. <br>
Such a pick list can contain multiple `<option></option>` tags – pick list values from which you can choose on the page. <br>
If you want to pre-select a certain option, you can add the **selected** attribute to the option tag. <br>
### Numbers
A **number** field doesn't come with an own tag, it is just an other type attribute of the `<input>` tag. <br>
The number input field comes by default with some arrow buttons, with which you can increase and decrease the number. <br>
### Dates
The `type="date"` in an **input tag** will add a little calendar to your page, from which you can pick a date. <br>
### Radio 
`type="radio"` will provide you a **selectable** input. You don't need to put a label to display a name, just add the name after the tag. <br>
You can add multiple radio inputs. If you want to have one pre-selected, add the **checked** attribute to the input tag. <br>
### Checkbox
The `type="checkbox"` is quite similar to the radio type, with the major difference, that you can **select multiple** values. <br>
You can multi-select those values manually, but also pre-check multiple items with the **checked** attribute. <br>
### Submit button
There are two ways to add a submit button: <br>
* add an input tag of `type="submit"`
* add a button tag of `type="submit"`
### Reset button
You can add a **button tag** of `type="reset"` which will **reset** all entered content when pressed. <br>
Only the hard-coded, pre-populated values will remain set when resetting the page like this. <br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Forms and input</title>
</head>
<body>
  <form action="process.php">
    <!-- Text -->
    <div>
      <label for="name">Name</label><br>
      <input type="text" id="name" value="John Doe">
    </div>
    <br>
    <!-- Email -->
    <div>
      <label for="email">Email</label><br>
      <input type="email" name="email" id="email" placeholder="demo@example.com">
    </div>
    <br>
    <!-- Textarea -->
    <div>
      <label for="message">Message</label><br>
      <textarea name="message" id="message" cols="50" rows="5"></textarea>
    </div>
    <br>
    <!-- Select -->
    <div>
      <label for="sex">Sex</label><br>
      <select name="sex" id="sex">
        <option value="male">Male</option>
        <option value="female" selected>Female</option>
        <option value="other">Other</option>
      </select>
    </div>
    <br>
    <!-- Number -->
    <div>
      <label for="age">Age</label><br>
      <input type="number" name="age" id="age">
    </div>
    <br>
    <!-- Date -->
    <div>
      <label for="birthdate">Birthdate</label><br>
      <input type="date" name="birthdate" id="birthdate">
    </div>
    <br>
    <!-- Radio -->
    <div>
      <label for="membership">Membership</label><br>
      <input type="radio" name="membership" value="simple" id="membership" > Simple
      <input type="radio" name="membership" value="standard" id="membership" checked> Standard
      <input type="radio" name="membership" value="super" id="membership"> Super
    </div>
    <br>
    <!-- Checkbox -->
    <div>
      <label for="likes">I like</label><br>
      <input type="checkbox" name="likes" value="bike" id="likes" checked> Bike
      <input type="checkbox" name="likes" value="car" id="likes" checked> Car
      <input type="checkbox" name="likes" value="boat" id="likes"> Boat
    </div>
    <br>
    <div>
      <!-- Input submit -->
      <input type="submit" value="Submit">
      <br> <br>
      <!-- Button submit -->
      <button type="submit">Submit</button>
      <br> <br>
      <!-- Button reset -->
      <button type="reset">Reset</button>
    </div>
  </form>
</body>
</html>
```

![Forms and Inputs](/images/07_forms_inputs.png)

