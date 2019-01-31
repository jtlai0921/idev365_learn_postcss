const postcss = require('postcss')
const cssvariables = require('postcss-css-variables')
var fs = require('fs')

var mycss = fs.readFileSync('src/input.css','utf8')
var output = postcss([
    cssvariables()
])
.process(mycss)
.css

console.log(output)