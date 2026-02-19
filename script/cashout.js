document.getElementById("cash-out-btn").addEventListener("click", function () {
  const agent = document.getElementById("agent-number");
  const agentNumber = agent.value;
  const cashOutAmountInput = document.getElementById("cash-out-amount");
  const cashOutAmount = cashOutAmountInput.value;

  const totalBalance = document.getElementById("balance-amount");
  const balance = totalBalance.innerText;

  const newBalance = Number(balance) - Number(cashOutAmount);

  if (agentNumber.length != 11) {
    alert("Input a valid Agent Number");
    return;
  }

  if (newBalance < 0) {
    alert("Input a valid amount");
    return;
  }
  const cashOutInputPin = document.getElementById("cash-out-pin");
  const cashOutPin = cashOutInputPin.value;

  const savedPin = localStorage.getItem("userPin");
  if (cashOutPin === savedPin) {
    alert("Cash out successful");
    totalBalance.innerText = newBalance;
  } else {
    alert("Pin not matched");
    return;
  }
});
