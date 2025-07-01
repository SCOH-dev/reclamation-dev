EntityEvents.checkSpawn(event => {
  if (event.type == 'JOCKEY') {
    event.cancel()
  }
})

ServerEvents.loaded(event => {
  if (event.server.persistentData.gameRules) return
  event.server.gameRules.set("doTraderSpawning", false)

  event.server.persistentData.gameRules = true
})