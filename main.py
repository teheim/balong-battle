def on_received_number(receivedNumber):
    if receivedNumber == 0:
        bitbot.stop(BBStopMode.COAST)
    elif receivedNumber == 1:
        bitbot.go(BBDirection.FORWARD, 100)
    elif receivedNumber == 2:
        bitbot.rotate(BBRobotDirection.LEFT, 60)
    elif receivedNumber == 3:
        bitbot.rotate(BBRobotDirection.RIGHT, 60)
    elif receivedNumber == 4:
        bitbot.go(BBDirection.REVERSE, 100)
    elif receivedNumber == 5:
        bitbot.rotate(BBRobotDirection.LEFT, 60)
    elif receivedNumber == 6:
        bitbot.rotate(BBRobotDirection.RIGHT, 60)
radio.on_received_number(on_received_number)

radio.set_group(3)

def on_forever():
    if input.rotation(Rotation.PITCH) < 0:
        if input.button_is_pressed(Button.AB):
            radio.send_number(1)
        elif input.button_is_pressed(Button.A):
            radio.send_number(2)
        elif input.button_is_pressed(Button.B):
            radio.send_number(3)
        else:
            radio.send_number(0)
    else:
        if input.button_is_pressed(Button.AB):
            radio.send_number(4)
        elif input.button_is_pressed(Button.A):
            radio.send_number(5)
        elif input.button_is_pressed(Button.B):
            radio.send_number(6)
        else:
            radio.send_number(0)
basic.forever(on_forever)
