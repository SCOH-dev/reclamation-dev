EntityEvents.checkSpawn(event => {
  try {
    if (event.entity.isChickenJockey()) event.cancel()
  } catch(error) {}
})

ServerEvents.loaded(event => {
  if (event.server.persistentData.gameRules) return
  event.server.gameRules.set("doTraderSpawning", false)
  event.server.runCommandSilent('difficulty hard')

  event.server.persistentData.gameRules = true
})