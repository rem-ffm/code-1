input.onButtonPressed(Button.A, function () {
    keyboard.sendString("a")
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    keyboard.sendString("b")
    basic.showLeds(`
        . # # # .
        . # . . #
        . # # # .
        . # . . #
        . # # # .
        `)
})
keyboard.startKeyboardService()
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `)
