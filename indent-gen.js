const fs = require("fs")
const verifi = require("./src/verifi")
const args = require("./src/args")

const argv = args

let type = verifi.checkType(argv.type)
let units = verifi.checkUnits(argv.units) || "px"

if (type) {
  if (units) {
    for (let i = argv.start || 0; i <= argv.end; i++) {
      fs.appendFileSync(
        argv.file,
        `.${argv.type}-${i} { ${type}: ${i}${argv.units}; }\n`
      )
    }
  }
}

console.log("SUCCESS")
