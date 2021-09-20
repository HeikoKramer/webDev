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

You can also combine **dollar** & **caret** to check if something starts and ends with the pattern. <br>
But note, this works only if the **same word** is at the **start** & **end** of the string. <br>
If you place the word twice, one at the start and one at the end, it won't work: <br>

```js
re = /^world$/i;
const str = 'Worldclass Hello World';

reTest(re, str);
// > Worldclass Hello World does NOT match ^world$
```

Handing over only *World* results in a match: <br>

```js
re = /^world$/i;
const str = 'World';

reTest(re, str);
// > World matches ^world$
```

### . 
The **dot** `.` is used like a **wildcard**. It matches any **one charakter**. <br>

```js
re = /^h.llo$/i;
const strA = 'Hallo';
const strE = 'Hello';

reTest(re, strA);
// > Hallo matches ^h.llo$

reTest(re, strE);
// > Hello matches ^h.llo$
```

### *
The **asterisk** `*` is the actual **wildcard**. <br> 
It does not only cover one character, **multiple charakters can be inbetween our pattern**. <br>
**NOTE:** It seems like the caret `^` isn't working on pattern separated with an **asteriks**. <br>

```js
re = /h*llo/i;
const strA = 'H12345llo';
const strE = 'Heeeejjjkjjkkello';

reTest(re, strA);
// > H12345llo matches h*llo

reTest(re, strE);
// > H12345llo matches h*llo
```

### ?
You can define **an other option** with the **questionmark** `?`. <br>
This means, when you have a word with two possible spellings, like *grey* or *gray*, you can match both versions. <br>
Place the first questionmark **after the first optional letter**, than the **second optional letter + an other questionmark**. <br>
*grey* and *gray* match, *groy* doesn't: <br>

```js
re = /gre?a?y/i;
const strGrey = 'grey';
const strGray = 'gray';
const strGroy = 'groy';

reTest(re, strGrey);
// > grey matches gre?a?y

reTest(re, strGray);
// > gray matches gre?a?y

reTest(re, strGroy);
// > groy does NOT match gre?a?y
```

**NOTE:** Since both characters **e** and **a** are optional, *gry* will also match our pattern: <br>

```js
re = /gre?a?y/i;
const strGry = 'gry';

reTest(re, strGry);
// > gry matches gre?a?y
```

### Escaping characters
What is we want to match the string *Gray?* including the `?` as a literal? <br>
Our regex logic would see the **y** optional in that case, as learned above, so we would not match the *y?*. <br>
We can solve that, by **escaping** the `?` with a **backslash** `\?`. <br>

```js
re = /grey\?/i;
const str = 'grey?';

reTest(re, str);
// > grey? matches grey\?
```

## Character Sets & Quantifiers
### Brackets
**Brackets** `[]` allow you to specify options for for certain characters. <br>
This is quite similar to the topic [Wildcard / Expansion in bash](https://github.com/HeikoKramer/linux/blob/main/linux_notes.md#wildcards--expansion). <br>
In the example below we are using the *grey* or *gray* scenario from earlier, but this time we solve it with **brackets**. <br> 
As we allow `[ea]` in the bracket, both options, *grey* and *gray*, match: <br>

```js
re = /gr[ea]y/i;

const strGrey = 'grey?';
const strGray = 'gray?';

reTest(re, strGrey);
// > grey? matches gr[ea]y

reTest(re, strGray);
// > gray? matches gr[ea]y
```

You can specify case sensitivity in the brackets, `/[HN]ej/`: only *Hej* or *Nej* are matching. <br>

```js
re = /[HN]ej/;

const strHej = 'Hej?';
const strNej = 'Nej?';

reTest(re, strHej);
// > Hej? matches [HN]ej

reTest(re, strNej);
// > Nej? matches [HN]ej

const strSmall = 'nej?';
reTest(re, strSmall);
// > nej? does NOT match [HN]ej

const strRej = 'Rej?';
reTest(re, strRej);
// > Rej? does NOT match [HN]ej
```

The **caret** sign `^` has a different meaning within brackets as outside of it. <br>
Here it turns the our `/[^HN]ej/` into "match every first letter **except for** H or N. <br> 

```js
re = /[^HN]ej/;

const strHej = 'Hej?';
const strNej = 'Nej?';

reTest(re, strHej);
// > Hej? does NOT match [^HN]ej

reTest(re, strNej);
// > Nej? does NOT match [^HN]ej

const strSmall = 'nej?';
reTest(re, strSmall);
// > nej? matches [^HN]ej

const strRej = 'Rej?';
reTest(re, strRej);
// > Rej? matches [^HN]ej
```

If you wanted to write a regex string, that matches only if something starts with H or N, you'd have to take the **caret** out of the brackets: `/^[HN]ej/`. <br>

#### Ranges
You can define **ranges** in the brackets, by using a **dash** `-`. <br>
The range `[A-Z]` will match all **capital letters**. <br>

```js
re = /[A-Z]ej/;

const strCap = 'Hej?';
const strLow = 'hej?';

reTest(re, strCap);
// > Hej? matches [A-Z]ej

reTest(re, strLow);
// > hej? does NOT match [A-Z]ej
```

More **range** examples: <br>

```js
re = /[a-z]ej/;        // will match any lowercase letter
                       // hej, nej, rej, eej …

re = /[A-Za-z]ej/;     // match any letter
                       // Hej, hej, Nej, nej …

re = /Num[0-2][0-9]/;  // matches the specified number range
                       // Num01, Num22, Num19 …
```

#### Quantifiers 
Use curly brackets `{}` to specify a  **quantifier** for the character **before** the brackets. <br>
In the example below we match the string *Hello* by specifying `/Hel{2}o/`. <br>

```js
re = /Hel{2}o/i;

const str = 'Hello';

reTest(re, str);
// > Hello matches Hel{2}o
```

We can define a **range**, here to match **2-4 l** `/Hel{2,4}o/`. <br>

```js
re = /Hel{2,4}o/i;

const str = 'Helllo';

reTest(re, str);
// > Helllo matches Hel{2,4}o
```

or **at least 2 l** with `/Hel{2,}o/`. <br>

```js
re = /Hel{2,}o/i;

const str = 'Helllllllo';

reTest(re, str);
// > Helllllllo matches Hel{2,}o
```

### Grouping
**Grouping** is done with **parentheses** `()`. <br>
We can for example **group** a character and number range together and match two times that pattern with `/([A-Z][0-9]){2}/`. <br>

```js
re = /([A-Z][0-9]){2}/i;

const str = 'R2D2';

reTest(re, str);
// > R2D2 matches ([A-Z][0-9]){2}
```

The example above matches also *R2D2Balblablub*, if we want to restrict it to a 4-digit pattern, we have to use: <br>

```js 
re = /^([A-Z][0-9]){2}$/i;
```

