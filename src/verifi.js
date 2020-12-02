module.exports = {
  checkType: (type) => {
    switch (type) {
      case "m":
        type = "margin"
        break
      case "mr":
        type = "margin-right"
        break
      case "ml":
        type = "margin-left"
        break
      case "mt":
        type = "margin-top"
        break
      case "mb":
        type = "margin-bottom"
        break
      case "p":
        type = "padding"
        break
      case "pr":
        type = "padding-right"
        break
      case "pl":
        type = "padding-left"
        break
      case "pt":
        type = "padding-top"
        break
      case "pb":
        type = "padding-bottom"
        break
      default:
        type = null
    }
    return type
  },
  checkUnits: (units) => {
    switch (units) {
      case "px":
        units = ""
        break
      case "%":
        units = "per"
        break
      case "em":
        units = "em"
        break
      case "rem":
        units = "rem"
        break
      case "vh":
        units = "vh"
        break
      case "vw":
        units = "vw"
        break
      case "vmin":
        units = "vmin"
        break
      case "vmax":
        units = "vmax"
        break
      case "ex":
        units = "ex"
        break
      case "ch":
        units = "ch"
        break
      default:
        units = "px"
    }
    return units
  }
}
