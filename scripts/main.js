function init() {
    // const amount = document.getElementById("amount");
    // const rate = document.getElementById("rate");
    // const years = document.getElementById("years");
    // const output = document.getElementById("output");

    output.style = `border: none; display: block;`

    function onCalculate() {

        const amountValue = Number(amount.value);
        const rateValue = Number(rate.value);
        const yearsValue = Number(years.value);

        output.value = "$" + calculate(yearsValue, rateValue, amountValue).toFixed(2);

        // const apr = rateValue / 1200 // months and integer percent to fraction
        // const term = yearsValue * 12 //months
        // const amt = amountValue;

        // const payment = amt*(apr * Math.pow((1 + apr), term))/(Math.pow((1 + apr), term) - 1);
        // output.value = "$" + payment.toFixed(2);

        // output.innerHTML = "" //clear out the old
        // output.innerHTML = "" //clear out the old
        // output.insertAdjacentText("afterbegin", payment); //appends so need to clear first

    }
    calculateButton.onclick = onCalculate;
}
window.onload = init;