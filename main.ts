input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    pins.analogWritePin(AnalogPin.P1, 586)
    pins.digitalWritePin(DigitalPin.P8, 1)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.analogWritePin(AnalogPin.P1, 0)
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showString("O")
    basic.showString("" + (Math.round(dstemp.celsius(DigitalPin.P0))))
    basic.pause(1000)
    basic.showString("i")
    basic.showString("" + (input.temperature()))
})
