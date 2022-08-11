var fs = require('fs');

const rawPackageJson = fs.readFileSync('package.json', {encoding: 'utf8', flag:'r'})
const json = JSON.parse(rawPackageJson)
const latestVersion = process.argv.at(-1).split('\n').at(-1)

json.version = latestVersion.match(/^[0-9]+\.[0-9]+\.[0-9]+$/) ? latestVersion : '1.0.0'

const newJson = JSON.stringify(json, null, 2)

fs.writeFileSync('package.json', newJson)