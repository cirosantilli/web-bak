---
title: Web Frontend Cheatsheets
---

Web frontend cheatsheets: HTML, CSS, JavaScript and related technologies.

Server side languages and frameworks like Python, Django, Ruby, RoR are not here.

Most useful cheats:

- [HTML](html.html)
- [CSS](css.html)
- [JavaScript](js.html)
- [Twitter Bootstrap](bootstrap.html)

Some Web frontend technologies require libraries to make tests with, and might be somewhere else:

- **XPATH**: XML selector language. Cheat at:
    <https://github.com/cirosantilli/rails-cheat/blob/98f582dce03d5643b2c301e8bb2788dd520df00f/app/test/integration/capybara_test.rb>

Less useful cheats:

- [ACE editor](ace.html)
- [Marked Markdown browser example](marked.html)
- [Bower](bower/)
- [Browserify](browserify/)
- [jQuery](jquery.html)
- [jspdf.html](jspdf.html): jsPDF.
- [PDF.js](pdfjs.html)

Js syntax highlighters: <http://softwaremaniacs.org/blog/2011/05/22/highlighters-comparison/>

## Standards organizations

### W3C

WWW Consortium.

W3C specifies many of the key web standards including:

- HTML: <http://www.w3.org/TR/html5/>
- CSS: <http://www.w3.org/TR/css3-cascade/> and other pages
- DOM: <http://www.w3.org/TR/dom/>
- XML: <http://www.w3.org/TR/xml/>
- CGI

One important web standard that they **do not** specify is Javascript,
which is specified by Ecma international <http://www.ecma-international.org/>

W3C has many important member organizations including companies,
universities and others such as Microsoft, Apple, IBM, Google, Facebook, Twitter, Adobe.

#### Maturity levels of standards

W3C has several levels of endorsement for standards.
They are described on the "Process" document:
<http://www.w3.org/2005/10/Process-20051014/tr.html#maturity-levels>.

-   **ED** (Editor's Draft):  recent version the editor is working on.
    No formal endorsement, updated often.
    <http://stackoverflow.com/questions/6692762/what-is-the-difference-between-a-w3c-working-draft-and-an-editors-draft>

-   **WD** (Working Draft): lowest level of endorsement of material available to the public

-   **CR** (Candidate Recommendation): higher

-   **PR** (Proposed Recommendation): higher

-   **REC** (Recommendation): highest level, for stable and widely accepted features

-   **Working group note**: TODO

-   **NOTES**: make small revisions to a standard

-   **retired**: standards that have been deprecated

#### Versions

Like any decent document, W3C standards are have versions,
and it is possible to link either to a branch or specific version of the document.

The initial paragraph of the documents always contains links to:

- latest stable version: `http://www.w3.org/TR/webrtc/`
- bleeding edge version, AKA "editor's draft": `http://dev.w3.org/2011/webrtc/editor/webrtc.html`
- specific versions: `http://dev.w3.org/2011/webrtc/editor/archives/20140617/webrtc.html`

Link to the one that makes most sense.

### WHATWG

Specs group, split from W3C because they disagreed:
<http://wiki.whatwg.org/wiki/FAQ#WHATWG_and_the_W3C_HTML_WG>

Started by Mozilla, Apple and Safari.
<http://wiki.whatwg.org/wiki/FAQ#What_is_the_WHATWG.3F>

Claim to be more practical oriented.

W3C tries to keep in touch, e.g. HTML5 has on WHATWG editor.

### IETF

Internet Engineering Task Force.

Specifies mainly networking protocols, in particular HTTP, which is used at many points of W3C documentation.

Such protocols shall not be covered here.

For an HTTP tutorial see: <https://github.com/cirosantilli/net/http.md>

## Style guides

- HTML and CSS: <https://github.com/mdo/code-guide>

## Sources

[Mozilla's MDN](https://developer.mozilla.org) is an open wiki with highly
recommended content. Huge amount of content, examples, depth and implementation status.
Their HTML5 front page beautifully summarizes the main themes on HTML5:
<https://developer.mozilla.org/en/docs/web/Guide/HTML/HTML5>

[Web Platform Docs WPD](http://docs.webplatform.org/wiki/Main_Page). Wiki with tutorials.

[CSS Tricks](http://css-tricks.com/). Amazing CSS source.
Create and maintained by Chris Coyier <http://chriscoyier.net/>,
now has articles by many. Very high quality techniques. Closed source apparently.

[HTML5 rocks](http://www.html5rocks.com/en/). New web technologies in general, not just HTML:
CSS, Javascript, server side, etc. Google sponsored. [Open source](https://github.com/html5rocks/www.html5rocks.com).

[w3schools](http://www.w3schools.com) is fine for beginners,
but not open source, and thus cannot update fast enough,
so may contain errors and has been criticized by many devs.
Tutorials are a bit shallow.
Insane Google rank, which makes may devs mad.

[HTML5 Doctor](http://html5doctor.com/). Similar to HTML5 rocks,
but 6 guys from famous web related companies. Lots of examples.

### Implementation status

Implementation status sources:

[All modernizr tests](http://modernizr.github.io/Modernizr/test/), cross referenced to Can I use.

[Can I use](http://caniuse.com/).

[kangax compatibility table](http://kangax.github.io/compat-table/es6).

### Demos

A bunch of small examples, which is basically my approach in this repository.

[HTML5 demos](https://github.com/remy/html5demos)

### Security

<https://code.google.com/p/browsersec/wiki/Main>, by a Google employee.
