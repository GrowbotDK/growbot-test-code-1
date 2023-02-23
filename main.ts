input.onButtonPressed(Button.A, function () {
    if (Lys == 0) {
        Lys += 1
        groblokke.groLys(lightList.whiteGrow, 70)
        groblokke.groLys(lightList.irGrow, 0)
        groblokke.groLys(lightList.uvGrow, 0)
    } else if (Lys == 1) {
        Lys += 1
        groblokke.groLys(lightList.whiteGrow, 0)
        groblokke.groLys(lightList.irGrow, 70)
        groblokke.groLys(lightList.uvGrow, 0)
    } else {
        Lys = 0
        groblokke.groLys(lightList.whiteGrow, 0)
        groblokke.groLys(lightList.irGrow, 0)
        groblokke.groLys(lightList.uvGrow, 70)
    }
    basic.showNumber(Lys)
})
input.onButtonPressed(Button.B, function () {
    groblokke.burstPump(30, pumpList.airationPump)
    basic.pause(5000)
    groblokke.burstPump(30, pumpList.fert1Pump)
    basic.pause(5000)
    groblokke.burstPump(30, pumpList.fert2Pump)
    basic.pause(5000)
    groblokke.burstPump(30, pumpList.waterPump)
    basic.pause(5000)
})
let Lys = 0
Lys = 0
