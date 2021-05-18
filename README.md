# web-optim

> _Optimize Static Web Assets_

## Table of Contents

- [web-optim](#web-optim)
  - [Table of Contents](#table-of-contents)
  - [Local Installation](#local-installation)
  - [Working](#working)

## Local Installation

- Install NodeJS from [here](https://nodejs.org/en/download/current/)

- Install environment

  ```shell
  $ git clone https://github.com/nirantak/web-optim.git && cd web-optim
  $ npm install
  ```

- Run script and keep watching

  ```shell
  $ npm start
  ```

  or

- Run script once

  ```shell
  $ npm run build
  ```

## Working

- [GulpJS](https://gulpjs.com/) is used to for the build script.
- When run, the script does the following
  - Optimize images using gifsicle, jpegtran, optipng, svgo plugins.
  - Autoprefixes and cleans CSS files.
  - Uglifies JS files.
- Put all your files in the **`./src`** directory in their respective subdirectories.
- The compressed output files will be put in the **`./dist`** directory.
