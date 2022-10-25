let COMBINACION = 0
basic.showLeds(`
    # # # # #
    # . . . #
    # . . # #
    # . . . #
    # # # # #
    `)
basic.forever(function () {
    if (COMBINACION == "AABA") {
        basic.showIcon(IconNames.Diamond)
    }
})
