"use strict";

const measureKelvin = function() {
    const measurement = {
        type: "temperature",
        unit: "celsius",
        value: prompt("Degrees Celsius:"),
    }
    
    const kelvin = `Measurement value ${measurement.value} + 273 : ${measurement.value + 273}`;
    return kelvin;
}

console.log(`${measureKelvin()}`);