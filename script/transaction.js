const transactionElectricityBill = document
  .getElementById("history-electricity-bill")
  .addEventListener("click", function () {
    alert(
      "⚡ Electricity Bill Payment History\n\n" +
        "Invoice No: EB-10245\n" +
        "Bill Month: February 2026\n" +
        "Amount: $95\n" +
        "Paid Via: Payoo Wallet\n" +
        "Transaction ID: TXN458923\n" +
        "Payment Date: 18 Feb 2026\n" +
        "Status: Successful",
    );
  });

const transactionBankDeposit = document
  .getElementById("history-bank-deposit")
  .addEventListener("click", function () {
    alert(
      "🏦 Bank Deposit History\n\n" +
        "Transaction ID: BD-458921\n" +
        "Deposit Amount: $500\n" +
        "Deposited To: City Bank\n" +
        "Payment Method: Online Transfer\n" +
        "Deposit Date: 05 March 2026\n" +
        "Status: Successful",
    );
  });

const transactionMobileRecharge = document
  .getElementById("history-mobile-recharge")
  .addEventListener("click", function () {
    alert(
      "📱 Mobile Recharge History\n\n" +
        "Transaction ID: MR-993421\n" +
        "Mobile Number: 017XXXXXXXX\n" +
        "Operator: Grameenphone\n" +
        "Recharge Amount: $20\n" +
        "Recharge Date: 15 March 2026\n" +
        "Status: Successful",
    );
  });

const transactionGasBill = document
  .getElementById("history-gas-bill")
  .addEventListener("click", function () {
    alert(
      "🔥 Gas Bill Payment History\n\n" +
        "Invoice No: GB-214578\n" +
        "Bill Month: February 2026\n" +
        "Amount: $65\n" +
        "Paid Via: Payoo Wallet\n" +
        "Payment Date: 10 March 2026\n" +
        "Status: Successful",
    );
  });
