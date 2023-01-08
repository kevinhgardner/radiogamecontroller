RadioGameController.onButtonPress(RadioGameController.RadioControllerButtonPins.ButtonB, RadioGameController.RadioControllerButtonEvents.Up, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
RadioGameController.onButtonPress(RadioGameController.RadioControllerButtonPins.Fire2, RadioGameController.RadioControllerButtonEvents.Up, function () {
    sprite.set(LedSpriteProperty.X, 2)
})
RadioGameController.onButtonPress(RadioGameController.RadioControllerButtonPins.Right, RadioGameController.RadioControllerButtonEvents.Up, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
RadioGameController.onButtonPress(RadioGameController.RadioControllerButtonPins.Up, RadioGameController.RadioControllerButtonEvents.Up, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
RadioGameController.onButtonPress(RadioGameController.RadioControllerButtonPins.Left, RadioGameController.RadioControllerButtonEvents.Up, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
RadioGameController.onButtonPress(RadioGameController.RadioControllerButtonPins.Fire1, RadioGameController.RadioControllerButtonEvents.Up, function () {
    sprite.set(LedSpriteProperty.X, 2)
    sprite.set(LedSpriteProperty.Y, 2)
})
RadioGameController.onButtonPress(RadioGameController.RadioControllerButtonPins.Down, RadioGameController.RadioControllerButtonEvents.Up, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
RadioGameController.onButtonPress(RadioGameController.RadioControllerButtonPins.ButtonAB, RadioGameController.RadioControllerButtonEvents.Up, function () {
    sprite.set(LedSpriteProperty.X, 2)
    sprite.set(LedSpriteProperty.Y, 2)
})
RadioGameController.onButtonPress(RadioGameController.RadioControllerButtonPins.ButtonA, RadioGameController.RadioControllerButtonEvents.Up, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
RadioGameController.enable(123)
