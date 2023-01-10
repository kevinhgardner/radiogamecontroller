
//% weight=100 color=#00A654 icon="\uf11b" block=":Radio GAME Controller"
//% groups='["Radio", "Inputs", "Feedback"]'
namespace RadioGameController {

    let handlers: {[x: number]: {[y: number]: Action}};
    let remoteState: {[x: number]: number} = {}; // 0: up, 1: down
    let enabled: boolean;
    let mode: Mode;

    export enum ButtonPins {
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

    export enum ButtonEvents {
        //% block="down"
        Down = DAL.MICROBIT_BUTTON_EVT_DOWN,
        //% block="up"
        Up = DAL.MICROBIT_BUTTON_EVT_UP,
        //% block="click"
        Click = DAL.MICROBIT_BUTTON_EVT_CLICK
    }

    export enum Mode {
        //% block="Controller"
        CONTROLLER,
        //% block="Slave"
        SLAVE
    }

    //% group=Radio
    //% blockId="radio_enable" block="Enable with radioId $radioId for mode $mode"
    //% weight=95 blockGap=8
    export function enable(radioId: number, mode: Mode) {
        if (!enabled) {
            initRadio(radioId, mode)
        }
    }

    /**
     * Determines if a :GAME Controller button is pressed
     * @param button press to be checked
     */
    //% group=Inputs
    //% blockId="kevin_controller_ispressed" block="button %button|is pressed"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% weight=95 blockGap=8
    export function buttonIsPressed(button: ButtonPins): boolean {
        if (remoteState[button]) {
            return true;
        }
        return false;
    }

    /**
     *
     */
    //% shim=RadioGameController::init
    function init(): void {
        return;
    }

    /**
     * Do something when one of the :GAME Controller Buttons is pressed
     * @param button press to be checked
     * @param event happening on the button, eg: click
     */
    //% group=Inputs
    //% blockId="kevin_controller_button_press_on_event" block="on button %button|press %event"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% weight=93 blockGap=8
    export function onButtonPress(button: ButtonPins, event: ButtonEvents, handler: Action) {
        if (!handlers) {
            handlers = {};
        }
        if (!handlers[button]) {
            handlers[button] = {};
        }
        handlers[button][event] = handler;
    }

    /**
     * Run vibration motor for a particular length of time
     * @param run_time is the length of time the motor will run in ms, eg: 100
     */
    //% group=Feedback
    //% blockId="kevin_controller_run_motor" block="Run motor for %run_time|ms" icon="\uf080"
    //% weight=92 blockGap=8
    export function runMotor(run_time: number): void {
        doRequestMotorRun(run_time)
    }

