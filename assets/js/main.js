const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container-index");
const sign_in_form = document.querySelector(".sign-in-form");
const sign_up_form = document.querySelector(".sign-up-form");
const sign_in = document.querySelector("#login-btn");
const sign_up = document.querySelector("#register-btn");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  setTimeout(() => {
    sign_in_form.classList.add("hidden");
    sign_up_form.classList.remove("hidden");
  }, 1000);
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  setTimeout(() => {
    sign_up_form.classList.add("hidden");
    sign_in_form.classList.remove("hidden");
  }, 1000);
});

function validateEmail($email) {
  let email = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return email.test($email);
}
sign_in.addEventListener("click", () => {
  const login_userName = document.querySelector("#login-userName").value;
  const login_password = document.querySelector("#login-password").value;

  if (login_userName === "") {
    Toastify({
      text: "Please enter your user name",
      duration: 2000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      backgroundColor:
        "linear-gradient(to right, rgba(10, 88, 148,1), rgba(75, 180, 250,1))",
      stopOnFocus: true, // Prevents dismissing of toast on hover
    }).showToast();
  } else if (login_password === "") {
    Toastify({
      text: "Please enter your password",
      duration: 2000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      backgroundColor:
        "linear-gradient(to right, rgba(10, 88, 148,1), rgba(75, 180, 250,1))",
      stopOnFocus: true, // Prevents dismissing of toast on hover
    }).showToast();
  } else {
    Toastify({
      text: "Login success",
      duration: 1500,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      backgroundColor:
        "linear-gradient(to right, rgba(10, 88, 148,1), rgba(75, 180, 250,1))",
      stopOnFocus: true, // Prevents dismissing of toast on hover
    }).showToast();
    setTimeout(() => {
      window.location.href = "file:///E:/Desktop/task/landing-page.html";
    }, 1000);
  }
});

sign_up.addEventListener("click", () => {
  const register_email = document.querySelector("#register-email").value;
  const register_userName = document.querySelector("#register-userName").value;
  const register_password = document.querySelector("#register-password").value;

  if (register_email === "") {
    Toastify({
      text: "Please enter your email",
      duration: 2000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      backgroundColor:
        "linear-gradient(to right, rgba(10, 88, 148,1), rgba(75, 180, 250,1))",
      stopOnFocus: true, // Prevents dismissing of toast on hover
    }).showToast();
  } else if (!validateEmail(register_email)) {
    Toastify({
      text: "Please enter a valid email address",
      duration: 2000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      backgroundColor:
        "linear-gradient(to right, rgba(10, 88, 148,1), rgba(75, 180, 250,1))",
      stopOnFocus: true, // Prevents dismissing of toast on hover
    }).showToast();
  } else if (register_userName === "") {
    Toastify({
      text: "Please enter your user name",
      duration: 2000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      backgroundColor:
        "linear-gradient(to right, rgba(10, 88, 148,1), rgba(75, 180, 250,1))",
      stopOnFocus: true, // Prevents dismissing of toast on hover
    }).showToast();
  } else if (register_password === "") {
    Toastify({
      text: "Please enter your password",
      duration: 2000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      backgroundColor:
        "linear-gradient(to right, rgba(10, 88, 148,1), rgba(75, 180, 250,1))",
      stopOnFocus: true, // Prevents dismissing of toast on hover
    }).showToast();
  } else {
    Toastify({
      text: "Account created successfully",
      duration: 1500,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      backgroundColor:
        "linear-gradient(to right, rgba(10, 88, 148,1), rgba(75, 180, 250,1))",
      stopOnFocus: true, // Prevents dismissing of toast on hover
    }).showToast();
    setTimeout(() => {
      window.location.href = "file:///E:/Desktop/task/landing-page.html";
    }, 1000);
  }
});
