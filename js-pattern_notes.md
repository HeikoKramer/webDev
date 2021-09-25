# JavaScript Patterns

*This document is an extension to my [JavaScript Notes 2](https://github.com/HeikoKramer/webDev/blob/main/javascript_notes_2.md). <br>
I'm writing these notes while taking Brad Traversy's [Modern JavaScript From The Beginning](https://subscription.packtpub.com/video/web-development/9781789539509/p1) course on packthub.com* 

## What are patterns?
**Patterns** are re-usable solutions to re-occurring problems, they are **programming templates**, a specific way to write code. <br>
The scope of patterns vary significantly, the *factory* and *prototype* patterns are used for object creation, the *module* pattern and its variations are used for overall structure, then you have software design patterns like *MVC* – the *Module View Controller* pattern and these apply to whole applications or to just little blocks of code. <br>
<br>
Patterns we will have a look on are: <br>
* Module
* Revealing Module Pattern
* Singleton
* Factory
* Observer
* Mediator
* State

## The module pattern
A module pattern works with an [IIFE – Immediately Invoked Function Expression](https://developer.mozilla.org/en-US/docs/Glossary/IIFE). <br>
Blueprint for the module pattern: <br>

```js
// Basic structure

(function() {
  // Declare private vars and functions

  return {
    // Declare public var and functions
  }
})();
```

**Two bracket pairs** are the base of our **module**. <br>

```js
const UICtrl = ()();
```

The first contains the **IIFE**. Wen can't access anything from within the function what is not **returned** by it. <br>
So we have also to return our desired functions, to make them **public functions** which than can be accessed. <br>
So in the *UIContrl* module below, we have the function *changeText*, which we make available via the **returened function** *callChangeText*. <br>

```js
// STANDARD MODULE PATTERN
const UICtrl = (function() {
  let text = 'Hello World';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    } 
  }
})();
```

![returned-function](/images/returned-function.gif)

If we try to call the **inner function** *changeText()*, we get an error, that function is not accessible for us: <br>

![inner-function](/images/inner-function.gif)

--> weiter bei 7:00
