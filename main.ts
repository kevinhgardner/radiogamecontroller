/**
 * Provides access to basic micro:bit functionality.
 */
//% color=190 weight=100 icon="\uf1ec" block="Basic Blocks"
namespace RadioGameController {
}

function doButtonRight (event5: string) {
    if (enabled) {
        doSendButtonState("right", event5)
        doActionRight(event5)
    }
}
function doActionDown (event83: string) {
	
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
    if (enabled) {
        doSendButtonState("fire2", event8)
        doActionFire2(event8)
    }
}
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    doButtonFire2("d")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    doButtonUp("c")
})
function doActionFire1 (event86: string) {
	
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
// % block
function enable (radio2: number, controller: boolean) {
    radioId = radio2
    isController = controller
    enabled = true
    radio.setGroup(radioId)
    radio.sendString("reset")
}
function doActionLeft (event84: string) {
	
}
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    doButtonDown("d")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    doButtonLeft("u")
})
function doActionRight (event85: string) {
	
}
function doButtonDown (event2: string) {
    if (enabled) {
        doSendButtonState("down", event2)
        doActionDown(event2)
    }
}
function doButtonFire1 (event: string) {
    if (enabled) {
        doSendButtonState("fire1", event)
        doActionFire1(event)
    }
}
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    doButtonFire2("c")
})
function doActionReset () {
	
}
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    doButtonUp("d")
})
function doButtonLeft (event6: string) {
    if (enabled) {
        doSendButtonState("left", event6)
        doActionLeft(event6)
    }
}
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    doButtonFire2("u")
})
function doSendButtonState (id2: string, event3: string) {
    if (enabled) {
        if (event3 == "u") {
            radio.sendValue(id2, 0)
        } else if (event3 == "d") {
            radio.sendValue(id2, 1)
        } else if (event3 == "c") {
            radio.sendValue(id2, 2)
        }
    }
}
function doActionFire2 (event87: string) {
	
}
function doButtonUp (event4: string) {
    if (enabled) {
        doSendButtonState("up", event4)
        doActionUp(event4)
    }
}
radio.onReceivedString(function (receivedString) {
    if (enabled) {
        if (receivedString == "reset") {
            doActionReset()
        }
    }
})
function doActionUp (event82: string) {
	
}
radio.onReceivedValue(function (name, value) {
    if (enabled) {
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
    }
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    doButtonUp("u")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    doButtonFire1("u")
})
// % block
function disable () {
    enabled = false
}
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    doButtonLeft("c")
})
// % block
function reset () {
    if (enabled) {
        radio.sendString("reset")
    }
}
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    doButtonRight("d")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    doButtonFire1("c")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    doButtonLeft("d")
})
let isController = false
let radioId = 0
let enabled = false
enabled = false
