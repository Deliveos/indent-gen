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
    description: i18n.__("end")
  })
  .option("type", {
    alias: "t",
    type: "string",
    required: true,
    description: i18n.__("type")
  })
  .option("units", {
    alias: "u",
    type: "string",
    default: "px",
    description: i18n.__("units")
  })
  .help()
  .alias("help", "h").argv
