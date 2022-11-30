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
        basic.showNumber(pedestrian)
        pedestrian += -1
        basic.pause(1000)
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
        basic.showIcon(IconNames.No)
        basic.pause(500)
    }
    GREEN()
    for (let index = 0; index < 15; index++) {
        basic.pause(1000)
        green += -1
        basic.showString("" + (green))
    }
    YELLOW()
    for (let index = 0; index < 2; index++) {
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
input.onButtonPressed(Button.B, function () {
    RED()
    basic.pause(1000)
})
function YELLOW () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let range: neopixel.Strip = null
let pedestrian = 0
let green = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P4, 4, NeoPixelMode.RGB)
strip.setBrightness(20)
let yellow = 2
green = 15
pedestrian = 5
basic.forever(function () {
	
})
