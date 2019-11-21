basic.forever(function () {
    for (let i = 9; i < 171; i += 9) {//using a loop to use 9 (%5 of 180) to increase
        basic.pause(100)//pause to read
        pins.servoWritePin(AnalogPin.P0, i)//write the value of i to P0
    }
    for (let i = 171; i > 9; i += -9) {//using loop to use 9 (%5 of 180) to decrease
        basic.pause(100)//pause to read
        pins.servoWritePin(AnalogPin.P0, i)//write the value of i to P0
    }

})