function doButtonRight (event5: string) {
    setController()
    doSendButtonState("right", event5)
    doActionRight(event5)
}
function doActionDown (event83: string) {
    if (event83 == "d") {
        doMoveSprite("down")
    }
}
function doGetEventFromNum (num: number) {
    if (num == 0) {
        return "u"
    } else if (num == 1) {
        return "d"
    } else if (num == 2) {
        return "c"
    }
    return ""
}
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    doButtonFire1("d")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    doButtonRight("c")
})
function doButtonFire2 (event8: string) {
    setController()
    doSendButtonState("fire2", event8)
    doActionFire2(event8)
}
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    doButtonFire2("d")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    doButtonUp("c")
})
function doActionFire1 (event86: string) {
    if (event86 == "d") {
    	
    }
}
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    doButtonRight("u")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    doButtonDown("u")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    doButtonDown("c")
})
function doActionLeft (event84: string) {
    if (event84 == "d") {
        doMoveSprite("left")
    }
}
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    doButtonDown("d")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    doButtonLeft("u")
})
function doActionRight (event85: string) {
    if (event85 == "d") {
        doMoveSprite("right")
    }
}
function doButtonDown (event2: string) {
    setController()
    doSendButtonState("down", event2)
    doActionDown(event2)
}
function doButtonFire1 (event: string) {
    setController()
    doSendButtonState("fire1", event)
    doActionFire1(event)
}
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    doButtonFire2("c")
})
function doMoveSprite (direction: string) {
    if (game.isRunning()) {
        if (!(isController)) {
            if (direction == "up") {
                sprite.change(LedSpriteProperty.Y, -1)
            } else if (direction == "down") {
                sprite.change(LedSpriteProperty.Y, 1)
            } else if (direction == "left") {
                sprite.change(LedSpriteProperty.X, -1)
            } else if (direction == "right") {
                sprite.change(LedSpriteProperty.X, 1)
            }
        }
    }
}
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    doButtonUp("d")
})
function doButtonLeft (event6: string) {
    setController()
    doSendButtonState("left", event6)
    doActionLeft(event6)
}
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    doButtonFire2("u")
})
function doSendButtonState (id2: string, event3: string) {
    if (event3 == "u") {
        radio.sendValue(id2, 0)
    } else if (event3 == "d") {
        radio.sendValue(id2, 1)
    } else if (event3 == "c") {
        radio.sendValue(id2, 2)
    }
}
function setController () {
    if (!(isController)) {
        isController = true
        sprite.delete()
    }
}
function doActionFire2 (event87: string) {
    if (event87 == "d") {
    	
    }
}
function doButtonUp (event4: string) {
    setController()
    doSendButtonState("up", event4)
    doActionUp(event4)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "reset") {
        if (!(isController)) {
            sprite.set(LedSpriteProperty.Y, 2)
            sprite.set(LedSpriteProperty.X, 2)
        }
    }
})
function doActionUp (event82: string) {
    if (event82 == "d") {
        doMoveSprite("up")
    }
}
radio.onReceivedValue(function (name, value) {
    if (name == "up") {
        doActionUp(doGetEventFromNum(value))
    } else if (name == "down") {
        doActionDown(doGetEventFromNum(value))
    } else if (name == "left") {
        doActionLeft(doGetEventFromNum(value))
    } else if (name == "right") {
        doActionRight(doGetEventFromNum(value))
    } else if (name == "fire1") {
        doActionFire1(doGetEventFromNum(value))
    } else if (name == "fire2") {
        doActionFire2(doGetEventFromNum(value))
    }
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    doButtonUp("u")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    doButtonFire1("u")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    doButtonLeft("c")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    doButtonRight("d")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    doButtonFire1("c")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    doButtonLeft("d")
})
let sprite: game.LedSprite = null
let isController = false
radio.setGroup(62)
isController = false
sprite = game.createSprite(2, 2)
radio.sendString("reset")
