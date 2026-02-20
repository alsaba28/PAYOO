function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

function showOnly(id) {
    const latestHistory = document.getElementById("latest-form");
    const addMoney = document.getElementById("addmoney-form");
    const cashOut = document.getElementById("cashout-form");
    const transferMoney = document.getElementById("transfer-money-form");
    const getBonus = document.getElementById("get-bonus-form");
    const payBill = document.getElementById("pay-bill-form");
    const transaction = document.getElementById("transaction-form");

    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    transferMoney.classList.add("hidden");
    getBonus.classList.add("hidden");
    payBill.classList.add("hidden");
    transaction.classList.add("hidden");

    document.getElementById(id).classList.remove("hidden");
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });

    const selected = document.getElementById(id);
    selected.classList.remove("hidden")
    latestHistory.classList.add("hidden");
}