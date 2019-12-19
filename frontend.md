# Frontend

## Yarn

One way to install all dependencies and libraries using Yarn. It's a dependency management software. You can install Yarn from NPM using command: `npm i yarn`

After you have installed Yarn, you can install all dependecies with following commands:

`yarn add --save-dev parcel-bundler @types/react @types/react-dom`

`yarn add react react-dom`


## Starting application

Navigate to frontend directory and then run command:

`yarn run start`

That command will start Parcel Bundler. By default, software is running on port `1234`. You can use Nginx and proxy that port to 80 or 443.
