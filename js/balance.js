function getBalance() {
  return Number(localStorage.getItem("balance")) || 0;
}

function setBalance(v) {
  localStorage.setItem("balance", v);
  document.getElementById("balance").innerText = "Balance: " + v;
}

function updateWager(amount) {
  let progress = Number(localStorage.getItem("wagerProgress") || 0);
  progress += amount;
  localStorage.setItem("wagerProgress", progress);

  let required = Number(localStorage.getItem("wagerRequired") || 0);

  if (progress >= required) {
    document.getElementById("withdrawBtn").disabled = false;
  }
}

function deposit() {
  let amount = prompt("Deposit amount:");
  amount = Number(amount);

  let bonus = amount;
  let total = amount + bonus;

  localStorage.setItem("balance", getBalance() + total);
  localStorage.setItem("wagerRequired", total * 5);
  localStorage.setItem("wagerProgress", 0);

  alert("Deposit + bonus applied!");
  location.reload();
}

function withdraw() {
  alert("Withdrawal successful (fake)");
  localStorage.setItem("balance", 0);
  location.reload();
}

setBalance(getBalance());
