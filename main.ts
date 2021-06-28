radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        bitbot.stop(BBStopMode.Coast)
    } else if (receivedNumber == 1) {
        bitbot.go(BBDirection.Forward, 100)
    } else if (receivedNumber == 2) {
        bitbot.rotate(BBRobotDirection.Left, 60)
    } else if (receivedNumber == 3) {
        bitbot.rotate(BBRobotDirection.Right, 60)
    } else if (receivedNumber == 4) {
        bitbot.go(BBDirection.Reverse, 100)
    } else if (receivedNumber == 5) {
        bitbot.rotate(BBRobotDirection.Left, 60)
    } else if (receivedNumber == 6) {
        bitbot.rotate(BBRobotDirection.Right, 60)
    }
})
radio.setGroup(3)
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) < 0) {
        if (input.buttonIsPressed(Button.AB)) {
            radio.sendNumber(1)
        } else if (input.buttonIsPressed(Button.A)) {
            radio.sendNumber(2)
        } else if (input.buttonIsPressed(Button.B)) {
            radio.sendNumber(3)
        } else {
            radio.sendNumber(0)
        }
    } else if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(4)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(5)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(6)
    } else {
        radio.sendNumber(0)
    }
})
