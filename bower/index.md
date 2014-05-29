---
title: Bower
layout: default
---

Bower is a package manager for web front-end.

Bower was created by Twitter and open sourced.

Bower is similar to Ruby Bundler and Node NPM, but it is specialized for web front end files.

Bower downloads the desired version of packages into the current project tree, where they can be linked from `script` or `style` tags. Sample usage: <test.html>

Sample directory structure:

    bower_components
        jquery
            jquery.js
            jquery.min.js
            jquery.min.map
        modernizr
            modernizr.js

TODO: why not use Git submodules instead?

In most cases, it is possible to package Javascript both with NPM and Bower. The main difference is that Bower is focused on front-end, and can also handle HTML and CSS, while NPM deals only with backend Javascript.

Install:

    npm install -g bower

Search for package:

    bower search <package>

Install package:

    bower install <package>

Install packages in `bower.json`:

    bower install

Configuration file: `bower.json`. Used to be called `components.json`.
