const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkButton = document.querySelector('#check-button');
const messageUser = document.querySelector('#error');
const noOfNotes = document.querySelectorAll('.no-of-notes');
const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener('click', function validateBillandCashAmount() {
  hideMessage();

  if (billAmount.value > 0) {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      const remainingAmount = cashGiven.value - billAmount.value;
      returnRemainingAmount(remainingAmount);
    } else {
      showMessage('Bill Higher Than Cash given No Credits!!!!');
    }
  } else {
    showMessage('Bill Amount should be Greater than Zero');
  }
});

function hideMessage() {
  messageUser.style.display = 'none';
}

function showMessage(msg) {
  messageUser.style.display = 'block';
  messageUser.innerHTML = msg;
}

function returnRemainingAmount(amount) {
  for (let i = 0; i < notes.length; i++) {
    let numOfNotes = Math.trunc(amount / notes[i]);
    amount = amount % notes[i];
    noOfNotes[i].innerHTML = numOfNotes;
  }
}
