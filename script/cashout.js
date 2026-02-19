document.getElementById("cash-out-btn").addEventListener("click", function () {
    const agentNumber = getValueFromInput("agent-number");

  if (agentNumber.length != 11) {
    alert("Input a valid Agent Number");
    return;
  }

  const cashOutAmount = getValueFromInput("cash-out-amount");

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
