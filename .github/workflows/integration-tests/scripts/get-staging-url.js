const fs = require('fs')
// Read from stdin
const stackInfoFile = fs.readFileSync(0, 'utf-8')

const stackInfo = JSON.parse(stackInfoFile)

const outputs = stackInfo[0].outputs

const url = outputs.filter(out => out.OutputKey === 'API')[0].OutputValue

if (!url) {
  throw new Error('App name not found')
}
else  {
  process.stdout.write(url)
}