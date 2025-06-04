# Dark mode support

This library supports dark-mode out of the box.

You may either put "dark" or "light" class to the `html` tag, to enforce a mode. Otherwise this library respects the user system preference. No javascript required.

| Body class    | System preference | Resulting mode |
|---------------|-------------------|----------------|
| (unspecified) | light             | light          |
| (unspecified) | dark              | dark           |
| `"light"`     | -                 | light          |
| `"dark"`      | -                 | dark           |
