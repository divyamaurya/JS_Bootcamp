let emi = () => {
  let principal = document.getElementById("principal");
  let rate = document.getElementById("rate");
  let loanTerm = document.getElementById("loanterm");

  if (principal || rate || loanTerm == 0) {
    alert("Please enter value for each field");
  } else {
    rate = rate.value / (100 * 12);
    console.log("rate", rate);
    loanTerm = loanTerm.value * 12;
    console.log("loanterm==>", loanTerm);
    const numerator = principal.value * rate * Math.pow(1 + rate, loanTerm);
    const denominator = Math.pow(1 + rate, loanTerm) - 1;
    let calculatedEMI = numerator / denominator;
    document.getElementById("result").innerText = calculatedEMI.toFixed(2);
    console.log(calculatedEMI);

    principal.value = "";
    rate.value = "";
    loanTerm.value = "";
  }
};
// bill split application
// bmi application
// student registration system

// toFixed means how many decimal values you need
// Create a webpage with a form containing input fields for the principal amount, interest rate, and loan tenure.
// Use CSS to style the form and make it visually appealing.
// Implement JavaScript logic to calculate the EMI based on user input.
// Display the calculated EMI on the webpage.
