function zero(func = 0) {
    return func == 0 ? 0 : Math.floor(eval(`0${func}`))
  }
  function one(func = 0) {
      return func == 0 ? 1 : Math.floor(eval(`1${func}`))
  }
  function two(func = 0) {
      return func == 0 ? 2 : Math.floor(eval(`2${func}`))
  }
  function three(func = 0) {
      return func == 0 ? 3 : Math.floor(eval(`3${func}`))
  }
  function four(func = 0) {
      return func == 0 ? 4 : Math.floor(eval(`4${func}`))
  }
  function five(func = 0) {
      return func == 0 ? 5 : Math.floor(eval(`5${func}`))
  }
  function six(func = 0) {
      return func == 0 ? 6 : Math.floor(eval(`6${func}`))
  }
  function seven(func = 0) {
      return func == 0 ? 7 : Math.floor(eval(`7${func}`))
  }
  function eight(func = 0) {
      return func == 0 ? 8 : Math.floor(eval(`8${func}`))
  }
  function nine(func = 0) {
      return func == 0 ? 9 : Math.floor(eval(`9${func}`))
  }
  
  function plus(func) {
    return ` + ${func}`
  }
  function minus(func) {
    return ` - ${func}`
  }
  function times(func) {
    return ` * ${func}`
  }
  function dividedBy(func) {
    return ` / ${func}`
  }