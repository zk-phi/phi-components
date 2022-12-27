# Notes on form elements

Most form elements (unless noted) support all these interfaecs:

1. `value` field to set (WIP) / get values
2. `oninput` to detect user inputs
3. `name` field to integrate with enclosing `<form>` tag

Note that you may need to polyfill `ElementInternals` to support the third option, on Safari.
