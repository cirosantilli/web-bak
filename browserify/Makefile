.PHONY: all clean

all:
	npm install -g browserify
	browserify main.js > bundle.js

clean:
	rm -f bundle.js

view: all
	xdg-open index.html
