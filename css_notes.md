# CSS
## Implementing CSS
Comments in css look like this: `/* comment here */` <br>
### Inline CSS & SoC  
Inline css is something you should generally avoid. <br>
The established web development design principle is **separation of concerns (SoC)**. <br>
You should separate the markup, styling and script part of you page. <br>
A separation of those difference elements, will increase the **readability** and make it much easier to **apply changes** and to **maintain** your code. <br>
But inline css is possible, in the example below we've used it on the **heading one**. <br>
### Internal CSS
Internal css is still **on the same page**, but it is **separated from the html**. <br>
You can wrap internal css within `<style></style>` tags withing the page's `<header></header>` tags. <br>
The **element name** can be used to assign a styling to that element. <br>
In the example below, we change the color of the **heading two** to green with internal css. <br>
Let's take a look at the **css syntax**: <br>
![css syntax](/images/css_syntax.png)

The selector from the image selects an **a** tag. We have done this with a **h2** tag in the example. <br>
The selector works with 
* tags
* ids
* classes 
* sudo selectors

The **declaration start** and the **declaration end** wrap the actual styling. <br>
The **property** specifies **what** you'd like to style. <br>
The **value** specifies **how** the specified property is going to be styled. <br>
The **seperator** between **property** and **value** is a `:`. <br>
Each **prop-value-pair** should **end** with a `;` – a **declaration** can contain multiple of those pairs. <br>
### External CSS
External css means that you've a separate file which stores all your css. <br>
**style.css** is a common name for such a file, but you could have multiple style files with different names. <br>
The style file can be saved in a separate folder. The html file won't adapt the styles specified in such a file automatically. <br>
We need a `<link>` tag of type `rel="stylesheet"` so our html can recognize the css file. <br>
You need to specify the location and name of the css file in the link. `<link rel="stylesheet" href="css/style.css">` <br>
In our example we have changed the color of **heading three** to blue with **external css**. <br>
Out of those three options, **external css** is the preferred method to style a html page. <br>
<br>
**NOTE:** We will use **internal css** for the examples within this notes, to have css and html visible in one file. <br>

#### HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/style.css">

  <title>Implementing CSS</title>
  
  <!-- Internal CSS -->
  <style>
    /* <-- comments in CSS look like this --> */
    h2 {
      color:seagreen;
    }
  </style>

</head>
<body>

  <!-- Inline CSS -->
  <h1 style="color: red">Heading One</h1>

  <h2>Heading Two</h2>
  <h3>Heading Three</h3>
</body>
</html>
```

#### CSS file:

```css
h3 {
  color: blue;
}
```

#### Browser view:
![css basics](/images/01_basics.png)

## CSS Selectors
If you put the selector `h2` in your css – all **h2 headings** will be styled as specified in css. <br>
You can restrict the h2 headings adopting that style when you specify an **id**. <br>
`<h2 id="green-heading">` this html heading has an id **green-heading**. <br>
Ad an id with a **hash** sign (**#**) to the css selector, to assign that styling only to matching elements with that particular id. <br> 

```css
    h2#green-heading {
      color: seagreen;
    }
```

You can **only use the id** as a css selector: `#green-heading { color: seagreen; }`. <br>
In that case you can assign that styling to all **every html element with that id**, not only to h2 headings. <br>
But as **ids should always be unique**, it would make much more sense to put such multi-assign styling in a class. <br>
Html: `<h2 class"green-heading">`, css: `.green-heading { color: seagreen; }`. <br>
To **reference an id** in css, use a **hash** (**#**). To **reference a class**, use a **dot** (**.**). <br>
### Naming conventions
You should avoid to use something related to the styling like **green-heading**. <br>
If you're assigning such a class to multiple elements, because it is green is companies branding, better use something like **primary-heading**. <br>
If the branding changes later to an other color, you can easily change the styling, but maybe not that easy it's name, which is potentially used in multiple files. <br>
So think about the future and try not to use descriptive elements in the name that can change later. <br>
### Multi-selectors
You can specify a styling for more than one selector at once. <br>
Just separate the selectors **by comma** to add multiple selectors to your styling. <br>
You can combine class, id or html element names, no problem. <br>
### Nested selectors
If you want your styling to be adapted by all the paragraphs of the div with the **welcome** id: <br>

```css
    #welcome p {
      font-size: 22px;
    }
```

Just put a space between the first and the second element – if you would place a comma there, all paragraphs would be styled (multi-selector). <br>
### Element styling
You can apply styling to a whole element, for example the `<body>` tag. <br>
In case of the **body**, that would basically mean to the whole page. <br>
Here some examples for [html5 semantic tags](https://github.com/HeikoKramer/webDev/blob/main/html_notes.md#html-semantic-tags) which are a good use case for element styling. <br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Selectors</title>
  <style>
    /* Element styling */
    body {
      background-color: #333;;
    }
    /* . is for classes */
    .primary-heading {
      color: seagreen;
    }

    /* # is for ids */
    #welcome {
      background-color: #f3f3f3;
    }

    /* Multiple selectors */
    #welcome, #about, .primary-heading {
      border: 1px solid #ccc;
      padding: 10px;
      margin-bottom: 5px;
    }

    /* Nested selectors */
    #welcome p {
      font-size: 22px;
    }

    #about {
      color: seashell;
    }
  </style>
</head>
<body>
  <div id="welcome">
    <h2 class="primary-heading">Welcome</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quisquam doloribus impedit aperiam. Quas, iusto. Tenetur repellat magni neque veritatis?</p>
  </div>
  <div id="about">
    <h2>About</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est corporis incidunt voluptatibus laudantium eos fuga vel deleniti temporibus ipsam molestias?</p>
  </div>
</body>
</html>
```

![css selectors](/images/02_selectors.png)

## Fonts
### Web safe fonts
There are millions of font out there, ready to be used in your web-page. <br>
**BUT** – if the font is not under the [web safe fonts](https://www.w3schools.com/cssref/css_websafe_fonts.asp) you should include the actual **font files** within your web page, just like a css file. <br>
You can also link to a font file remotely. A popular service for **remote fonts** is [google fonts](https://fonts.google.com/). <br>

### font-family
The `font-family` takes a whole **font stack** and makes it available for the styling of the element where it is added. <br>
A **font stack** is a set of fonts, with a prefered font and multiple fall-back fonts specified. <br>
`font-family: Arial, Helvetica, sans-serif;` is going to look for Arial, then Helvetica, then sans-serif. <br>
<br>
You can **import** fonts from google fonts or include their **font links** as shown in the example below. <br>
The appropriate **font-family** will then be available for use in your css. <br>

#### Google fonts link
![link side bar](/images/google-fonts-links.png)

### font-size
The default font size of the `<html></html>` tag is **16px**. <br>
A `font-size: 22px;` css styling for the body tag will increase the font size appropriate for the whole page. <br> 
### line-height
The default height is 1em I guess … `line-height: 1.4em;` spreads the space between two lines a bit. <br>
As higher as you set the **line height** as much **space between lines** you get. <br>

--> weiter bei -5:01

```html

```


