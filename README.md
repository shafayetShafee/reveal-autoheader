# Reveal-autoheader Extension For Quarto

Automatically apply section Headings to slides in Quarto Reveal.js Presentations.

## Installing

```bash
quarto add shafayetShafee/reveal-autoheader
```

This will install the extension under the `_extensions` subdirectory.
If you're using version control, you will want to check in this directory.

## Using

````
---
title: "Reveal-autoheader Example"
format: revealjs
filters:
  - reveal-autoheader
---
````

After using this filter, header-less slides created with `---` (i.e. Horizontal lines) will automatically show the header from the previous slide with header. 


## Example

Here is the source code for a minimal example: [example.qmd](example.qmd).

