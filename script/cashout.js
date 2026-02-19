document.getElementById("cash-out-btn").addEventListener("click", function () {

  const agentNumber = getValueFromInput("agent-number");

  if (agentNumber.length != 11) {
    alert("Input a valid Agent Number");
    return;
  }

  const cashOutAmount = getValueFromInput("cash-out-amount");
  if (Number(cashOutAmount) <= 0) {
    alert("Input a valid amount");
    return;
  }

  const totalBalance = document.getElementById("balance-amount");
  const balance = totalBalance.innerText;

  const newBalance = Number(balance) - Number(cashOutAmount);

  if (newBalance < 0) {
    alert("Input a valid amount");
    return;
  }

  const cashOutPin = getValueFromInput("cash-out-pin");
  const savedPin = localStorage.getItem("userPin");
  if (cashOutPin === savedPin) {
    alert("Cash out successful");
    totalBalance.innerText = newBalance;
  } else {
    alert("Pin not matched");
    return;
  }
});

const featureButtons = document.querySelectorAll(".feature-btn");

featureButtons.forEach((button) => {
  button.addEventListener("click", function () {
   
    featureButtons.forEach((btn) => {
      btn.classList.remove("btn-primary");
      btn.classList.add("btn-soft");
    });

    this.classList.remove("btn-soft");
    this.classList.add("btn-primary");
  });
});

