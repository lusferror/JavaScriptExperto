function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let bill=(preTaxAndTipAmount*0.095)+(preTaxAndTipAmount*0.15)+preTaxAndTipAmount;
    return bill;
}
let output = calculateBillTotal(20);
console.log(output); // --> 24.9