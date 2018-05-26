# Project-Collab

Project-Collab is a web application that allows Computer Science folks to find projects that they're interested in and collaborate with their peers. The aim for this project is to enhance collaboration and community building within the Computer Science Community.

#### What's Provided

Project folder created with the Vue.js CLI. The container app is in `src/App.vue`, files for each view are in `src/views` along with all the components for the specific view. The main view component will the be same as the folder name it is in.

#### Getting Data

In the `sample_data` folder, you will see `.json` files with names corresponding to a view name. These data are imported into the corresponding views for you to make use of. Currently no backend has been setup, you will make GET and POST requests later on.

## Setup

Please ensure you have the Node Package Manager(npm). You could download [here](https://www.npmjs.com/get-npm)

After forking the repo and cloning onto your local machine, run the following to checkout the skeletal template

```
npm run update
npm run dev
```

Then checkout localhost:5000 on your browser

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

## Task (Functionality focused, Styling can come later)

To create a one-page Vue.js app that is an simplified project posting website.
The app's default page wills show a Menu bar along with the dashboard of a user.
In all, there are 5 views, 4 of which can directly be navigated to from the Menu Bar:

#### The Menu Bar consists of 4 navigation:

1.  Dashboard (Contains all information of user)
2.  Search (Allow user to search for projects)
3.  Create Project (Allow user to create project)
4.  Settings (Allow user to update profile or delete account)

## What's Next

I will setup mongoDB instance and populate with sample data
