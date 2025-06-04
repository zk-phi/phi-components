# Properties and attributes
## Attributes

Attributes are values given to elements, usually via the HTML document.

For an example, `type` ATTRIBUTE is set to `"text"` in the `input` tag below.

``` html
<input id="foo" type="text" />
```

Attribute values must be primitive javascript values like strings, numbers.

Note that you may also set attributes via javascript API like below:

``` javascript
const input = document.getElementById("foo");
input.setAttribute("type", "text");
```

## Properties

Props are, on the other hand, values always set/get via the javascript API.

For an example, `type` PROPERTY is retrieved from the input tag in the snippet below.

``` javascript
const input = document.getElementById("foo");
console.log(input.type); // => "text"
```

Note that `type` PROPERTY value is already set to `"text"`, which inherits `type` ATTRIBUTE's value.

Some properties are automatically synced with their corresponding attributes like this.

Property values can be, unlike attributes, any javascript values.

## UI libraries and properties

Some UI libraries automatically use properties, instead of attributes, when non-primitive values are given (that are not allowed as attribute values). So that you may pass arbitrary values to Web Components as if they are ATTRIBUTES.

For an example, you may pass an array to `phi-checkbox` in Vue.js.

``` html
<phi-checkbox :value="['foo', 'bar']" />
```

Note that this is not allowed in plain HTML.

``` html
<!-- this is not allowed -->
<phi-checkbox value="['foo', 'bar']" />
```

`phi-checkbox` takes comma-separated string instead for `value` ATTRIBUTE (not PROPERTY).

``` html
<phi-checkbox value="foo,bar" />
```

This library (phi-components) utilizes this behavior, to achieve user-friendly interface on top of the Web Component API.
