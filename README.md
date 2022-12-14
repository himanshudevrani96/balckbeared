<div align="center" style="margin-top:20px">

[![BlackBeard (./src//assets/images/logo.svg)]()
### BlackBeard
</div>
<hr>

## Docs
- [Technical](#contributing)
  - [Codebase](#codebase)
    - [Technologies](#technologies)
    - [Folder Structure](#folder-structure)
    - [Code Style](#code-style)
  - [First time setup](#first-time-setup)
  - [Running the app locally](#running-the-app-locally)

#### Technologies
let's talk about the coarse architecture of this repo:
- **Typescript**: We use React to power our frontend apps. Almost all of the code you'll touch in this codebase will be Typescript.
  Here is a list of technologies we use:
- **React**: Frontend React app

#### Folder structure
```sh
BlackBeard Architecture/
    ├── ...
    ├── src                    # source file of the app
    │   ├── asset              # Asset of the app like image,fonts
    │   ├── blockchain         # Blockchain related files and foldrs
    │   ├── logic              # Related to Redux file
    │   ├── modules             # Modules contains the app page and route setup
    │   ├── shared             # Shared folder contain the reusable components
    │   └── styles             # It contains the global style of the app
    ├──public
    ├── ...
```
#### Code Style
- We follow proper naming convention like for folder we are using `camel Case` for files `Pascal Case` and function name should be in `camel Case`.
- We are following Prettier to proper format the code.
##### Rules
- **No `console.log`s in any file**: we are removing `console.log` after develping done.
### First time setup
The first step to running BlackBeard locally is downloading the code by cloning the repository:
```sh
git clone https://github.com/himanshudevrani96/balckbeared.git
```
After clone install the node modules:
```sh
yarn or npm install
```
### Running the app locally
To start the React server locally
```sh
yarn start or npm start 
```
