// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log();

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps, temps2) {
  temps = temps.concat(temps2);
  let min = temps[0];
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof temps[i] !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures, [9, 0, 9, -10, 25]);
console.log(amplitude);



const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Degree Celsius'),
  };

  console.log(measurement);
  console.table(measurement);
  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};

console.log(measureKelvin());
// console.warn(measureKelvin());
// console.error(measureKelvin());

//USING A DEBUGGER
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitudeBug = function (temps, temps2) {
  temps = temps.concat(temps2);

  let min = 0;
  let max = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof temps[i] !== 'number') continue;

    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug(temperatures, [9, 0, 9, -10, 25]);
console.log(amplitudeBug);

*/

//CODING CHALLENGE

const maxTempForecast = [17, 21, 23];
const maxTempForecastTwo = [12, 5, -5, 0, 5];

const printForecast = function (maxTemp) {
  let forecast = `...`;
  for (let i = 0; i < maxTemp.length; i++) {
    forecast = forecast.concat(` ${maxTemp[i]} degrees in ${i + 1} days ...`);
  }
  return forecast;
};

console.log(printForecast(maxTempForecast));
console.log(printForecast(maxTempForecastTwo));
