.PHONY: all clean

all: bundle.js

bundle.js: main.js a.js
	browserify main.js > bundle.js

clean:
	rm -f bundle.js
