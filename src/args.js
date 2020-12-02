const yargs = require("yargs")
const { I18n, __ } = require("i18n")
const path = require("path")
const i18n = new I18n()

i18n.configure({
  locales: ["en", "ru"],
  directory: path.join(__dirname, "/locales")
})

module.exports = yargs
  .option("file", {
    alias: "f",
    type: "string",
    required: true,
    description: i18n.__("file")
  })
  .option("start", {
    alias: "s",
    type: "number",
    default: 0,
    description: i18n.__("start")
  })
  .option("end", {
    alias: "e",
    type: "number",
    default: 0,
    required: true,
    description: i18n.__("end")
  })
  .option("type", {
    alias: "t",
    type: "string",
    required: true,
    choices: ["m", "mr", "ml", "mt", "mb", "p", "pr", "pl", "pt", "pb"],
    description: i18n.__("type")
  })
  .option("units", {
    alias: "u",
    type: "string",
    choices: ["px", "%", "em", "rem", "vh", "vw", "vmin", "vmax", "ch", "ex"],
    default: "px",
    description: i18n.__("units")
  })
  .boolean("add-units")
  .help()
  .alias("help", "h").argv
