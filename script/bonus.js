document.getElementById("get-bonus-btn").addEventListener("click", function () {
    const totalBalance = document.getElementById("balance-amount");
    const balance = totalBalance.innerText;
    const couponCode = getValueFromInput("coupon-code");
    const newBalance = Number(balance) + 100;
    console.log(newBalance);
  if (couponCode === "de34de") {
      alert("congratulation, You get 100$");
      totalBalance.innerText = newBalance;
  } else {
    alert("Input a valid coupon code");
    return;
  }
});
