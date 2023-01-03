# Dark-mode detection

This library renders in dark-mode when

- the user enables dark-mode globally in their system, and the root `html` element does not have `nodark` class

or

- the root `html` element has `dark` class

| `prefers-color-scheme` | `dark` class | `nodark` class | Dark mode |
| ---------------------- | ------------ | -------------- | --------- |
| unspecified            | No           | *              | No        |
| unspecified            | Yes          | *              | Yes       |
| `light`                | No           | *              | No        |
| `light`                | Yes          | *              | Yes       |
| `dark`                 | *            | No             | Yes       |
| `dark`                 | *            | Yes            | No        |
