ItemEvents.tooltip(event => {
    event.addAdvanced('create:mechanical_press', (item, advanced, text) => {
        text.add(Text.of('Cannot make plates!').red())
    })
})