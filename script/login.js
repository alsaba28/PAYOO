document.getElementById("login-btn").addEventListener("click", function () {
  const phoneNumber = document.getElementById("phone-number");
  const contactNumber = phoneNumber.value;
  const pinNumber = document.getElementById("input-pin");
    const pin = pinNumber.value;
    if (contactNumber.length === 11 && pin.length === 4) {
        alert("Congratulation, Log in Successful");
        window.location.assign("../home.html");
    }
    else {
        alert("Log in failed, Please, check your 11 digit phone number and 4 digit pin"); 
        return;
    }
});
