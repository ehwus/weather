# Weather

A simple web app for finding the weather in a given location, providing basic information with a relevant GIF. Implemented with TypeScript and Webpack, and deployed on Netlify here: https://app.netlify.com/sites/elastic-kilby-4148ab/overview

This was an exercise to practice using TypeScript with Webpack, as well as to practice working with APIs using Fetch.

![Screenshot of the app](./screenshot/app.png)

## Usage

```
# ensure that you have a recent version of Node installed (https://nodejs.org/en)
$ git clone https://github.com/ehwus/weather
$ cd ./weather
$ npm install
$ npm build
```
You can then use a static hosting solution to serve index.html. In production, set the environmental variable ENVIRONMENT to production, as this will ensure that webpack builds with full optimisation in mind.