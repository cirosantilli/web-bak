.PHONY: all clean

all:
	npm install uniq
	browserify main.js > bundle.js

run: all
	firefox index.html

clean:
	rm -f bundle.js
