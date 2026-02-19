document.getElementById("transfer-btn").addEventListener("click", function () {
    const userAccNum = getValueFromInput("user-account-number");
    if (userAccNum.length != 11) {
        alert("Input a valid User Account Number");
        return;
    }

    const transferAmount = getValueFromInput("transfer-amount");
    const totalBalance = document.getElementById("balance-amount");
    const balance = totalBalance.innerText;
    const newBalance = Number(balance) + Number(transferAmount);
    if (Number(transferAmount) > balance || Number(transferAmount)<=0)  {
        alert("Enter a valid amount");
        return;
    }
    const transferPin = getValueFromInput("transfer-pin");
    const savedPin = localStorage.getItem("userPin");
    if (transferPin === savedPin) {
      alert(
        `${transferAmount}$ Money transfer successfully to your ${userAccNum} at ${new Date()}`,
      );
      totalBalance.innerText = newBalance;
    } else {
      alert("Pin not matched");
      return;
    }
});