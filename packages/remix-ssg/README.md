# @visma/remix-ssg

Generate static site from Remix app.

## Usage

Add `package.json` `"scripts"`. Optionally list pages that `wget` can't find when following links from the root:

```
"postbuild": "remix-ssg /page-x/ /other/y/z/",
```
