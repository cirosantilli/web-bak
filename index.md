---
title: Web Frontend Cheatsheets
layout: default
---

Web frontend cheatsheets: HTML, CSS, Javascript and related technologies.

Server side languages and frameworks like Python, Django, Ruby, RoR are not here.

Most useful cheats:

- [HTML](html.html)
- [CSS](css.html)
- [Javascript](js.html)
- [Twitter Bootstrap](bootstrap.html)

Some Web frontend technologies require libraries to make tests with, and might be somewhere else:

- **XPATH**: XML selector language. Cheat at: <https://github.com/cirosantilli/rails-cheat/blob/98f582dce03d5643b2c301e8bb2788dd520df00f/app/test/integration/capybara_test.rb>

Less useful cheats:

- [ACE editor](ace.html)
- [Marked Markdown browser example](marked.html)
- [Bower](bower/)
- [Browserify](browserify/)
- [jQuery](jquery.html)
- [jsPDF](jspdf/)

Js syntax highlighters: <http://softwaremaniacs.org/blog/2011/05/22/highlighters-comparison/>

# Standards organizations

## W3C

WWW Consortium.

W3C specifies many of the key web standards including:

- HTML: <http://www.w3.org/TR/html5/>
- CSS:  <http://www.w3.org/TR/css3-cascade/> and other pages
- DOM:  <http://www.w3.org/TR/dom/>
- XML:  <http://www.w3.org/TR/xml/>
- CGI

One important web standard that they **do not** specify is Javascript, which is specified by Ecma international <http://www.ecma-international.org/>

W3C has many important member organizations including companies, universities and others such as Microsoft, Apple, IBM, Google, Facebook, Twitter, Adobe.

### Maturity levels of standards

W3C has several levels of endorsement for standards. They are described on the "Process" document <http://www.w3.org/2005/10/Process-20051014/tr.html#maturity-levels>.

- WD (Working Draft):            lowest level of endorsement of material available to the public
- CR (Candidate Recommendation): higher
- PR (Proposed Recommendation):  higher
- REC (Recommendation):          highest level, for stable and widely accepted features
- Working group note:            TODO
- NOTES:                         make small revisions to a standard
- retired:                       standards that have been deprecated

## IETF

Specifies networking protocols, in particular HTTP, which is used at many points of W3C documentation.

Such protocols shall not be covered here.

For an HTTP tutorial see: <https://github.com/cirosantilli/linux/blob/435a180e2104fe82584bec9719d9e45342c535a9/net/http.md>

# Sources

[Mozilla's MDN](https://developer.mozilla.org) is an open wiki with highly
recommended content. Huge amount of content, examples, depth and implementation status.

[Web Platform Docs WPD](http://docs.webplatform.org/wiki/Main_Page). Wiki with tutorials.

[CSS Tricks](http://css-tricks.com/). Amazing CSS source. Create and maintained by Chris Coyier <http://chriscoyier.net/>,
now has articles by many. Very high quality techniques. Closed source apparently.

[HTML5 rocks](http://www.html5rocks.com/en/). New web technologies in general, not just HTML:
CSS, Javascript, server side, etc. Google sponsored. [Open source](https://github.com/html5rocks/www.html5rocks.com).

[w3schools](http://www.w3schools.com) is fine for beginners,
but not open source, and thus cannot update fast enough,
so may contain errors and has been criticized by many devs.
Tutorials are a bit shallow.
Insane Google rank, which makes may devs mad.

[Can I use](http://caniuse.com/): implementation status of HTML, CSS and Javascript features.
Closed source?
