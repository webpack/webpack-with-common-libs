# webpack with common libs

## Build and run

``` sh
# First install dependencies
$ npm install

# And install CLI
$ npm install webpack webpack-dev-server grunt-cli
```

### Native

``` sh
# Build with procuction config
$ webpack -p --colors

# Build with development config
$ webpack -d --colors

$ open index.html
```

``` sh
# Build and watch with development server
$ webpack-dev-server -d --colors

# Just open
$ open http://localhost:8080/

# Auto reloading
$ open http://localhost:8080/webpack-dev-server/xxx.html
# i. e. http://localhost:8080/webpack-dev-server/jquery.html
```

### With grunt

``` sh
# Development server
$ grunt

# Just open
$ open http://localhost:8080/

# Auto reloading
$ open http://localhost:8080/webpack-dev-server/xxx.html
# i. e. http://localhost:8080/webpack-dev-server/jquery.html
```

``` sh
# Build with procuction config
$ grunt build

$ open index.html
```

## Libraries

### jquery + jquery-ui

Files: `jquery.html` with `app/jquery`

jQuery versions `>= 1.10` have commonjs support. For this versions no special config is required.

jQuery version `1.9` has only AMD support, but also needs a `amd: { jQuery: true }` in the `webpack.config.js`

jQuery-ui has no commonjs/AMD support. It expects `jQuery` as global variable. Currently jQuery expose ifself as global variable even if a module system is found, but this may change. One can use the `webpack.ProvidePlugin` (see `webpack.config.js`) to provide modules as (fake) global variables.