    function initRadio(radioId: number, m: Mode) {
        if (m == Mode.CONTROLLER) {
            init()
        }
        enabled=true;
        radio.setGroup(radioId)
        if (!handlers) {
            handlers = {};
        }

        mode = m;
        if (m == Mode.CONTROLLER) {
            control.onEvent(ButtonPins.ButtonAB, ButtonEvents.Up, () => doAction(ButtonPins.ButtonAB, ButtonEvents.Up))
            control.onEvent(ButtonPins.ButtonA, ButtonEvents.Up, () => doAction(ButtonPins.ButtonA, ButtonEvents.Up))
            control.onEvent(ButtonPins.ButtonB, ButtonEvents.Up, () => doAction(ButtonPins.ButtonB, ButtonEvents.Up))
            control.onEvent(ButtonPins.Up, ButtonEvents.Up, () => doAction(ButtonPins.Up, ButtonEvents.Up))
            control.onEvent(ButtonPins.Down, ButtonEvents.Up, () => doAction(ButtonPins.Down, ButtonEvents.Up))
            control.onEvent(ButtonPins.Left, ButtonEvents.Up, () => doAction(ButtonPins.Left, ButtonEvents.Up))
            control.onEvent(ButtonPins.Right, ButtonEvents.Up, () => doAction(ButtonPins.Right, ButtonEvents.Up))
            control.onEvent(ButtonPins.Fire1, ButtonEvents.Up, () => doAction(ButtonPins.Fire1, ButtonEvents.Up))
            control.onEvent(ButtonPins.Fire2, ButtonEvents.Up, () => doAction(ButtonPins.Fire2, ButtonEvents.Up))

            control.onEvent(ButtonPins.ButtonAB, ButtonEvents.Down, () => doAction(ButtonPins.ButtonAB, ButtonEvents.Down))
            control.onEvent(ButtonPins.ButtonA, ButtonEvents.Down, () => doAction(ButtonPins.ButtonA, ButtonEvents.Down))
            control.onEvent(ButtonPins.ButtonB, ButtonEvents.Down, () => doAction(ButtonPins.ButtonB, ButtonEvents.Down))
            control.onEvent(ButtonPins.Up, ButtonEvents.Down, () => doAction(ButtonPins.Up, ButtonEvents.Down))
            control.onEvent(ButtonPins.Down, ButtonEvents.Down, () => doAction(ButtonPins.Down, ButtonEvents.Down))
            control.onEvent(ButtonPins.Left, ButtonEvents.Down, () => doAction(ButtonPins.Left, ButtonEvents.Down))
            control.onEvent(ButtonPins.Right, ButtonEvents.Down, () => doAction(ButtonPins.Right, ButtonEvents.Down))
            control.onEvent(ButtonPins.Fire1, ButtonEvents.Down, () => doAction(ButtonPins.Fire1, ButtonEvents.Down))
            control.onEvent(ButtonPins.Fire2, ButtonEvents.Down, () => doAction(ButtonPins.Fire2, ButtonEvents.Down))

            control.onEvent(ButtonPins.ButtonAB, ButtonEvents.Click, () => doAction(ButtonPins.ButtonAB, ButtonEvents.Click))
            control.onEvent(ButtonPins.ButtonA, ButtonEvents.Click, () => doAction(ButtonPins.ButtonA, ButtonEvents.Click))
            control.onEvent(ButtonPins.ButtonB, ButtonEvents.Click, () => doAction(ButtonPins.ButtonB, ButtonEvents.Click))
            control.onEvent(ButtonPins.Up, ButtonEvents.Click, () => doAction(ButtonPins.Up, ButtonEvents.Click))
            control.onEvent(ButtonPins.Down, ButtonEvents.Click, () => doAction(ButtonPins.Down, ButtonEvents.Click))
            control.onEvent(ButtonPins.Left, ButtonEvents.Click, () => doAction(ButtonPins.Left, ButtonEvents.Click))
            control.onEvent(ButtonPins.Right, ButtonEvents.Click, () => doAction(ButtonPins.Right, ButtonEvents.Click))
            control.onEvent(ButtonPins.Fire1, ButtonEvents.Click, () => doAction(ButtonPins.Fire1, ButtonEvents.Click))
            control.onEvent(ButtonPins.Fire2, ButtonEvents.Click, () => doAction(ButtonPins.Fire2, ButtonEvents.Click))

        }
    }


    function doAction(button: ButtonPins, event: ButtonEvents) {
        doSendButtonState(button, event)
        if (mode == Mode.CONTROLLER) {
            if (handlers[button] && handlers[button][event]) {
                handlers[button][event]()
            }
        }
    }

    function doSendButtonState(button: ButtonPins, event: ButtonEvents) {
        radio.sendValue("b_" + button, event)
    }

    function doRequestMotorRun(run_time: number) {
        radio.sendValue("reqmotor", run_time)
    }

    radio.onReceivedValue(function (name, value) {
        if (enabled) {
            if (name == "reqmotor") {
                pins.digitalWritePin(DigitalPin.P1, 1)
                basic.pause(value)
                pins.digitalWritePin(DigitalPin.P1, 0)
            } else {
                let splitted = name.split("_")
                if (splitted[0].compare("b_")) {
                    let button = parseInt(splitted[1])
                    if (handlers[button] && handlers[button][value]) {
                        handlers[button][value]()
                    }
                    if (value == ButtonEvents.Up) {
                        remoteState[button] = 0
                    } else if (value == ButtonEvents.Down) {
                        remoteState[button] = 1
                    }
                }
            }
        }
    })
}
