document.getElementById("addmoney-btn").addEventListener("click", function () {
  const bankName = getValueFromInput("bank");
  if (bankName === "Select a Bank") {
    alert("Select a Bank");
    return;
  }

  const accNumber = getValueFromInput("acc-number");
  if (accNumber.length != 17) {
    alert("Input a valid bank account number");
  }

  const addMoneyInput = document.getElementById("addmoney-amount");
  const addMoneyAmount = addMoneyInput.value;
  const totalBalance = document.getElementById("balance-amount");
  const balance = totalBalance.innerText;
  const newBalance = Number(balance) + Number(addMoneyAmount);

  const addMoneyPin = getValueFromInput("addmoney-pin");
  const savedPin = localStorage.getItem("userPin");
  if (addMoneyPin === savedPin) {
    alert(`${addMoneyAmount}$ Money added successfully to your account from ${bankName} at ${new Date()}`);
    totalBalance.innerText = newBalance;
  } else {
    alert("Pin not matched");
    return;
  }
});
