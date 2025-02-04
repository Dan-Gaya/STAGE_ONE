const axios = require('axios');

function checkEven(number){
    return (number%2 === 0)

}

function checkOdd(number){
return (number%2 !== 0);

}

function checkprime(number){
    if(number<2) return false 

    for(i=2; i<number; i++){
        if(number%i === 0) return false;

    }

    return true

}

function checkperfect(number){
    let sum=0;

    for(i=1; i < number;i++){

        if (number %i === 0){
           sum += i;
         }
     
     }
        
    return sum == number;

}

function isAmstrong(number){
    let sum = 0;
    let orgnum = number ;
    while( number!== 0){
        let cubeOfdigit = Math.pow((number %10),3)
        sum += cubeOfdigit;
        number = Math.floor(number/10);
    }

    return sum === orgnum;

}
function digitSum(number){
    let sum = 0;
    while( number !== 0){
        sum += number%10;
        number= Math.floor(number/10);
    }
    return sum

}
const cache = new Map();


async function funFact(number) {
    if(cache.has(number)){
        return cache.get(number);
    }

    try {

        const response = await axios.get(`http://numbersapi.com/${number}/math?json`);
        console.log(response);

        const fact = await response.data.text
        cache.set(number,fact);

        return fact; 

    } catch (error) {
        console.error("Error fetching number fact:", error);
        return "Could not retrieve fact";
    }
}
module.exports ={funFact,digitSum,isAmstrong,checkperfect,checkprime, checkEven,checkOdd,}