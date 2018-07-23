Bowtie React + Recompose Starter Kit
---

## Quick Start

#### Run full setup

```bash
make setup
```

#### Start service(s)

```bash
make start
```

#### Full rebuild

```bash
make rebuild
```

## Contents

- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
- [Testing](#testing)
  - [Linting](#linting)
  - [Unit Tests](#unit-tests)
- [Advanced](#advanced)
  - [Local Environment](#local-environment)

## Getting Started

#### Requirements
- Install [npm](https://nodejs.org/en/download/) `>= 6.2.0`
- If you already have npm and Node.js globaly installed, you can run this command to upgrade to the latest stable version:
`npm install -g npm@latest`

#### Installation
- Install git `pre-push` hook
```bash
ln -s ../../bin/pre-push .git/hooks
```

- Install node_modules (using npm)
```bash
npm install
```

#### Usage

- Start the React App
```bash
npm start
```

- [Visit local instance](http://localhost:3000)

## Testing

#### Linting

- Just lint the code and show warnings
```bash
npm run lint
```
- Lint code and attempt to fix simple issues
```bash
npm run lint:fix
```

#### Unit Tests

- Run ReactJS test suite (interactive)
```bash
npm test
```
- Run ReactJS test suite (CI mode - not interactive)
```bash
CI=true app npm test
```

## Advanced

#### Local Environment

- Create file `.env.development.local`, add entries to customize local dev
