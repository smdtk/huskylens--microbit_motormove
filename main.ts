/**
 * microbit:  pins
 * 
 * 19-Blue, 20-Green
 * 
 * V-Red, Gnd-Black
 * 
 * Object Recognition  
 * 
 * if yes, then icon check
 * 
 * else, icon x
 */
input.onButtonPressed(Button.A, function () {
    basic.showString("tag")
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 15)
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("stop")
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 10)
    basic.showIcon(IconNames.No)
    Kitronik_Move_Motor.stop()
})
basic.showString("tag")
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_TAG_RECOGNITION)
Kitronik_Move_Motor.brakeLightsOff()
let moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
basic.forever(function () {
    huskylens.request()
    basic.showIcon(IconNames.Chessboard)
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        Kitronik_Move_Motor.beepHorn()
        moveMotorZIP.show()
        basic.showIcon(IconNames.Yes)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 30)
    }
    if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 30)
        basic.showIcon(IconNames.Heart)
    }
    if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Reverse, 15)
        Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, 15)
        moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
        basic.showIcon(IconNames.QuarterNote)
        basic.clearScreen()
    }
    if (huskylens.isAppear(4, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, 15)
        Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Reverse, 15)
        moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
        basic.showIcon(IconNames.EigthNote)
        basic.clearScreen()
    }
    if (huskylens.isAppear(5, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 20)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
        moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
        basic.showIcon(IconNames.Confused)
        moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 30)
        basic.clearScreen()
    }
    if (huskylens.isAppear(6, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showIcon(IconNames.Asleep)
        moveMotorZIP.showRainbow(1, 360)
        Kitronik_Move_Motor.stop()
    }
})
