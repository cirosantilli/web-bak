.PHONY: clean

png.png: pbm.pbm
	mkdir -p _out/
	convert pbm.pbm _out/png.png

clean:
	rm -rf _out

ubuntu_install_deps:
	sudo aptitude install imagemagick
