//https://onladder.co.uk/blog/how-to-calculate-mortgage-repayments/
//https://codepen.io/andarch/pen/qBxpeY

// SEE ALSO FIN LIBS like https://github.com/lmammino/financial

//REUSABLE FUNCTION
function calculate(term, apr, price){
    apr = apr / 100 //convert to fraction from percent 0.033
    apr = apr / 12; //convert year into months

    term = term * 12; //conver years to months

    const one_r_n = Math.pow((1 + apr), term)
    const top = apr * one_r_n
    const bottom = one_r_n - 1
    const division_result = top / bottom
    return price * division_result; //payment
}

//TESTING
let term = 25; // 30 years
let apr = 3.3; //Annual percentage rate
const price = 350000; //price of house

const payment = calculate(term, apr, price)
console.log(payment); //expected 1714.8654830497117

