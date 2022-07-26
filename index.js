/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



const convert = document.getElementById('convert')

convert.addEventListener('click', convertInput)

function convertInput() {
    
    const input = document.getElementById('number').value

    const metersToFeet =  Math.round((3.281 * input) * 100) / 100
    const feetToMeters =  Math.round((input/3.281) * 100) / 100
    document.getElementById('lengthConversion').innerText=`
    ${input}  meters =  ${metersToFeet} feet | ${input} feet = ${feetToMeters} meters
   `



    const literToGalon =  Math.round((.264 * input) * 100) / 100
    const galonsToLiters =  Math.round((input/.264) * 100) / 100
    document.getElementById('volumeConversion').innerText=`
    ${input}  liters =  ${literToGalon} galons | ${input} galons = ${galonsToLiters} liters
   `
   const kgToPounds =  Math.round((2.204 * input) * 100) / 100
   const poundsToKg =  Math.round((input/2.204) * 100) / 100
   document.getElementById('massConversion').innerText=`
   ${input}  KG =  ${kgToPounds} Pounds | ${input} Pounds = ${poundsToKg} KG
   `

    // lengthConversion.innerText = 'your mom'
    
}