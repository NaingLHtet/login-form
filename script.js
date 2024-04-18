const pswEl = document.querySelector(".psw");
let iconBtn = document.querySelector(".fa-eye");

// create password show/hide with eye icon inside password input
pswEl.addEventListener("click", () => {
  iconBtn.style.display = "block"; 
});

pswEl.addEventListener("input", () => {
  if (pswEl.value === "") {
    iconBtn.style.display = "none";// hide eye icon when the password is empty
  }else {
    iconBtn.style.display = "block";
  }
});



iconBtn.addEventListener("click", () => {
  if (pswEl.type === "password") {
  // change input type (text) to show the password characters
    pswEl.type = "text";
    iconBtn.classList.replace("fa-eye","fa-eye-slash");
  }else {
    pswEl.type = "password";
    iconBtn.classList.replace("fa-eye-slash","fa-eye");
  };
});

