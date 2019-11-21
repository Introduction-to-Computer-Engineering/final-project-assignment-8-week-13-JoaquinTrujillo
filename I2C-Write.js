//I2C Write!

basic.forever(function(){//Loop 
pins.i2cWriteNumber(19, 32, NumberFormat.Int32BE,1); //Sending a number to an address
basic.pause(100)// for the reading on the Oscilloscope
})