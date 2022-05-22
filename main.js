let errorIcon = document.querySelector(".error-img");
let errorMsg = document.querySelector("p.error-notif");
let submitButton = document.querySelector(".submit-btn");
let mailInput = document.querySelector("input");
let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let thanksMsg= document.querySelector("p.success-msg");
let overallForm = document.querySelector(".user-form");

submitButton.addEventListener("click", function(e){
  e.preventDefault();

  if(!mailInput.value.trim().match(mailFormat)){
    errorIcon.classList.remove("d-none");
    errorMsg.classList.remove("d-none");
    thanksMsg.classList.add("d-none");
  }
  else{
    thanksMsg.classList.remove("d-none");
    overallForm.classList.add("d-npne");
    errorIcon.classList.add("d-none");
    errorMsg.classList.add("d-none");
    mailInput.value="";
  }

})
