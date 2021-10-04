install:
	npm ci

brain-games:
	node --experimental-modules bin/brain-games.js

brain-even:
	node --experimental-modules bin/brain-even.js

brain-calc:
	node --experimental-modules bin/brain-calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint .