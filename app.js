const btnEl = document.querySelector("#btn");
const billAmount = document.querySelector("#bill");
const tipAmount = document.querySelector("#tip");
const billShow = document.querySelector("#total-bill");

// function for calculate..
function calculate() {
  // take amount...
  const bill = billAmount.value;
  const tip = tipAmount.value;

  // calculations..
  const totalBill = Math.floor(bill * (1 + tip / 100));
  billShow.textContent = "$" + totalBill;
}

// add event...
btnEl.addEventListener("click", calculate);
