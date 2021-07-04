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
### font-weight & font-style

* font-weight: how bold the text will be displayed
* fint-style: normal, italic, etc. …

The technique shown in the example is not only applying to **font-weight** or **font-style**, but explains why to prefer css styling over html tags. <br>
We could bold face the text with the html `<b>` or `<strong>` tab, but in css we have much more options on **how bold** to set the text. <br>
Furthermore we have the option to apply **weight** or **style** to different span elements, depending on the **id of their div**. <br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap" rel="stylesheet">
  <title>Fonts</title>
  <style>
    body {
      /* Font settings */
      font-family: 'Ubuntu Mono', monospace;
      font-size: 22px;
      line-height: 1.4;

      /* Color settings */
      background-color: #49483E;
      color: #FFFFFF;
    }

    #welcome p span {
      font-weight: bold;
    }

    #about p span {
      font-style: italic;
    }

    h2 {
      /* Color settings */
      color: #a6e22e;
    }
  </style>
</head>
<body>
  <div id="welcome">
    <h2 class="primary-heading">Welcome</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span>Beatae quisquam doloribus impedit aperiam.</span> Quas, iusto. Tenetur repellat magni neque veritatis?</p>
  </div>
  <div id="about">
    <h2>About</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <span>Est corporis incidunt voluptatibus laudantium eos.</span> Fuga vel deleniti temporibus ipsam molestias?</p>
  </div> 
</body>
</html>
```

![Fonts](/images/03_fonts.png)

## Colors
### Color Types
#### Name
You can set the **color** of an element by referencing the color's name: `color: red;`. <br>
Further resources: [List of color names and hex-codes](https://www.w3schools.com/cssref/css_colors.asp) <br>
#### RGB
The RGB color type composes the target color out of the three source colors, **red**, **green** and **blue**. <br>
`0` is the **minimum**, `255` is the **maximum** value. <br>
`color: rgb(255, 0, 0)` corresponds to the same color from our color-name example above – pure **red**. <br>
`color: rgb(0, 0, 0)` equals **black**, `color: rgb(0, 0, 0)` equals **white**. <br>
Further resources: [RGB color fader + examples](https://www.w3schools.com/Css/css_colors_rgb.asp) <br>
#### Hex
The **hex** code is the most common way to reference a color. <br>
It starts with a `#`, contains **six-digits** of **numbers from 0-9** and **letters from a-f**. <br>
`color: #000000;` equals **black**, `color: #ffffff;` equals **white**. <br>
Hexadecimal colors also use the RGB spectrum: <br>

* #**ff**ffff – the first two digits pair represents **red**
* #ff**ff**ff – the second two digits pair represents **green**
* #ffff**ff** – the third two digits pair represents **blue**

