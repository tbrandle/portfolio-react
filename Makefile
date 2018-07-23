setup: init rebuild
start: up
rebuild: clean install

init:
	([ ! -e .git/hooks/pre-push ] || rm .git/hooks/pre-push) && ln -s ../../bin/pre-push .git/hooks

clean:
	rm -rf node_modules

install:
	npm install

build: rebuild
	npm run build

up:
	npm start

test:
	CI=true npm test

ci: test
