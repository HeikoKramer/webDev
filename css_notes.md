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

