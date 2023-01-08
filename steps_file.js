const { I } = inject();

module.exports = function() {
  return actor({

    waitAndTap: function(locator, timeout = 5) {
      this.waitForElement(locator, timeout)
      this.tap(locator)
    },

    async doASwipe(params = {}){
      let 
        from, 
        to, 
        direction = "elementCenter -> screenCenter"
      if(params.hasOwnProperty("from"))
        from = await this.grabElementBoundingRect(params["from"])
      else
        throw new Error(`[doASwipe] param 'from' are required`)
      if(params.hasOwnProperty("to")) to = await this.grabElementBoundingRect(params["to"])
      if(params.hasOwnProperty("direction")){
        direction = params["direction"]
        if(typeof direction != "string") throw new Error(`[doASwipe] param 'direction' need to be a string`)
      }

      if(to == undefined){  // To undefined
        if(direction.includes("->")){ // Direction are two
          let dirs = direction.split("->")
          return this.performSwipe(await this.getOptions(from, dirs[0]), await this.getOptions(from, dirs[1]))
        }else  // Direction are just a string
          return this.performSwipe(await this.getOptions(from, "elementCenter"), await this.getOptions(from, direction))
      }else{  // To exists
        if(direction.includes("->")){ // Direction are two
          let dirs = direction.split("->")
          return this.touchPerform(await this.getOptions(from, dirs[0]), await this.getOptions(undefined, dirs[1]))
        }else  // Direction are just a string
          return this.touchPerform(await this.getOptions(from, direction), await this.getOptions(to, direction))
      }
    }
  })
}