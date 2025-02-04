const {checkprime,checkperfect,isAmstrong,checkOdd,digitSum, checkEven,funFact} = require('../Utils/functions')

const classify = async(req,res)=>{
    
    const number = parseInt(req.query.number);

    // Validate input: Check if 'number' is a valid integer
    if (!/^-?\d+$/.test(number)) {
        return res.status(400).json({ 
            number: "alphabet",
            error:true
         });
    }




    const check_prime = checkprime(number);
    const check_perfect = checkperfect(number);
    const check_armstrong = isAmstrong(number);
    const check_odd = checkOdd(number);
    const check_even = checkEven(number);
    const sum_of_digits = digitSum(number);

    const properties = [];
    if(check_armstrong) properties.push("armstrong") 
    if(check_odd) properties.push("odd")
    if(check_even) properties.push("even")




    return res.status(200).json({
            number,
            "is_prime": check_prime,
            "is_perfect": check_perfect,
            "properties": properties,
            "digit_sum": sum_of_digits,
            "fun_fact": await funFact(number)

       
    });


}
module.exports = classify;