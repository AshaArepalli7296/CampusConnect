// document.getElementById('registrationForm').addEventListener('submit', function(e) {
//   // Prevents the default form submission
//   e.preventDefault(); 

//   // Validation: Make sure all fields are filled
//   const name = document.getElementById('name').value;
//   const mobile = document.getElementById('mobile').value;
//   const email = document.getElementById('email').value;
//   const branch = document.getElementById('branch').value;
//   const clubMember = document.querySelector('input[name="club-member"]:checked');

//   if (!name || !mobile || !email || !branch || !clubMember) {
//     alert('Please fill in all the fields before submitting.');
//     return;
//   }

//   // If validation passes, show success message
//   document.getElementById('registrationForm').style.display = 'none';
//   document.getElementById('successMessage').style.display = 'block';

//   // Redirect to payment page after a short delay
//   setTimeout(function() {
//     window.location.href = "payment.html";
//   }, 1000); // 1-second delay
// });