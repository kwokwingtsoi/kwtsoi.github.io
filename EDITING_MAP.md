# What can I edit?

This is the shortest guide to the website.

## Start with these two files

### `index.html` - words and links

This contains everything visitors read: the introduction, current news,
research, publications, teaching, awards, and contact information.

Look for the large comments labelled `EDIT 1` through `EDIT 6`. They divide the
file into the same six sections that appear on the webpage.

### `style.css` - appearance

This controls colours, spacing, fonts, cards, and the phone layout. Routine
content updates do not require touching this file.

The main colours are listed at the very top:

```css
--paper: #f5f2e9;
--green: #1f4d3e;
--gold: #c6933b;
```

Ask Codex to change these rather than editing the rest of the design manually.

## Other files

- `files/` stores PDFs and downloads.
- `README.md` is the folder map.
- `MAINTENANCE.md` is the quick workflow.
- `KW_TSOI_WEBSITE_GUIDE.md` is the complete handbook.

## Changes that are safe to make yourself

Inside `index.html`, you can safely correct ordinary words between angle
brackets. For example:

```html
<h3>Calculus and linear algebra</h3>
```

Change only the words:

```html
<h3>Calculus and elementary analysis</h3>
```

For a link, the address appears inside `href="..."`:

```html
<a href="https://example.com">DOI ↗</a>
```

You may replace the web address and visible button words. Keep the quotation
marks and angle brackets.

## Changes best given to Codex

Ask Codex to handle:

- adding or removing a complete publication;
- moving a preprint into the publication list;
- adding a new section;
- changing colours, columns, or mobile behaviour;
- connecting a new PDF;
- checking links and publishing.

## The current page design

The page is one scrolling academic homepage:

1. **Top navigation** stays visible and jumps to each section.
2. **Opening section** shows the name, introduction, and NTU affiliation.
3. **Currently** gives three quickly replaceable news cards.
4. **Research** summarises the programme in three themes.
5. **Publications** follows a Burns-style chronological list.
6. **Teaching** highlights philosophy, awards, and Calculus coordination.
7. **Contact** contains the office and email details.

On a phone, the three-column cards automatically become a single column. That
behaviour lives in `style.css` and needs no routine maintenance.

## Best prompt for a future edit

> Open `/Users/kwokwingtsoi/Documents/KW-Tsoi-Website`. Change only EDIT [number]
> in `index.html`: [describe the change]. Preserve the design, preview locally,
> and do not publish until I approve.
