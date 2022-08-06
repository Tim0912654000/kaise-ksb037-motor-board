function doMotor12STOP () {
    pins.analogWritePin(AnalogPin.P1, 0)
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    doMotor12()
    strip.showColor(neopixel.colors(NeoPixelColors.White))
})
function doMotor12 () {
    pins.analogWritePin(AnalogPin.P1, 586)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    doMotor12STOP()
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
let light2 = 0
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Heart)
strip = neopixel.create(DigitalPin.P16, 8, NeoPixelMode.RGB)
strip.clear()
basic.forever(function () {
    basic.showString("" + (Math.round(dstemp.celsius(DigitalPin.P15))))
    basic.showString("/")
    basic.showString("" + (Math.round(input.temperature() - 1.5)))
    basic.showString("/")
    light2 = pins.analogReadPin(AnalogPin.P0)
    basic.showString("" + (light2))
})
