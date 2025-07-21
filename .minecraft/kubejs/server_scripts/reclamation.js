EntityEvents.spawned(event => {
  const entity = event.entity;

  if (entity.type == 'minecraft:chicken') {
    const passengers = entity.passengers;
    if (passengers && passengers.length > 0) {
      event.cancel()
    }
  }
})

ServerEvents.loaded(event => {
  if (event.server.persistentData.gameRules) return
  event.server.gameRules.set("doTraderSpawning", false)
  event.server.runCommandSilent('difficulty hard')

  event.server.persistentData.gameRules = true
})