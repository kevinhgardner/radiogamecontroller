
//% weight=100 color=#00A654 icon="\uf11b" block=":Radio GAME Controller"
//% groups='["Inputs", "Feedback"]'
namespace RadioGameController {

    let handlers: Action[][];
    let enabled: boolean;

    export enum RadioControllerButtonPins {
        //% block="Joypad Up (P8)"
        Up = DAL.MICROBIT_ID_IO_P8,
        //% block="Joypad Down (P14)"
        Down = DAL.MICROBIT_ID_IO_P14,
        //% block="Joypad Left (P12)"
        Left = DAL.MICROBIT_ID_IO_P12,
        //% block="Joypad Right (P13)"
        Right = DAL.MICROBIT_ID_IO_P13,
        //% block="Fire 1 (P15)"
        Fire1 = DAL.MICROBIT_ID_IO_P15,
        //% block="Fire 2 (P16)"
        Fire2 = DAL.MICROBIT_ID_IO_P16,
        //% block="Button A"
        ButtonA = DAL.MICROBIT_ID_BUTTON_A,
        //% block="Button B"
        ButtonB = DAL.MICROBIT_ID_BUTTON_B,
        //% block="Button AB"
        ButtonAB = DAL.MICROBIT_ID_BUTTON_AB
    }

    export enum RadioControllerButtonEvents {
        //% block="down"
        Down = DAL.MICROBIT_BUTTON_EVT_DOWN,
        //% block="up"
        Up = DAL.MICROBIT_BUTTON_EVT_UP,
        //% block="click"
        Click = DAL.MICROBIT_BUTTON_EVT_CLICK
    }

    //% block
    export function enable(radioId: number) {
        if (!enabled) {
            init(radioId, false)
        }
    }

    //% block
    export function enableNoController(radioId: number) {
        if (!enabled) {
            init(radioId, true)
        }
    }

    //% block
    export function onButtonPress(button: RadioControllerButtonPins, event: RadioControllerButtonEvents, handler: Action) {
        if (!handlers) {
            handlers = [];
        }
        if (!handlers[button]) {
            handlers[button] = [];
        }
        handlers[button][event] = handler;
    }

