function playPlinko() {
  let bet = Number(document.getElementById("bet").value);
  let balance = getBalance();

  if (bet > balance) return alert("Not enough balance");

  let win = Math.random() < 0.5;
  let payout = win ? bet * 2 : 0;

  balance = balance - bet + payout;
  setBalance(balance);
  updateWager(bet);

  document.getElementById("result").innerText =
    win ? "You won " + payout : "Lost";
}
