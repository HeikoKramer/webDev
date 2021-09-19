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

### match()
`match()` will return a **result array** or *null*. <br>
It is much similar to `exec()` but is run **on the string**, not on the pattern. <br> 

```js
let re;
re = /hello/i;

const str = 'Hello There';
const result = str.match(re);
console.log(result);
// > Array [ "Hello" ]
console.log(result.index);
// > 0
```

### search()
`search()` will return the **index of the first match** if found. <br>
If the pattern is not found, it will return **-1**. <br>

```js
let re;
re = /hello/i;

const str = 'Yoyoyoy Hello There';
const result = str.search(re);
console.log(result);
// > 8
```

### replace()
`replace()` is executed on the string and takes in the search pattern and string to replace the matches. <br>
It will return a new string, with some or all **matches of a pattern replaced**. <br>

```js
let re;
re = /hello/i;

const str = 'Yoyoyoy Hello There hello, hello';
const newStr = str.replace(re, 'Hi');
console.log(newStr);
// >  Yoyoyoy Hi There hello, hello
```

Note that only the first match has been replaced. <br>
To replace **all matches** in our string, we can use the **global flag**, when specifying our pattern. <br>

```js
let re;
re = /hello/ig;

const str = 'Yoyoyoy Hello There hello, hello';
const newStr = str.replace(re, 'Hi');
console.log(newStr);
// >  Yoyoyoy Hi There Hi, Hi
```

See, now that we added `g` the **global flag** to our search pattern (`/hello/ig`), all *Hello* and *hello* matches got replaced. <br>

## Metacharakter Symbols
We are using the following function to demonstrate the impact of our adde symbols: <br>

```js
function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}
```

so the following won't match, as we have not added the `i` flag and we are matching for a lower-case *hello*. <br> 

```js
re = /hello/;
const str = 'Hello World';

reTest(re, str);
// > Hello World does NOT match hello
```

if we add the `i` flag, our string matches the pattern: <br>

```js
re = /hello/i;
const str = 'Hello World';

reTest(re, str);
// > Hello World matches hello
```

So let's have a look on **metacharacter symbols**. <br>

### ^
The **caret** symbol `^` represents **starts with**. <br>
So in the first example, the string matches the pattern, as our string starts with *Hello*. <br> 

```js
re = /^hello/i;
const str = 'Hello World';

reTest(re, str);
// > Hello World matches ^hello
```

Note that *Hello* matches only, because we have also added the `i` tag. <br>
The next example does not match, as the string contains *World*, but it doesn't start with it. <br>

```js
re = /^world/i;
const str = 'Hello World';

reTest(re, str);
// > Hello World does NOT match ^world
```

We will also receive a positive result if the pattern is part of a continuing string, as long our pattern matches the start of it. <br>

```js
re = /^hello/i;
const str = 'Hellooooooooo World';

reTest(re, str);
// > Hellooooooooo World matches ^hello
```

### $
The **dollar** sign `$` does the opposite of the caret, it is used to check if a text **ends with a certain pattern**. <br>
Below we are matching, if *world* is at the end of our string. We are ignoring case, positive result: <br>

```js
re = /world$/i;
const str = 'Hello World';

reTest(re, str);
// > Hello World matches world$
```

