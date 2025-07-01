EntityEvents.checkSpawn(event => {
  if (event.type == 'JOCKEY') {
    event.cancel()
  }
})