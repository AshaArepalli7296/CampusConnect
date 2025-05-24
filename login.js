function showForm(type) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab')[type === 'user' ? 0 : 1].classList.add('active');
  document.getElementById('userForm').classList.toggle('active', type === 'user');
  document.getElementById('adminForm').classList.toggle('active', type === 'admin');
}

function forgotPassword(type) {
  const email = prompt(`Enter your ${type} email to reset password:`);
  if (email) alert(`Password reset link has been sent to ${email}`);
}

function showSignUp(type) {
  window.location.href = "signup.html"; // Redirect to the single signup page
}

document.getElementById('userForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const branch = this.querySelector('select').value;
  alert(`User login submitted for ${branch} branch`);
  window.location.href = "Events.html"; // ✅ Redirect to Events page
});

document.getElementById('adminForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const club = this.querySelector('input[type="text"]').value;
  alert(`Admin login submitted for ${club} club`);
  window.location.href = "adminclubs.html"; // ✅ Redirect to Admin Clubs page
});
