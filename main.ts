radio.onReceivedNumber(function (receivedNumber) {
    instrukcja = receivedNumber
    if (instrukcja == 0) {
        speed = 0
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    } else if (instrukcja == 1) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
    } else if (instrukcja == 2) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorStop(maqueen.Motors.M2)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
    } else if (instrukcja == 3) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
    } else if (instrukcja == 4) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, speed)
    } else if (instrukcja == 5) {
        speed = speed + 10
    } else if (instrukcja == 6) {
        speed = speed - 10
    } else if (instrukcja == 7) {
        music.playTone(247, music.beat(BeatFraction.Whole))
    } else {
    	
    }
})
let odl = 0
let instrukcja = 0
let speed = 0
radio.setGroup(24)
speed = 0
music.playTone(247, music.beat(BeatFraction.Double))
basic.forever(function () {
    odl = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (odl < 5) {
        speed = 0
    }
})
