let enabled = false
let radioId = 0
let isController = false
namespace RadioGameController {

    export enum ControllerButtons {
        Up,
        Down,
        Left,
        Right,
        Fire1,
        Fire2
    }

    export enum ControllerButtonEvents {
        //% block="down"
        Down = DAL.MICROBIT_BUTTON_EVT_DOWN,
        //% block="up"
        Up = DAL.MICROBIT_BUTTON_EVT_UP,
        //% block="click"
        Click = DAL.MICROBIT_BUTTON_EVT_CLICK
    }

    export enum ControllerButtonPins {
        //% block="Joypad Up"
        Up = DAL.MICROBIT_ID_IO_P8,
        //% block="Joypad Down"
        Down = DAL.MICROBIT_ID_IO_P14,
        //% block="Joypad Left"
        Left = DAL.MICROBIT_ID_IO_P12,
        //% block="Joypad Right"
        Right = DAL.MICROBIT_ID_IO_P13,
        //% block="Fire 1"
        Fire1 = DAL.MICROBIT_ID_IO_P15,
        //% block="Fire 2"
        Fire2 = DAL.MICROBIT_ID_IO_P16
    }

    //% block
    export function enable(radio2: number, controller: boolean) {
        radioId = radio2
        isController = controller
        enabled = true
        radio.setGroup(radioId)
        radio.sendString("reset")
    }
    //% block
    export function reset() {
        if (enabled) {
            radio.sendString("reset")
        }
    }
    //% block
    export function disable() {
        enabled = false
    }

    //% block
    export function onButtonPress(button: ControllerButtonPins, event: ControllerButtonEvents, handler: Action) {
        control.onEvent(<number>button, <number>event, handler);
    }

    function doActionLeft(event: string) {
        if (event == "u") {
            control.raiseEvent(ControllerButtonPins.Left, ControllerButtonEvents.Up)
        } else if (event == "d") {
            control.raiseEvent(ControllerButtonPins.Left, ControllerButtonEvents.Down)
        } else if (event == "c") {
            control.raiseEvent(ControllerButtonPins.Left, ControllerButtonEvents.Click)
        }
    }
    function doActionRight(event: string) {
        if (event == "u") {
            control.raiseEvent(ControllerButtonPins.Right, ControllerButtonEvents.Up)
        } else if (event == "d") {
            control.raiseEvent(ControllerButtonPins.Right, ControllerButtonEvents.Down)
        } else if (event == "c") {
            control.raiseEvent(ControllerButtonPins.Right, ControllerButtonEvents.Click)
        }

    }
    function doActionReset() {

    }
    function doActionFire2(event: string) {
        if (event == "u") {
            control.raiseEvent(ControllerButtonPins.Fire2, ControllerButtonEvents.Up)
        } else if (event == "d") {
            control.raiseEvent(ControllerButtonPins.Fire2, ControllerButtonEvents.Down)
        } else if (event == "c") {
            control.raiseEvent(ControllerButtonPins.Fire2, ControllerButtonEvents.Click)
        }

    }
    function doActionUp(event: string) {
        if (event == "u") {
            control.raiseEvent(ControllerButtonPins.Up, ControllerButtonEvents.Up)
        } else if (event == "d") {
            control.raiseEvent(ControllerButtonPins.Up, ControllerButtonEvents.Down)
        } else if (event == "c") {
            control.raiseEvent(ControllerButtonPins.Up, ControllerButtonEvents.Click)
        }

    }
    function doActionFire1(event: string) {
        if (event == "u") {
            control.raiseEvent(ControllerButtonPins.Fire1, ControllerButtonEvents.Up)
        } else if (event == "d") {
            control.raiseEvent(ControllerButtonPins.Fire1, ControllerButtonEvents.Down)
        } else if (event == "c") {
            control.raiseEvent(ControllerButtonPins.Fire1, ControllerButtonEvents.Click)
        }

    }
    function doActionDown(event: string) {
        if (event == "u") {
            control.raiseEvent(ControllerButtonPins.Down, ControllerButtonEvents.Up)
        } else if (event == "d") {
            control.raiseEvent(ControllerButtonPins.Right, ControllerButtonEvents.Down)
        } else if (event == "c") {
            control.raiseEvent(ControllerButtonPins.Right, ControllerButtonEvents.Click)
        }

    }

    function doButtonRight(event5: string) {
        if (enabled) {
            doSendButtonState("right", event5)
            doActionRight(event5)
        }
    }
    function doGetEventFromNum(num: number) {
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
    function doButtonFire2(event8: string) {
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
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
        doButtonRight("u")
    })
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
        doButtonDown("u")
    })
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
        doButtonDown("c")
    })
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
        doButtonDown("d")
    })
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
        doButtonLeft("u")
    })
    function doButtonDown(event2: string) {
        if (enabled) {
            doSendButtonState("down", event2)
            doActionDown(event2)
        }
    }
    function doButtonFire1(event: string) {
        if (enabled) {
            doSendButtonState("fire1", event)
            doActionFire1(event)
        }
    }
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
        doButtonFire2("c")
    })
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
        doButtonUp("d")
    })
    function doButtonLeft(event6: string) {
        if (enabled) {
            doSendButtonState("left", event6)
            doActionLeft(event6)
        }
    }
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
        doButtonFire2("u")
    })
    function doSendButtonState(id2: string, event3: string) {
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
    function doButtonUp(event4: string) {
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

}
