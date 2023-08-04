# Catcher

This repo the Catcher game

## Setup

To set up the app for local development:

```
git clone https://github.com/wdev733/catcher-game-app.git
cd catcher-game-app

### Local Development

# Getting environment variables set
cp .env.example .env

After seeing your .env file, make sure to replace placeholders with your Api Key

API_CATCHER_GAME_SERVICE_BASE_URL=YOUR_API_CATCHER_GAME_SERVICE_BASE_URL
```

## Test

```
npm run test  # run all tests
npm run test:watch # run all tests in watch mode
npm run test:coverage # generate coverage report
```

## Run

```
npm install
npm run dev
```

You can see the website at [http://localhost:3000](http://localhost:3000)
