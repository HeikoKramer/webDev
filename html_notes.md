# HTML Notes
Those notes were taken wile watching Brad Traversy's [Modern HTML and CSS from the Beginning](https://subscription.packtpub.com/video/web-development/9781838822828/113179/113180/welcome-to-the-course) on packthub.com – a course that I can highly recommend, it's comprehensive, beginner friendly and hands-on focused, with a lot of really cool practice examples. <br>

## Table of contents:

- [HTML Notes](#html-notes)
  * [Tag Syntax](#tag-syntax)
  * [Doctype & Basic Layout](#doctype-basic-layout)
    + [\<head\>](#head)
    + [\<body\>](#body)
    + [Comments](#comments)
  * [Meta Tags](#meta-tags)
  * [Headings, Paragraphs, Typography](#headings-paragraphs-typography)
    + [Headings](#headings)
  * [Formating](#formating)
  * [Links and images](#links-and-images)
    + [Links](#links)
    + [Images](#images)
  * [List and tables](#list-and-tables)
    + [Lists](#lists)
    + [Tables](#tables)
  * [Forms & input](#forms--input)
    + [Forms](#forms)
    + [Labels & input](#labels--input)
    + [Text area](#text-area)
    + [Select](#select)
    + [Numbers](#numbers)
    + [Dates](#dates)
    + [Radio](#radio)
    + [Checkbox](#checkbox)
    + [Submit button](#submit-button)
    + [Reset button](#reset-button)
  * [Inline & block level elements](#inline--block-level-elements)
  * [Divs & spans, classes & ids](#divs--spans-classes--ids)
    + [Divs & spans](#divs--spans)
  * [Entities](#entities)
    + [Non-breaking space](#non-breaking-space)
    + [Greater than and less than](#greater-than-and-less-than)
    + [Computer code](#computer-code)
  * [Html semantic tags](#html-semantic-tags)
    + [Header & footer](#header--footer)

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

## Inline & block level elements
Full list of **block** & **inline** elements: [w3school](https://www.w3schools.com/html/html_blocks.asp) <br>
The difference between a block and an inline level element is, that … <br>
* a block level element will span a 100% width of the page
  * the next thing you put on the page will be on the next line 
* an inline element takes only the space it needs or you give it
  * the next element will be placed right after it
<br>
In the example below, we are using the **style** tag to visualize the span of each element. <br>
You can see those three **paragraphs** will be placed under each other as they are **block elements**. <br>
Even the one word paragraph **spans the full width** of the page. <br> 
Those two **links** on the other hands are **inline elements** and get placed next to each other although written under each other in code. <br>
The **strong** tag is an **inline element within a block element** – it marks some text within the paragraph to be displayed bold. <br>

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
  <!-- Examples for block level elements -->
  <!-- Paragraphs -->
  <p style="border:2px green solid">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium earum sint deserunt iure quo explicabo doloribus enim in. Obcaecati, libero. Esse hic ratione et aliquid, beatae consequuntur totam porro veniam!</p>
  <p style="border:2px green solid">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati voluptates provident numquam quidem quod sed libero corporis, et autem rerum.</p>
  <p style="border:2px green solid">Lorem.</p>

  <!-- Unordered lists -->
  <ul style="border:2px green solid">
    <li style="border:2px green solid">Item 1</li>
    <li style="border:2px green solid">Item 2</li>
    <li style="border:2px green solid">Item 3</li>
  </ul>

  <!-- Examples for inline elements -->
  <!-- Links -->
  <a href="#" style="border:2px red solid">Link 1</a>
  <a href="#" style="border:2px red solid">Link 2</a>

  <!-- Stylings (inline within block element) -->
  <p style="border:2px green solid">Lorem ipsum dolor sit amet consectetur adipisicing elit. <strong style="border:2px red solid" >Obcaecati dolorem sint molestiae quam</strong> deleniti adipisci architecto laborum labore voluptates saepe!</p>


</body>
</html>
```

![block vs inline](/images/08_block_inline.png)

## Divs & spans, classes & ids
Ids and classes can be used to style your html with css. <br>
An id should be unique – if you use `id="main-header` in a div, it should not appear anywhere else in the html file. <br>
A class can be repeated and is therefor useful if you want to re-use styling schemes on multiple elements. <br>
In the example below, we've assigned the same class (`.card`) to the about and contact div. <br>
### Divs & spans
In the example you see the **div** and the **span** behave different on the text block. <br>
The div is a **block element** and is therefore spanning the complete line, while the **span** is an **inline element** which is adjusting to its content. <br>
For the most parts you gonna use **divs**, but if you need to work **inline**, **span** is the right choice. <br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .card {
      border: 1px solid #ccc;
      background: #f4f4f4;
      padding: 20px;
      margin-bottom: 10px;
    }
    .enhance {
      color: yellow;
      background-color: black;
    }
  </style>
</head>
<body>
  <div id="main-header">
    <h1>My Website</h1>
    <p>A site about me</p>
  </div>
  <ul id="main-nav">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <div id="about" class="card">
    <h3>About</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <div class="enhance">Facere amet delectus explicabo aliquam eos in veritatis ut</div>, sint corporis, voluptas repellat quos iusto obcaecati reiciendis ea commodi nisi error! <span class="enhance">mollitia maxime molestiae et, a nulla fugit repellendus ex numquam!</span></p>
  </div>
  <div id="contact" class="card">
    <h3>Contact Me</h3>
    <ul>
      <li>Address: 50 Somestreet, Demostate DS</li>
      <li>Phone: (123) 456-7891</li>
      <li>Email: some@email.demo</li>
    </ul>
  </div>
  <div id="footer">
    <p>Copyright 2019</p>
  </div>
</body>
</html>
```

![ids and classes](/images/09_id_classes.png)

## Entities
Html entities are a way to display html reserved characters in the browser. <br>
A list of html entities can be found on the [w3schools website](https://www.w3schools.com/html/html_entities.asp). <br>
### Non-breaking space
Have a look at the example below. You can't just use a number of spaces in a html paragraph tu move a word from another. <br>
To at more than one space between two words, you gonna need to place the **non-breaking space** entity there. <br>
This comes with some extra functionality: A non-breaking space will not break into a new line, the separated words will stick together. <br>
### Greater than and less than
You can place a greater or less than sign in a html paragraph and maybe you're lucky and it shows up correctly in the browser. <br>
But some browsers might have issues with those signs and interpret them for open html tags. <br>
So instead of writing `<p>5 > 2</p`> you use the **greather than entity** `&gt;`. <br>
There is also a **less than entity**, it is `&lt;` <br>
Additional to the text entities as **gt** and **lt**, there are number entities which reflect the same signs. <br>
For **greater than** it is `&#62;`, for less than it is `&#60;`. <br>
Both version will render the absolutely same thing in the browser. <br>
There are all kind of entities as you can briefly see in the example below. <br>
### Computer code
If you want to display any sort of **computer code** you can use a **code block** between `<code></code>` tags. <br>
If you need to add any sort of tag in the code block, you'll have to use the greater and less than entity to display that snipped correct. <br>
The `<kbd>Enter</kbd>` tags will display their content like a key on the **keyboard**. <br>

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
  <!-- Non breaking space -->
  <p>Hello, my name is    Heiko</p>
  <p>Hello, my name is &nbsp; &nbsp; &nbsp; Heiko</p>
  <!-- Greater than and less than -->
  <p>5 &gt; 2</p>
  <p>5 &#62; 2</p>
  <p>1 &lt; 2</p>
  <p>1 &#60; 2</p>
  <!-- Copyright -->
  <p>&copy;</p>
  <p>&reg;</p>
  <!-- Currency -->
  <p>&cent;</p>
  <p>&pound;</p>
  <p>&yen;</p>
  <p>&euro;</p>
  <!-- Suits -->
  <p>&spades;</p>
  <p>&hearts;</p>
  <p>&clubs;</p>
  <p>&diams;</p>
  <!-- Computer code -->
  <code>
    &lt;?php echo 'Hello' ?&gt
  </code>
  <p>Save the file with <kbd>Ctrl</kbd> <kbd>s</kbd></p>
</body>
</html>
```

![Entities](/images/10_entities.png)

## Html semantic tags
Before html 5 we had to put everything in divs – with version 5 there came semantic tags. <br>
Semantic tags categorize their content with their name. <br> 
### Header & footer
The `<header></header>` goes usually at the top, the `<footer></footer>` usually goes at the bottom. <br>
The **header** might contain a logo, the site's navigation or a search bar. <br>
For **navigation** there is also a `<nav></nav>` tag. <br>
The `<main></main>` tag could be wrapped around the **main content** of the page. <br>
`<section></section>` can be used for something like **about** or **contact**, where a separation from other content makes sense. <br>
An **article** (`<article></article>`) is for medial content like a **blog-post**. <br>
`<aside></aside>` is for **side-bar** content or just something that is not whiting the main focus of the page. <br>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>HTML5 Semantic Tags</title>
    <style>
      * {
        box-sizing: border-box;
      }

      ul {
        padding: 0;
        list-style: none;
      }

      body {
        font-family: Arial, Helvetica, sans-serif;
        color: #333;
        line-height: 1.4;
      }

      #header {
        margin-bottom: 15px;
        background: #333;
        color: #fff;
        padding: 10px;
      }

      #main {
        float: left;
        width: 69%;
      }

      #sidebar {
        float: right;
        width: 29%;
      }

      .clr {
        clear: both;
      }

      #footer {
        background: #333;
        color: #fff;
        padding: 10px;
      }

      .text-center {
        display: block;
        text-align: center;
      }

      .card {
        border: 1px solid #ddd;
        background: #f4f4f4;
        padding: 20px;
        margin-bottom: 10px;
      }
    </style>
  </head>
  <body>
    <!-- Header -->
    <header id="header" class="card">
      <h1>My Website</h1>
      <p>Just Another Website</p>
    </header>

    <!-- Main Content (left) -->
    <main id="main">
      <!-- Welcome Section -->
      <header id="welcome" class="card">
        <h2>Welcome To Our Website</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          cupiditate itaque possimus numquam corporis odit deserunt voluptas
          repellat ad ex earum magnam mollitia magni eaque nisi, excepturi nam
          temporibus! Sed. <br />
          <a href="#" class="text-center">Click For More</a>
        </p>
      </header>
      <!-- Blog Section -->
      <section id="blog">
        <h2>From Our Blog</h2>
        <!-- Article One -->
        <article class="article">
          <h3>Article One</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            veniam adipisci necessitatibus quia quisquam? Eligendi vitae quia
            totam accusantium officiis!
          </p>
        </article>
        <!-- Article Two -->
        <article class="article">
          <h3>Article Two</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            veniam adipisci necessitatibus quia quisquam? Eligendi vitae quia
            totam accusantium officiis!
          </p>
        </article>
      </section>
    </main>

    <!-- Sidebar (right) -->
    <aside id="sidebar" class="card">
      <h3>Navigation</h3>
      <!-- Navigation -->
    <nav>
      <ul id="main-nav">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
      <hr />
      <h3>Contact Us</h3>
      <ul>
        <li><strong>Address:</strong> 50 Main st, Boston MA</li>
        <li><strong>Phone:</strong> (555) 555-5555</li>
        <li><strong>Email:</strong> me@somethingcool.come</li>
      </ul>
    </aside>

    <div class="clr"></div>

    <!-- Footer -->
    <footer id="footer">
      <p class="text-center">Copyright &copy; My Website 2019</p>
    </footer>
  </body>
</html>
```

![html5 semantics](/images/11_html5_semantics.png)
