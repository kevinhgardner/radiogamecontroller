RadioGameController.onButtonPress(RadioGameController.ButtonPins.ButtonA, RadioGameController.ButtonEvents.Down, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
RadioGameController.onButtonPress(RadioGameController.ButtonPins.Left, RadioGameController.ButtonEvents.Down, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
RadioGameController.onButtonPress(RadioGameController.ButtonPins.Fire2, RadioGameController.ButtonEvents.Down, function () {
    sprite.set(LedSpriteProperty.X, 2)
})
RadioGameController.onButtonPress(RadioGameController.ButtonPins.Up, RadioGameController.ButtonEvents.Down, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
RadioGameController.onButtonPress(RadioGameController.ButtonPins.ButtonB, RadioGameController.ButtonEvents.Down, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
RadioGameController.onButtonPress(RadioGameController.ButtonPins.ButtonAB, RadioGameController.ButtonEvents.Down, function () {
    sprite.set(LedSpriteProperty.X, 2)
    sprite.set(LedSpriteProperty.Y, 2)
})
RadioGameController.onButtonPress(RadioGameController.ButtonPins.Right, RadioGameController.ButtonEvents.Down, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
RadioGameController.onButtonPress(RadioGameController.ButtonPins.Down, RadioGameController.ButtonEvents.Down, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.Shake, function () {
    RadioGameController.runMotor(100)
})
RadioGameController.onButtonPress(RadioGameController.ButtonPins.Fire1, RadioGameController.ButtonEvents.Up, function () {
    sprite.set(LedSpriteProperty.X, 2)
    sprite.set(LedSpriteProperty.Y, 2)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
let sprite2 = game.createSprite(2, 4)
RadioGameController.enable(123, RadioGameController.Mode.CONTROLLER)
loops.everyInterval(500, function () {
    if (RadioGameController.buttonIsPressed(RadioGameController.ButtonPins.ButtonA) || RadioGameController.buttonIsPressed(RadioGameController.ButtonPins.Left)) {
        sprite2.move(-1)
    } else if (RadioGameController.buttonIsPressed(RadioGameController.ButtonPins.ButtonB) || RadioGameController.buttonIsPressed(RadioGameController.ButtonPins.Right)) {
        sprite2.move(1)
    } else {
        sprite2.set(LedSpriteProperty.X, 2)
    }
})
