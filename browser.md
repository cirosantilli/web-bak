---
title: Browser
---

Information on browsers.

## Browser

### Firefox

Search with default engine:

    firefox -search asdf

Starts with disabled extensions in case they are causing a crash:

    firefox -safe-mode

Fundamental shortcuts:

- `'`: search for link text. Enter click will go to the destination.
- `Ctrl + L`: location bar
- `Ctrl + K`: search bar

Development shortcuts:

-   `Ctrl + Shift + C`: open inspector on element selection mode.
    Hover over elements to analyse them

-   `Ctrl + Shift + I`: toggle inspector

Tools without shortcut:

-   <http://stackoverflow.com/questions/13158083/take-a-full-page-screenshot-with-firefox>

#### Developer tools

##### Tamper data

<https://addons.mozilla.org/en-US/firefox/addon/tamper-data/>

Allows you to view and modify a request after triggering it on the website,
but before it gets sent: a popup opens, the and request waits for you to modify it.

Great to try and hack websites.
Better than curl when there is authentication
because the authenticity tokens and cookies are all there.

##### Auto Reload

<https://addons.mozilla.org/en-US/firefox/addon/auto-reload/>

Automatically reload page if local file was modified.

Great for previewing HTML output from lightweight markups like Markdown.

### Chrome

Some websites run neither on Firefox nor Chromium, only Chrome.

To have multiple chrome profiles do:

### w3m

ncurses web browser!

Might save you if X goes down or if you can't have it.