    function init(radioId: number, noController: boolean) {
        enabled=true;
        radio.setGroup(radioId)

        control.onEvent(RadioControllerButtonPins.ButtonAB, RadioControllerButtonEvents.Up, () => doAction(RadioControllerButtonPins.ButtonAB, RadioControllerButtonEvents.Up))
        control.onEvent(RadioControllerButtonPins.ButtonA, RadioControllerButtonEvents.Up, () => doAction(RadioControllerButtonPins.ButtonA, RadioControllerButtonEvents.Up))
        control.onEvent(RadioControllerButtonPins.ButtonB, RadioControllerButtonEvents.Up, () => doAction(RadioControllerButtonPins.ButtonB, RadioControllerButtonEvents.Up))
        control.onEvent(RadioControllerButtonPins.Up, RadioControllerButtonEvents.Up, () => doAction(RadioControllerButtonPins.Up, RadioControllerButtonEvents.Up))
        control.onEvent(RadioControllerButtonPins.Down, RadioControllerButtonEvents.Up, () => doAction(RadioControllerButtonPins.Down, RadioControllerButtonEvents.Up))
        control.onEvent(RadioControllerButtonPins.Left, RadioControllerButtonEvents.Up, () => doAction(RadioControllerButtonPins.Left, RadioControllerButtonEvents.Up))
        control.onEvent(RadioControllerButtonPins.Right, RadioControllerButtonEvents.Up, () => doAction(RadioControllerButtonPins.Right, RadioControllerButtonEvents.Up))
        control.onEvent(RadioControllerButtonPins.Fire1, RadioControllerButtonEvents.Up, () => doAction(RadioControllerButtonPins.Fire1, RadioControllerButtonEvents.Up))
        control.onEvent(RadioControllerButtonPins.Fire2, RadioControllerButtonEvents.Up, () => doAction(RadioControllerButtonPins.Fire2, RadioControllerButtonEvents.Up))

        control.onEvent(RadioControllerButtonPins.ButtonAB, RadioControllerButtonEvents.Down, () => doAction(RadioControllerButtonPins.ButtonAB, RadioControllerButtonEvents.Down))
        control.onEvent(RadioControllerButtonPins.ButtonA, RadioControllerButtonEvents.Down, () => doAction(RadioControllerButtonPins.ButtonA, RadioControllerButtonEvents.Down))
        control.onEvent(RadioControllerButtonPins.ButtonB, RadioControllerButtonEvents.Down, () => doAction(RadioControllerButtonPins.ButtonB, RadioControllerButtonEvents.Down))
        control.onEvent(RadioControllerButtonPins.Up, RadioControllerButtonEvents.Down, () => doAction(RadioControllerButtonPins.Up, RadioControllerButtonEvents.Down))
        control.onEvent(RadioControllerButtonPins.Down, RadioControllerButtonEvents.Down, () => doAction(RadioControllerButtonPins.Down, RadioControllerButtonEvents.Down))
        control.onEvent(RadioControllerButtonPins.Left, RadioControllerButtonEvents.Down, () => doAction(RadioControllerButtonPins.Left, RadioControllerButtonEvents.Down))
        control.onEvent(RadioControllerButtonPins.Right, RadioControllerButtonEvents.Down, () => doAction(RadioControllerButtonPins.Right, RadioControllerButtonEvents.Down))
        control.onEvent(RadioControllerButtonPins.Fire1, RadioControllerButtonEvents.Down, () => doAction(RadioControllerButtonPins.Fire1, RadioControllerButtonEvents.Down))
        control.onEvent(RadioControllerButtonPins.Fire2, RadioControllerButtonEvents.Down, () => doAction(RadioControllerButtonPins.Fire2, RadioControllerButtonEvents.Down))

        control.onEvent(RadioControllerButtonPins.ButtonAB, RadioControllerButtonEvents.Click, () => doAction(RadioControllerButtonPins.ButtonAB, RadioControllerButtonEvents.Click))
        control.onEvent(RadioControllerButtonPins.ButtonA, RadioControllerButtonEvents.Click, () => doAction(RadioControllerButtonPins.ButtonA, RadioControllerButtonEvents.Click))
        control.onEvent(RadioControllerButtonPins.ButtonB, RadioControllerButtonEvents.Click, () => doAction(RadioControllerButtonPins.ButtonB, RadioControllerButtonEvents.Click))
        control.onEvent(RadioControllerButtonPins.Up, RadioControllerButtonEvents.Click, () => doAction(RadioControllerButtonPins.Up, RadioControllerButtonEvents.Click))
        control.onEvent(RadioControllerButtonPins.Down, RadioControllerButtonEvents.Click, () => doAction(RadioControllerButtonPins.Down, RadioControllerButtonEvents.Click))
        control.onEvent(RadioControllerButtonPins.Left, RadioControllerButtonEvents.Click, () => doAction(RadioControllerButtonPins.Left, RadioControllerButtonEvents.Click))
        control.onEvent(RadioControllerButtonPins.Right, RadioControllerButtonEvents.Click, () => doAction(RadioControllerButtonPins.Right, RadioControllerButtonEvents.Click))
        control.onEvent(RadioControllerButtonPins.Fire1, RadioControllerButtonEvents.Click, () => doAction(RadioControllerButtonPins.Fire1, RadioControllerButtonEvents.Click))
        control.onEvent(RadioControllerButtonPins.Fire2, RadioControllerButtonEvents.Click, () => doAction(RadioControllerButtonPins.Fire2, RadioControllerButtonEvents.Click))
    }


    function doAction(button: RadioControllerButtonPins, event: RadioControllerButtonEvents) {
        doSendButtonState(button, event)
        if (handlers[button] && handlers[button][event]) {
            handlers[button][event]()
        }
    }

    function doSendButtonState(button: RadioControllerButtonPins, event: RadioControllerButtonEvents) {
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
