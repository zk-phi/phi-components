# Boolean attributes

Boolean attributes (like `disabled`) to our elements are recognized as follows.

| Attr value      | Example                         | Recognized value   |
| --------------- | ------------------------------- | ------------------ |
| `undefined`     | `<phi-button>`                  | `false`            |
| `""`            | `<phi-button disabled>`         | `true`             |
| `"false"`       | `<phi-button disabled="false">` | `false`            |
| any other value | `<phi-button disabled="yes">`   | `true`             |
