document.getElementById("pay-bill-btn").addEventListener("click", function () {
  const provider = getValueFromInput("pay");
  if (provider === "Select Utility Provider") {
    alert("Select Utility Provider");
    return;
  }

  const billerAccountNumber = getValueFromInput("biller-acc-number");
  if (billerAccountNumber.length != 17) {
    alert("Input a valid 17 digit Biller Account Number");
    return;
  }

  const payAmount = getValueFromInput("pay-amount");
    const totalBalance = document.getElementById("balance-amount");
    const balance = totalBalance.innerText;
  const newBalance = Number(balance) - Number(payAmount);
  if (Number(payAmount) > Number(balance)) {
    alert("Insufficient Balance");
    return;
  }

  const payBillPin = getValueFromInput("pay-bill-pin");
  const savedPin = localStorage.getItem("userPin");
  if (savedPin === payBillPin) {
      alert(
          `🧾 Bill Payment Successful!

        Bill Type: ${provider}
        Biller Account: 017XXXXXXXX
        Pay Bill Amount: ${payAmount}
        Payment Date: ${new Date().toLocaleString()}
        Transaction ID: TXN${Math.floor(Math.random() * 1000000)}
        Status: Completed`,
      );
      totalBalance.innerText = newBalance;
  }
});
