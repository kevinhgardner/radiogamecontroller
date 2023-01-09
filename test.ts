RadioGameController.onButtonPress(RadioGameController.ButtonPins.Down, RadioGameController.ButtonEvents.Up, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
RadioGameController.onButtonPress(RadioGameController.ButtonPins.Up, RadioGameController.ButtonEvents.Up, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
RadioGameController.onButtonPress(RadioGameController.ButtonPins.Fire2, RadioGameController.ButtonEvents.Up, function () {
    sprite.set(LedSpriteProperty.X, 2)
})
RadioGameController.onButtonPress(RadioGameController.ButtonPins.ButtonA, RadioGameController.ButtonEvents.Up, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
RadioGameController.onButtonPress(RadioGameController.ButtonPins.ButtonAB, RadioGameController.ButtonEvents.Up, function () {
    sprite.set(LedSpriteProperty.X, 2)
    sprite.set(LedSpriteProperty.Y, 2)
})
input.onGesture(Gesture.Shake, function () {
    RadioGameController.runMotor(100)
})
RadioGameController.onButtonPress(RadioGameController.ButtonPins.ButtonB, RadioGameController.ButtonEvents.Up, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
RadioGameController.onButtonPress(RadioGameController.ButtonPins.Left, RadioGameController.ButtonEvents.Up, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
RadioGameController.onButtonPress(RadioGameController.ButtonPins.Right, RadioGameController.ButtonEvents.Up, function () {
    sprite.change(LedSpriteProperty.X, 1)
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
    if (RadioGameController.buttonIsPressed(RadioGameController.ButtonPins.ButtonA) || RadioGameController.buttonIsPressed(RadioGameController.ButtonPins.ButtonA)) {
        sprite2.move(-1)
    } else if (RadioGameController.buttonIsPressed(RadioGameController.ButtonPins.ButtonB) || RadioGameController.buttonIsPressed(RadioGameController.ButtonPins.ButtonB)) {
        sprite2.move(1)
    } else {
        sprite2.set(LedSpriteProperty.X, 2)
    }
})
