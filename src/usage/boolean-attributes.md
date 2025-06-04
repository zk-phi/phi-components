# Boolean attributes

Boolean attributes are recognized as follows in this library:

| Attribute value            | Example                      | Recognized value |
|----------------------------|------------------------------|------------------|
| (unspecified)              | `<phi-button>`               | false            |
| `""` (empty string)        | `<phi-button disabled>`      | true             |
| `"0"` or `"false"`         | `<phi-button disabled=0>`    | false            |
| any other non-empty string | `<phi-button disabled="no">` | true             |