`color: #ff0000;` will style our element in the same way **red**, as our rgb and color-name examples. <br>
If all sic digits are the same, like **#ffffff** or **#000000**, you can shorten them to three digits: **#fff**, **#000**. <br>
The site [color-hex.com](https://www.color-hex.com/) provides some neat color tools. <br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Colors</title>
  <style>
    h1 {
      /* Color name */
      color: red;
    }

    h2 {
      /* RGB */
      color: rgb(255, 0, 0)
    }

    h3 {
      /* Hex */
      color: #ff0000;
    }
    
    body {
      background-color: #333;
    }
  </style>
</head>
<body>
  <h1>Heading One</h1>
  <h2>Heading Two</h2>
  <h3>Heading Three</h3>
</body>
</html>
```

![Colors](/images/04_colors.png)

## Backgrounds & borders
### Border style
You can style a border with its three attributes each in a separate line like this: <br>

```css
border-width: 8px;
border-color: rebeccapurple;
border-style: dashed;
```

Or all together in **one line** like this: <br>

```css
border: 8px dashed rebeccapurple;
```

You can set border only on top of an element. <br>

```css
background: beige;
color: darkslategray;
border-top: 8px solid darkslategray;
```

You can round your corners with **border-radius**: <br>

```css
border-radius: 10px;
```

Each corner can be styled individually. <br>
If you want to style only the upper left corner: <br>

```css
border-top-left-radius: 10px;
```

### Background image
`background-image: url('./img/stars.jpg');` places the **star.jpg** image as **background** for the styled element. <br>
`background-repeat: no-repeat;` ensures the background isn't repeated by the browser. <br>
You can use **background-repeat** to adjust settings for seamless textures. <br>
With **background-position** you can move the image position within the styled element. <br>
Examples: `background-position: -100px -100px;` or `background-position: 100px 100px;` or `background-position: center top;`. <br>
`background-size: cover;` is going to adjust the size of the image to **cover** the whole space of the styled element. <br>
You can combine those background settings shown above in one single **backround** line: <br>

```css
background: url('./img/stars.jpg') no-repeat center center/cover;
```

You can use `background:` also to only set an image, without specifying all the other settings. <br>
Usually the background image would scroll with your view position on the page. <br>
You can prevent the image from scrolling and make it hold its position on the page with `background-attachment: fixed;` <br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Backgrounds & Borders</title>
  <style>
    #box1 {
      background-color: palevioletred;
      border-width: 8px;
      border-color: rebeccapurple;
      border-style: dashed;
      border-radius: 10px;
    }
    #box1b {
      background-color: palevioletred;
      border: 8px dashed rebeccapurple;
      border-top-left-radius: 25px;
      border-bottom-right-radius: 25px;
    }
    #box2 {
      background: beige;
      color: darkslategray;
      border-top: 8px solid darkslategray;
    }
    #box3 {
      background-image: url('./img/stars.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center top;
      color: #fff;
      height: 300px;
      width: 600px;
    }
    #box3b {
      background: url('./img/stars.jpg') no-repeat center center/cover;
      color: #fff;
      height: 300px;
      width: 600px;
    }
    #box4 {
      background: url('./img/leaf.png') no-repeat center center;
    }
  </style>
</head>
<body>
  <div id="box1">
  <h3>Box one</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius culpa eum inventore soluta maiores tempora tenetur labore recusandae perspiciatis!</p>
  </div>
  <br>
  <div id="box1b">
    <h3>Box one b</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius culpa eum inventore soluta maiores tempora tenetur labore recusandae perspiciatis!</p>
  </div>
  <br>
  <div id="box2">
    <h3>Box two</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius culpa eum inventore soluta maiores tempora tenetur labore recusandae perspiciatis!</p>
  </div>
  <br>
  <div id="box3">
    <h3>Box three</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius culpa eum inventore soluta maiores tempora tenetur labore recusandae perspiciatis!</p>
  </div>
  <br>
  <div id="box3b">
    <h3>Box three</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius culpa eum inventore soluta maiores tempora tenetur labore recusandae perspiciatis!</p>
  </div>
  <br>
  <div id="box4">
    <h3>Box four</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius culpa eum inventore soluta maiores tempora tenetur labore recusandae perspiciatis!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius culpa eum inventore soluta maiores tempora tenetur labore recusandae perspiciatis!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius culpa eum inventore soluta maiores tempora tenetur labore recusandae perspiciatis!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius culpa eum inventore soluta maiores tempora tenetur labore recusandae perspiciatis!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius culpa eum inventore soluta maiores tempora tenetur labore recusandae perspiciatis!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius culpa eum inventore soluta maiores tempora tenetur labore recusandae perspiciatis!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius culpa eum inventore soluta maiores tempora tenetur labore recusandae perspiciatis!</p>
  </div>
</body>
</html>
```

![Background Borders](/images/05_background_borders.png)

## Box model, margin & padding
Your browsers **inspector** or **developer console** helps you to better understand **margin**, **border** and ** padding**. <br>

* **Margin:** is the space outside of the border to the browser side lines
* **Border:** the element surrounding frame, might be visible, might be transparent
* **Padding:** positioning within the inner border

![Box Model](/images/box-model.png)

### Reset default styling
Some **html-elements** have **default styling settings** – like margin, font-size or font-weight for a heading. <br>

You can overwrite those **default values** when setting an **custom value** for the appropriate element. <br>
You can also **reset all styling properties** with a CSS reset: <br>

```html
<style>
  /* CSS Reset */
  * {
    margin: 0;
    padding: 0;
  }
</style>
```

### Margin, padding and sizing properties
`box-sizing: border-box;` restricts the **width** of an element to the **width** defined in its styling. <br>
Without that setting, padding is added **on the outside** of the width, with it, it's added **within the specified width**. <br>
<br>
**NOTE:** If you define styling settings multiple-times for the same attributes in your document … <br>
… the settings **further down** will **overrule** the prior settings up in the document. <br>
<br>
In the example below you see four ways to set the **padding** for an element. <br>

* **(1)** Padding with single entry – means same value for all four sides
* **(2)** Padding with four **single entries** for each **individual side**
* **(3)** Padding with four **one-line** entries for sides: **top, right, bottom, left**
* **(4)** Padding with two entries for grouped values: **top/bottom left/right**
<br>
For the **margin** setting, it works exactly the same way, as you can see in the example. <br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Box Model / Margin & Padding</title>
  <style>
    /* CSS Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .box {
      background: #f4f4f4;
      border: 2px #777 solid;
      width: 500px;

      /* (1) Padding on all sides */
      padding: 20px;

      /* (2) Padding per side */
      padding-top: 10px;
      padding-right: 20px;
      padding-bottom: 10px;
      padding-left: 20px;

      /* (3) Padding shorthand = top, right, bottom, left */
      padding: 10px 20px 10px 20px;

      /* (4) Padding shorthand = top/bottom left/right */
      padding: 10px 20px;

      /* Margin on all sides */
      margin: 20px;

      /* Margin per side */
      margin-top: 10px;
      margin-right: 20px;
      margin-bottom: 10px;
      margin-left: 20px;

      /* Margin shorthand = top, right, bottom, left */
      margin: 10px 20px 10px 20px;

      /* Margin shorthand = top/bottom left/right */
      margin: 10px 20px;
    }
    .box h3 {
      padding-bottom: 10px;
    }
  </style>
