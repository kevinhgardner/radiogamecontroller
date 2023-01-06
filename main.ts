namespace RadioGameController {

    let isController = false;
    let enabled = false;
    let handlers: Action[][] = [[]];

    export enum RadioGameControllerButtons {
        //% block="Joypad Up"
        Up = Kitronik_Game_Controller.ControllerButtonPins.Up,
        //% block="Joypad Down"
        Down = Kitronik_Game_Controller.ControllerButtonPins.Down,
        //% block="Joypad Left"
        Left = Kitronik_Game_Controller.ControllerButtonPins.Left,
        //% block="Joypad Right"
        Right = Kitronik_Game_Controller.ControllerButtonPins.Right,
        //% block="Joypad Fire1"
        Fire1 = Kitronik_Game_Controller.ControllerButtonPins.Fire1,
        //% block="Joypad Fire2"
        Fire2 = Kitronik_Game_Controller.ControllerButtonPins.Fire2,
        //% block="Button A"
        ButtonA = DAL.MICROBIT_ID_BUTTON_A,
        //% block="Button B"
        ButtonB = DAL.MICROBIT_ID_BUTTON_B,
        //% block="Button AB"
        ButtonAB = DAL.MICROBIT_ID_BUTTON_AB,
    }

    export enum RadioGameControllerButtonEvents {
        //% block="up"
        Up = Kitronik_Game_Controller.ControllerButtonEvents.Up,
        //% block="down"
        Down = Kitronik_Game_Controller.ControllerButtonEvents.Down,
        //% block="click"
        Click = Kitronik_Game_Controller.ControllerButtonEvents.Click,
    }

    //% block
    export function enable(radioId: number) {
        if (!enabled) {
            init(radioId)
        }
    }

    //% block
    export function onButtonPress(button: RadioGameControllerButtons, event: RadioGameControllerButtonEvents, handler: Action) {
        if (!handlers[button]) {
            handlers[button] = [];
        }
        handlers[button][event] = handler;
    }

    function init(radioId: number) {
        enabled = true;
        radio.setGroup(radioId)
        Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
            doAction(RadioGameControllerButtons.Up, RadioGameControllerButtonEvents.Up)
        })
        Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
            doAction(RadioGameControllerButtons.Up, RadioGameControllerButtonEvents.Down)
        })
        Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
            doAction(RadioGameControllerButtons.Up, RadioGameControllerButtonEvents.Click)
        })
        Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
            doAction(RadioGameControllerButtons.Down, RadioGameControllerButtonEvents.Up)
        })
        Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
            doAction(RadioGameControllerButtons.Down, RadioGameControllerButtonEvents.Down)
        })
        Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
            doAction(RadioGameControllerButtons.Down, RadioGameControllerButtonEvents.Click)
        })
        Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
            doAction(RadioGameControllerButtons.Right, RadioGameControllerButtonEvents.Up)
        })
        Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
            doAction(RadioGameControllerButtons.Right, RadioGameControllerButtonEvents.Down)
        })
        Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
            doAction(RadioGameControllerButtons.Right, RadioGameControllerButtonEvents.Click)
        })
        Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
            doAction(RadioGameControllerButtons.Left, RadioGameControllerButtonEvents.Up)
        })
        Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
            doAction(RadioGameControllerButtons.Left, RadioGameControllerButtonEvents.Down)
        })
        Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
            doAction(RadioGameControllerButtons.Left, RadioGameControllerButtonEvents.Click)
        })
        Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
            doAction(RadioGameControllerButtons.Fire1, RadioGameControllerButtonEvents.Up)
        })
        Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
            doAction(RadioGameControllerButtons.Fire1, RadioGameControllerButtonEvents.Down)
        })
        Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
            doAction(RadioGameControllerButtons.Fire1, RadioGameControllerButtonEvents.Click)
        })
        Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
            doAction(RadioGameControllerButtons.Fire2, RadioGameControllerButtonEvents.Up)
        })
        Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
            doAction(RadioGameControllerButtons.Fire2, RadioGameControllerButtonEvents.Down)
        })
        Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
            doAction(RadioGameControllerButtons.Fire2, RadioGameControllerButtonEvents.Click)
        })
        input.onButtonPressed(Button.A, function () {
            doAction(RadioGameControllerButtons.ButtonA, RadioGameControllerButtonEvents.Click)
            doAction(RadioGameControllerButtons.ButtonA, RadioGameControllerButtonEvents.Up)
            doAction(RadioGameControllerButtons.ButtonA, RadioGameControllerButtonEvents.Down)
        })
        input.onButtonPressed(Button.B, function () {
            doAction(RadioGameControllerButtons.ButtonB, RadioGameControllerButtonEvents.Click)
            doAction(RadioGameControllerButtons.ButtonB, RadioGameControllerButtonEvents.Up)
            doAction(RadioGameControllerButtons.ButtonB, RadioGameControllerButtonEvents.Down)
        })
        input.onButtonPressed(Button.AB, function () {
            doAction(RadioGameControllerButtons.ButtonAB, RadioGameControllerButtonEvents.Click)
            doAction(RadioGameControllerButtons.ButtonAB, RadioGameControllerButtonEvents.Up)
            doAction(RadioGameControllerButtons.ButtonAB, RadioGameControllerButtonEvents.Down)
        })

    }

    function doAction(button: RadioGameControllerButtons, event: RadioGameControllerButtonEvents) {
        doSendButtonState(button, event)
        if (handlers[button] && handlers[button][event]) {
            handlers[button][event]()
        }
    }

    function doSendButtonState(button: RadioGameControllerButtons, event: RadioGameControllerButtonEvents) {
        radio.sendValue("rgc_" + button, event)
    }

    radio.onReceivedValue(function (name, value) {
        if (enabled) {
            let splitted = name.split("_")
            if (splitted[0].compare("rgc_")) {
                let b = parseInt(splitted[1])
                if (handlers[b] && handlers[b][value]) {
                    handlers[b][value]()
                }
            }
        }
    })


}
