function selectPayment(method, element) {
  document.querySelectorAll('.payment-method').forEach(el => el.classList.remove('selected'));
  element.classList.add('selected');
  document.getElementById('upi-details').style.display = 'none';
  document.getElementById('card-details').style.display = 'none';
  const payButton = document.querySelector('.pay-button');

  if (method === 'phonepe') {
    payButton.innerHTML = 'Pay with PhonePe';
  } else if (method === 'upi') {
    document.getElementById('upi-details').style.display = 'block';
    payButton.innerHTML = 'Pay via UPI';
  } else if (method === 'card') {
    document.getElementById('card-details').style.display = 'block';
    payButton.innerHTML = 'Pay with Card';
  }
}

function processPayment() {
  const amount = document.getElementById('amount').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  if (!amount || !name || !email || !phone) {
    alert('Please fill all required fields');
    return;
  }

  if (phone.length !== 10 || isNaN(phone)) {
    alert('Please enter a valid 10-digit mobile number');
    return;
  }

  alert(`Processing payment of ₹${amount} via PhonePe...`);
  setTimeout(() => {
    window.location.href = "success.html";
  }, 2000);
}
