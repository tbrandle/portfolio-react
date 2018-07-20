setup: init rebuild
start: up
rebuild: clean install

init:
	([ ! -e .git/hooks/pre-push ] || rm .git/hooks/pre-push) && ln -s ../../bin/pre-push .git/hooks

clean:
	rm -rf node_modules

install:
	yarn install

build: rebuild
	yarn build

up:
	yarn start

test:
	CI=true yarn test

ci: test
