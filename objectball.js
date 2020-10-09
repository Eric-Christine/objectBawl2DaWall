const fs = require('fs')
const path = require('path')
let rawdata = fs.readFileSync(path.resolve(__dirname, 'gameStats.json'));
let gameStats = JSON.parse(rawdata);

console.log(gameStats)