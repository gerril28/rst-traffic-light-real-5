radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        GREEN()
    } else if (receivedNumber == 2) {
        RED()
    }
})
function Sensor () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    basic.pause(2000)
}
input.onButtonPressed(Button.A, function () {
    RED()
    basic.pause(2000)
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            # . # . .
            # # # # #
            . . # . #
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . # . #
            # # # # #
            # . # . .
            . # . # .
            # . . . #
            `)
    }
    basic.pause(1000)
    for (let index = 0; index < 10; index++) {
        basic.showString("" + (pedestrian))
        pedestrian += -1
        basic.pause(1000)
    }
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.No)
    }
    basic.pause(2000)
    for (let index = 0; index < 5; index++) {
        GREEN()
        basic.pause(5000)
    }
    for (let index = 0; index < 2; index++) {
        YELLOW()
        basic.pause(2000)
    }
    basic.pause(200)
    RED()
})
function RED () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function GREEN () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
input.onButtonPressed(Button.B, function () {
    RED()
    basic.pause(2000)
    for (let index = 0; index < 10; index++) {
        music.playMelody("C5 C5 C5 C5 A A B B ", 500)
        basic.showLeds(`
            # . # . .
            # # # # #
            . . # . #
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . # . #
            # # # # #
            # . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(1000)
    }
    basic.pause(1000)
    for (let index = 0; index < 10; index++) {
        music.playMelody("- C5 C5 C5 - C5 C5 C5 ", 500)
        basic.showString("" + (pedestrian))
        pedestrian += -1
        basic.pause(1000)
    }
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.No)
    }
    basic.pause(2000)
    for (let index = 0; index < 5; index++) {
        GREEN()
        basic.pause(5000)
    }
    for (let index = 0; index < 2; index++) {
        YELLOW()
        basic.pause(2000)
    }
    basic.pause(200)
    RED()
})
function trafficlightreal () {
    basic.showIcon(IconNames.No)
    basic.pause(4000)
    for (let index = 0; index < 5; index++) {
        GREEN()
        basic.pause(5000)
    }
    for (let index = 0; index < 2; index++) {
        YELLOW()
        basic.pause(1000)
    }
    for (let index = 0; index < 5; index++) {
        RED()
        basic.pause(1000)
    }
}
function YELLOW () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let range: neopixel.Strip = null
let distance = 0
let pedestrian = 0
let strip: neopixel.Strip = null
basic.showIcon(IconNames.No)
radio.setGroup(39)
strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
strip.setBrightness(20)
let Counter = 0
let green = 15
pedestrian = 10
let yellow_light = 2
RED()
basic.forever(function () {
    Sensor()
    if (distance < 5) {
        Counter += 1
    }
    if (Counter == 4) {
        trafficlightreal()
    }
})
