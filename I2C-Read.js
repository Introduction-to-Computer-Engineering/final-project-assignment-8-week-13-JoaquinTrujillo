//I2C Read!

basic.forever(function () {//Loop
    let inValue = pins.i2cReadNumber(0x1E, NumberFormat.UInt16BE, false); //Reading the value of the address
    basic.showNumber(inValue)//Shows the number of the value of the address on the LED matrix
    basic.pause(100);// Pauses so you know when the number ends
}) 