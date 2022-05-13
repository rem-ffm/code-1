input.onButtonPressed(Button.A, function () {
    keyboard.sendString("a")
})
input.onButtonPressed(Button.B, function () {
    keyboard.sendString("b")
})
keyboard.startKeyboardService()
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `)
