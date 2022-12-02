function Traffic_Light () {
    RED()
    for (let index = 0; index < 5; index++) {
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
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.No)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
    }
    for (let index = 0; index < 5; index++) {
        pedestrian += -1
        basic.showString("" + (pedestrian))
    }
    for (let index = 0; index < 15; index++) {
        GREEN()
        basic.pause(1000)
        green += -1
        basic.showString("" + (green))
    }
    for (let index = 0; index < 2; index++) {
        YELLOW()
        basic.pause(1000)
        pedestrian += -1
        basic.showString("" + (pedestrian))
    }
}
input.onButtonPressed(Button.A, function () {
    RED()
    for (let index = 0; index < 5; index++) {
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
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.No)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
    }
    for (let index = 0; index < 5; index++) {
        pedestrian += -1
        basic.showString("" + (pedestrian))
    }
    for (let index = 0; index < 15; index++) {
        GREEN()
        basic.pause(1000)
        green += -1
        basic.showString("" + (green))
    }
    for (let index = 0; index < 2; index++) {
        YELLOW()
        basic.pause(1000)
        pedestrian += -1
        basic.showString("" + (pedestrian))
    }
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
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 C5 C5 C5 A A B B ", 500)
    RED()
    for (let index = 0; index < 5; index++) {
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
    for (let index = 0; index < 5; index++) {
        music.playMelody("- C5 C5 C5 - C5 C5 C5 ", 500)
        basic.showIcon(IconNames.No)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        pedestrian += -1
        basic.showString("" + (pedestrian))
    }
    for (let index = 0; index < 5; index++) {
    	
    }
    for (let index = 0; index < 15; index++) {
        GREEN()
        basic.pause(1000)
        green += -1
        basic.showString("" + (green))
    }
    for (let index = 0; index < 2; index++) {
        YELLOW()
        basic.pause(1000)
        pedestrian += -1
        basic.showString("" + (pedestrian))
    }
})
function YELLOW () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let distance = 0
let range: neopixel.Strip = null
let pedestrian = 0
let green = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(20)
let yellow = 2
green = 15
pedestrian = 5
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    if (distance == 5) {
        Traffic_Light()
        basic.pause(2000)
    }
})
