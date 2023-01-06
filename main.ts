namespace RadioGameController {

    let isController = false;

    //% block
    export function enable(radioId: number) {
        radio.setGroup(radioId)
    }

    let handlers: Action[][] = [[]];

    //% block
    export function onButtonPress(button: Kitronik_Game_Controller.ControllerButtonPins, event: Kitronik_Game_Controller.ControllerButtonEvents, handler: Action) {
        if (!handlers[button]) {
            handlers[button] = [];
        }
        handlers[button][event] = handler;
    }

    function doAction(button: Kitronik_Game_Controller.ControllerButtonPins, event: Kitronik_Game_Controller.ControllerButtonEvents) {
        doSendButtonState(button, event)
        if (handlers[button] && handlers[button][event]) {
            handlers[button][event]()
        }
    }

    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
        doAction(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Up)
    })
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
        doAction(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Down)
    })
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
        doAction(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Click)
    })
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
        doAction(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Up)
    })
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
        doAction(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Down)
    })
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
        doAction(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Click)
    })
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
        doAction(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Up)
    })
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
        doAction(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Down)
    })
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
        doAction(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Click)
    })
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
        doAction(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Up)
    })
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
        doAction(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Down)
    })
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
        doAction(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Click)
    })
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
        doAction(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Up)
    })
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
        doAction(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Down)
    })
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
        doAction(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Click)
    })
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
        doAction(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Up)
    })
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
        doAction(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Down)
    })
    Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
        doAction(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Click)
    })

    function doSendButtonState(button: Kitronik_Game_Controller.ControllerButtonPins, event: Kitronik_Game_Controller.ControllerButtonEvents) {
        let name=""
        if (button == Kitronik_Game_Controller.ControllerButtonPins.Up) {
            name = "up"
        } else if (button == Kitronik_Game_Controller.ControllerButtonPins.Down) {
            name = "down"
        } else if (button == Kitronik_Game_Controller.ControllerButtonPins.Left) {
            name = "left"
        } else if (button == Kitronik_Game_Controller.ControllerButtonPins.Right) {
            name = "right"
        } else if (button == Kitronik_Game_Controller.ControllerButtonPins.Fire1) {
            name = "fire1"
        } else if (button == Kitronik_Game_Controller.ControllerButtonPins.Fire2) {
            name = "fire2"
        }
        radio.sendValue(name, event)
    }

    radio.onReceivedValue(function (name, value) {
        let b = 0
        if (name == "up") {
            b = Kitronik_Game_Controller.ControllerButtonPins.Up;
        } else if (name == "down") {
            b = Kitronik_Game_Controller.ControllerButtonPins.Down;
        } else if (name == "left") {
            b = Kitronik_Game_Controller.ControllerButtonPins.Left;
        } else if (name == "right") {
            b = Kitronik_Game_Controller.ControllerButtonPins.Right;
        } else if (name == "fire1") {
            b = Kitronik_Game_Controller.ControllerButtonPins.Fire1;
        } else if (name == "fire2") {
            b = Kitronik_Game_Controller.ControllerButtonPins.Fire2;
        }
        if (handlers[b] && handlers[b][value]) {
            handlers[b][value]()
        }
    })


}