</head>
<body>
  <div class="box">
    <h3>Box one</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil laudantium ea cum aspernatur facilis voluptates quis possimus amet cumque! Recusandae.</p>
  </div>
  <div class="box">
    <h3>Box two</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil laudantium ea cum aspernatur facilis voluptates quis possimus amet cumque! Recusandae.</p>
  </div>
</body>
</html>
```

## Float & alignment
You can use a **container class div** as shown in the example below as a styling-wrapper. <br>
It makes sense to use `max-width` over `width` ind a **container class** to ensure mobile compatibility. <br>
A `width: 960px;` will result in a **scroll-bar** for displays with a width less 960px. <br>
`max-width: 960px;` though will adjust the **width** to the screen when tighter, but keep a **max of 960px** for wider displays. <br>
`margin: auto` will **center** the element in the middle of the screen (left/right). <br> 
### Text align
By default, text is aligned to the left, but you can write it out like this: `text-align: left;` <br>
You can as well align **right**, **center** or **justify** *(blocksatz)*. <br>
### Floating
Floating is kind of an ancient way of positioning elements in context to each other. <br>
There are more modern ways to do it, like **CSS Grid** but it made it into our example for the sake of demo. <br> 
Floats have to be **cleared** – which is a pain in the neck. <br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Float & Align</title>
  <style>
    * {
      box-sizing: border-box;
    }
    body {
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.4em;
    }

    .container {
      max-width: 960px;
      margin: 30px auto
    }

    .clr {
      clear: both;
    }

    .box {
      background: #c4c4c4;
      border: 2px solid #333;
      padding: 20px;
      margin-bottom: 15px;
    }

    .box p {
      /* Text Align */
      text-align: justify;
    }

    #box-2 {
      float: left;
      width: 68%;
    }

    #box-3 {
      float: right;
      width: 30%;
    }
  </style>
</head>
<body>
  <div class="container">

    <div id="box-1" class="box">
      <h3>Heading</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis cum aut labore rerum optio
        reprehenderit, maxime quam quidem tenetur doloribus?</p>
    </div>
    <div id="box-2" class="box">
      <h3>Heading</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis cum aut labore rerum optio
        reprehenderit, maxime quam quidem tenetur doloribus?</p>
    </div>
    <div id="box-3" class="box">
      <h3>Heading</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis cum aut labore rerum optio
        reprehenderit, maxime quam quidem tenetur doloribus?</p>
    </div>

    <div class="clr"></div>

    <div id="box-4" class="box">
      <h3>Heading</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis cum aut labore rerum optio
        reprehenderit, maxime quam quidem tenetur doloribus?</p>
    </div>

  </div>
</body>
</html>
```

