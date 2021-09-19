# Regular Expressions

*This document is an extension to my [JavaScript Notes 2](https://github.com/HeikoKramer/webDev/blob/main/javascript_notes_2.md). <br>
I'm writing these notes while taking Brad Traversy's [Modern JavaScript From The Beginning](https://subscription.packtpub.com/video/web-development/9781789539509/p1) course on packthub.com* 

## What are regular expressions
A **regular expression** is used to describe a **pattern of charakters**. <br>
It's used for **pattern matching** or **pattern searching**, for **validation** or for **pulling a string out of a body of text**. <br>
With regex you can identify email addresses, phone numbers or other things that have a certain structure of formatting. <br>

## Evaluation Functions
In **JavaScript** there are different functions which are used to evaluate regular expressions. <br> 
In the following scenario, we set up our regex variable *re* to match the pattern *hello*. <br>
Regular expressions are put within slashes `/pattern/` – you can get the pure value with `source`. <br>

```js
let re;
re = /hello/;

console.log(re);
// > /hello/
console.log(re.source);
// > hello
```

### exec()
`exec()` will return the result in an array if there is a match – otherwise it will return *null*. <br>
It will as well return the **index** of the first letter of our pattern in the processed string. <br>

```js
let re;
re = /hello/;

// exec() – return result in an array or null
const result = re.exec('hello world');
console.log(result);
// > Array [ "hello" ]
console.log(result.index);
// > 0
console.log(result.input);
// > hello world

const noResult = re.exec('hi world');
console.log(noResult);
// > null
```

### test()
`test()` returns **true** if there is a match and **false** if there isn't a match. <br>

```js
let re;
re = /hello/;

const result = re.test('hello world');
console.log(result);
// > true

const noResult = re.test('Hello world');
console.log(noResult);
// > false
```

Note that the second result is *false*, as *Hello* is not equal to *hello* – regex are **case sensitive** by default. <br>
<br>
We can change that behaviour with a **flag**. Flags are put behind the search term. <br>
The `i` **flag** stands for **ignore case**. If we use `/hello/i` as our pattern, `test('Hello')` will also return *true*. <br>  

```js
let re;
re = /hello/i;

const result = re.test('Hello world');
console.log(result);
// > true
```
