# Dark-mode detection

This library renders in dark-mode,

- if the user enables dark-mode globally in his system, and the root `html` element does NOT have `nodark` class

OR

- if the root `html` element has `dark` class

| `prefers-color-scheme` | `dark` class | `nodark` class | Dark mode |
| ---------------------- | ------------ | -------------- | --------- |
| *                      | Yes          | *              | Yes       |
| unspecified            | No           | *              | No        |
| `light`                | No           | *              | No        |
| `dark`                 | No           | No             | Yes       |
| `dark`                 | No           | Yes            | No        |
