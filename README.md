# Project-Collab

Project-Collab is a web application that allows Computer Science folks to find projects that they're interested in and collaborate with their peers. The aim for this project is to enhance collaboration and community building within the Computer Science Community.

#### What's Provided

The root directory is setup with Node.js with Express Framework and MongoDB with Mongoose Framework, Everything except for the client folder is server related code.

The Client folder is created with the Vue.js CLI. The container app is in `src/App.vue`, files for each view are in `src/views` along with all the components for the specific view. The main view component will the be same as the folder name it is in.

## Getting Started

For programmers new to web development, checkout the issues tab and filter for issues that are "good first issue"

#### Setup

Please ensure you have the Node Package Manager(npm). You could download [here](https://www.npmjs.com/get-npm)

After forking the repo and cloning onto your local machine, run the following to checkout the skeletal template

```
npm run update
npm run dev
```

Then checkout localhost:5000 on your browser

This is the current build of your local development, only changes to server code will be detected here. Any changes to client code will not be detected here. Thus this is meant for testing server side code.

#### local development

navigate into your client folder and run:

```
npm run serve
```

Then checkout localhost:8080 on your browser

Changes to client code will be reflected onto the browser, so use this to test client side code.

#### Getting Data

In the `sample_data` folder, you will see `.json` files with names corresponding to a view name. These data are imported into the corresponding views for you to make use of. Currently no backend has been setup, you will make GET and POST requests later on.

## Code Style and Tools

Use tabs and set 4 spaces per tab.

#### Variable Naming

USE CAPS for constants  
use_underscore_case for javascript variables  
use-dash-case for CSS classes  
use **VERBS** for function names

#### Prettier

[Prettier](https://prettier.io/) is a powerful js-linter that helps you format your code.
I use the prettier plugin for Atom.

#### Vue.js formatter

Prettier doesn't format/indent elements within <template> and <style>, please find a vue formatter that does so.
I use `vue-format` for atom, but that's a Atom specific plugin.

#### Editor (optional)

I use [Atom](https://atom.io/) editor, it has nice formating tool and integration with prettier and vue.js formatter. If you are using Atom, I could help you out with setup the config files.

## Pull Request(PR) Rules

Please try to follow these rules when making a pull request

#### Minimum commits

Each PR should focus on one particular feature, which means it should be compressed to 1 commit.

#### Code Style MUST remain consistent

This means running the vue formatter and prettier for all .vue files, I want to make code reviews relatively easy to read.

#### Branches

To begin, feel free to make a pull request to the `feature_test` branch for any ideas you'd like to test out or add to this project. **Note** the `feature_test` branch will not be up to date with the most stable version of the code and will be cleaned up every so often.

Currently, the main branch you should be aware of is the `Development` Branch, which will be main branch to make PRs.
`Development` Branch will be the main branch for any pull request regarding new features

## What's Next

I will populate the MongoDB with sample data
