function showForm(formId, button) {
  document.querySelectorAll('.form-container').forEach(form => form.classList.remove('active'));
  document.getElementById(formId).classList.add('active');

  document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}

document.getElementById('userRegistrationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('User registration submitted!');
  window.location.href = "Events.html"; // Redirect to Events page for user signup
});

document.getElementById('adminRegistrationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const adminCode = document.getElementById('adminCode').value;
  if (adminCode !== "ADMIN123") {
    alert('Invalid admin access code!');
    return;
  }
  alert('Admin registration submitted!');
  window.location.href = "adminclubs.html"; // Redirect to Admin Clubs page for admin signup
});
