function register() {
  const u = username.value;
  const p = password.value;
  localStorage.setItem("user_" + u, p);
  alert("Registered");
  window.location = "login.html";
}

function login() {
  const u = username.value;
  const p = password.value;

  if (localStorage.getItem("user_" + u) === p) {
    localStorage.setItem("user", u);
    if (!localStorage.getItem("balance")) {
      localStorage.setItem("balance", 1000);
    }
    window.location = "dashboard.html";
  } else {
    alert("Invalid login");
  }
}

function fakeGoogle() {
  localStorage.setItem("user", "GoogleUser");
  localStorage.setItem("balance", 1000);
  window.location = "dashboard.html";
}

function goRegister() {
  window.location = "register.html";
}