![Float & Alignment](/images/07_float_align.png)

## Links & buttons
Links have different **states**. The **default link styling** is **blue** and **underlined**. <br>
`text-decoration: none;` will **remove the underline**. <br>
### link pseudo-selectors
[w3schools pseudo-classes](https://www.w3schools.com/css/css_pseudo_classes.asp) <br>
To change the link behavior on mouse hover, use the `a:hover {}` pseudo selector. <br>
`a:visited {}` will style an **already clicked link**, `a:active {}` styles the **link while clicked**. <br>
### style links and buttons
The default stylings of links and buttons are different, but they can be styled similar, sharing the same styling class. <br>
Some things like the `cursor: pointer;` come by default on **links**, but can be activated on **buttons**. <br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Links & Buttons</title>
  <style>
    /* Link Styling */
    a{
      color: #333;
      text-decoration: none;
    }

    a:hover {
      color: coral;
      text-decoration: underline;
    }

    /*
    a:visited {
      color: red;
    }
    */

    a:active {
      color: red;
    }

    /* Button Styling */
    .btn {
      background: #4c6ca0;
      color: #fff;
      border: none;
      font-size: 16px;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
    }

    .btn:hover {
      color: #f4f4f4;
      background: #446190;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <br>
  <a class="btn" href="#">My Link</a>
  <br><br>
  <button class="btn">My Button</button>
</body>
</html>
```

![Link and Button](/images/08_links_buttons.png)

## Navigation menu styling
Use `list-style: none;` to get rid of **default list bullet-points**. <br>
We can set a styling only for the **last list element** with the appropriate **pseudo-selector**: <br>

```css
.side-menu li:last-child {
  border: none;
}
```

### Side menu & navbar

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Menu Styling</title>
  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
    }

    /* Navbar Styling */
    .navbar {
      list-style: none;
      margin: 0;
      padding: 0;
      background: #4c6ca0;
      border-radius: 5px;
      overflow: auto;
    }

    .navbar li {
      float: left;
    }

    .navbar li a {
      display: block;
      color: white;
      text-decoration: none;
      padding: 15px 20px;;
    }

    .navbar li a:hover {
      background-color: #446190;
    }

    /* Side Menu Styling */
    .side-menu {
      list-style: none;
      border: 2px #aaa solid;
      border-radius: 10px;
      width: 300px;
      padding: 20px;
    }

    .side-menu li {
      font-size: 18px;
      line-height: 2.4em;
      border-bottom: dotted 2px #aaa;
    }

    .side-menu li:last-child {
      border: none;
    }

    .side-menu li a {
      color: #333;
      text-decoration: none;
    }

    .side-menu li a:hover {
      color: coral;
    }
  </style>
</head>
<body>
  <ul class="navbar">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <br><br>
  <ul class="side-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</body>
</html>
```

![Side menu and navbar](/images/09_menus.png)

## Inline & Block Styling
By default **list items** are **block level** elements. <br>
But with `display: inline;` you can change it to be **inline** which allows you to use the list for something like a horizontal navbar. <br>
**Images** are **inline elements** by default. If you place two of them together, they go next to each other within the same line. <br> 
An **inline element** can't be centered with `margin: auto;`. <br>
It has to be transformed to a **block level element** with `display: block;` in order to center it. <br>
If you want to make a block element inline and you need to use **width** on it, you have to use `display: inline-block;`. <br>
**inline-block** combines some of the capabilities of **inline and block** elements together. <br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inline & Block Styling</title>
<style>
  li {
    display: inline;
  }

  li a {
    padding-right: 20px;
  }

  img {
    display: block;
    margin: auto;
  }

  .box {
    width: 32.99%;
    display: inline-block;
    box-sizing: border-box;
    background-color: #333;
    color: white;
    padding: 20px;
  }
</style>
</head>
<body>
  <ul>
    <li><a href="#">Technology</a></li>
    <li><a href="#">Business</a></li>
    <li><a href="#">Fashion</a></li>
  </ul>
  <br><br>
  <img src="./img/leaf.png" alt="My image">
  <br><br>
  <div class="box">
    <h3>Heading 1</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam eligendi reprehenderit pariatur at! Aperiam, quaerat tempore? Est, iure repellendus.</p>
  </div>
  <div class="box">
    <h3>Heading 2</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam eligendi reprehenderit pariatur at! Aperiam, quaerat tempore? Est, iure repellendus.</p>
  </div>
  <div class="box">
    <h3>Heading 3</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam eligendi reprehenderit pariatur at! Aperiam, quaerat tempore? Est, iure repellendus.</p>
  </div>
</body>
</html>
```

![inline block](/images/10_inline_block.png)

## Positioning
|Position Type|Description|
|:------------|:----------|
|Static|Not effected by tblr (top, bottom, left, right) properties|
|Relative|tblr values cause element to be moved from its normal position|
|Absolute|Positioned relative to its parent element that is positioned "relative"|
|Fixed|Positioned relative to the viewpoint|
|Sticky|Positioned based on scroll position|

Elements with `position: absolute;` will adjust within their their **parent** element. <br>
That **parent** element must have `position: relative;` set in its properties. <br>
An element with `position: fixed;` will hold its specified position withing the screen **when scrolling**. <br>
The blue box (**box-4**) will keep its position exactly where it is, the other elements disappear when scrolling down. <br>
The orange box (**box-5**) has `position: sticky;` set and will **stick** at `top: 0;` when it reaches that position while scrolling. <br>
### z-index
The elements layer position can be adjusted with `z-index:` – as higher the number as higher the element. <br>
If we give our **container** `z-index: 1;` and our **box-1** `z-index: 2;`, box-1 will show in the foreground. <br>
You can use **negative values** for your **z-index**. <br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Positioning</title>
  <style>
    body {
      height: 4000px;
    }
    .box {
      width: 100px;
      height: 100px;
    }

    .container {
      position: relative;
      width: 500px;
      height: 500px;
      background: #333;
      left: 300px;
      z-index: 1;
    }

    #box-1 {
      position: relative;
      top: 50px;
      left: 550px;
      z-index: 2;
      background: red;
    }

    #box-2 {
      position: absolute;
      top: 100px;
      left: 100px;
      background: yellow;
    }

    #box-3 {
      position: absolute;
      bottom: 100px;
      right: 100px;
      background: green;
    }
    
    #box-4 {
      position: fixed;
      left: 150px;
      background: blue;
    }
    
    #box-5 {
      position: sticky;
      top: 0;
      background: orange;
    }

  </style>
</head>
<body>
  <div id="box-1" class="box"></div>
  <div class="container">
    <div id="box-2" class="box"></div>
    <div id="box-3" class="box"></div>
  </div>
  <div id="box-4" class="box"></div>
  <div id="box-5" class="box"></div>
</body>
</html>
```

![positioning](/images/11_position.png)

## display none & visibility hidden
Testfile without any styling: <br>

![testfile](/images/testfile.png)

### display none
Now we add the following styling to the page: <br>

```css
h1 {
  display: none;
}
```

This will completely remove the **H1** element from the browser <br>
That can be useful for example if you'd not like to show it on a mobile device. <br>

![display-none](/images/display-none.png)

### visibility hidden
There is also a way to **hide** an element from the page: <br>

```html
h1 { 
  visibility: hidden;
}
```

The element will be hidden, but it still will occupy the full space as it would when visible. <br>

![visibility-hidden](/images/visibility-hidden.png)

## Order of precedence
### Class style
Normally the style further down in the document is take precedence – however, targeting a class is going to overwrite the actual element. <br>

**Body:**

```html
<body>
  <h1 class="hello">Hello World</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nihil tenetur deleniti doloremque facilis itaque!</p>
</body>
```

**Syling**

```html
<style>
  .hello {
    color: red;
  }
  h1 { 
    color: blue;
  }
</style>
```

The **h1** remains red, because the class style overwrites the element style: <br>

![class-style](/images/class-style.png)

### !important flag
There is a way to overwrite either the position in the stylesheet or class styling – the `!important` flag: <br>

```html
<style>
  h1 { 
    color: blue !important;
  }
  .hello {
    color: red;
  }
</style>
```

Although the class styling would overwrite the element styling by default and it is further down in the sheet, the blue color will be the dominant styling setting in this case as it has been flagged **important**. <br>

![important](/images/important.png)

## :focus
If you want to change the default outline color of an textarea or input field, you can do so with `:focus` <br>
You have to set the outline to **none**, then specify the border color of your choice. <br>

```html
t
#contact-form input:focus, 
#contact-form textarea:focus  {
  outline: none;
  border-color: #f7c08a;
}
```

## Responsive Design
Responsive design uses HTMT/CSS to make a website or app layout adapt to different screen sizes. <br>

### Practices to use
* set the viewport / scale
* use fluid widths as oppose to fixed
* media queries – different CSS styling for different screen sizes
* rem units over px
* mobile first method

### Media queries
The example below shows how to use media queries to set a different styling for individual device types, bases on the average screen **widths** of those devices. <br>
It's unlikely that you want to have a totally different styling based on the device type, a typical use case for this would be different floating depending on the screen width – so for example three boxes next to each other on the desktop while there stacked below each other on a smaller screen. <br> 
Note that the **landscape** example uses the **height** to as indicator for its styling. <br>
You can have dedicated media style sheets and call them only if the device specification apply. <br>
The following link under your usual stylesheet, would call it only, if the **width** is 768px or less. <br>

```html
<link rel="stylesheet" media "screen and (max-width: 768px)" href="mobile.css">
```

**smartphone**

![smartphone](/images/smartphone.png)

**tablet**

![tablet](/images/tablet.png)

**normal**

![normal](/images/normal.png)

**widescreen**

![widescreen](/images/widescreen.png)

**landscape**

![landscape](/images/landscape.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Media Queries</title>
  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      background: gray;
      color: white;
      text-align: center;
      padding-top: 100px;
    }

    h1 {
      display: none;
    }

    /* Smartphones */
    @media(max-width: 500px) {
      body {
        background: red;
      }

      #smartphone h1 {
        display: block;
      }

    }
    /* Tablet */
    @media(min-width: 501px) and (max-width: 768px) {
      body {
        background: blue;
      }

      #tablet h1 {
        display: block;
      }
    }

    /* Normal */
    @media(min-width: 769px) and (max-width: 1200px) {
      body {
        background: green;
      }

      #normal h1 {
        display: block;
      }
    }

    /* Widescreen */
    @media(min-width: 1201px) {
      body {
        background: black;
      }

      #widescreen h1 {
        display: block;
      }
    }

    /* Landscape */
    @media(max-height: 500px) {
      body {
        background: orange;
      }

      #landscape h1 {
        display: block;
      }
    }
  </style>
</head>
<body>
  <div id="widescreen"><h1>Widescreen</h1></div>
  <div id="normal"><h1>Normal</h1></div>
  <div id="tablet"><h1>Tablet</h1></div>
  <div id="smartphone"><h1>Smartphone</h1></div>
  <div id="landscape"><h1>Landscape</h1></div>
</body>
</html>
```


