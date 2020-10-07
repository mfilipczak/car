radio.onReceivedNumber(function (receivedNumber) {
    instrukcja = receivedNumber
    if (instrukcja == 0) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    } else if (instrukcja == 1) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 150)
    } else if (instrukcja == 2) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
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
        speed = Math.max(speed + 25, 255)
        basic.showString("" + (speed))
    } else if (instrukcja == 6) {
        speed = Math.min(speed - 25, 0)
        basic.showString("" + (speed))
    } else if (instrukcja == 7) {
        music.playTone(247, music.beat(BeatFraction.Whole))
    } else if (instrukcja == 8) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 150)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
    } else {
    	
    }
})
let odl = 0
let instrukcja = 0
let speed = 0
radio.setGroup(24)
speed = 0
basic.forever(function () {
    odl = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (odl < 5) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
