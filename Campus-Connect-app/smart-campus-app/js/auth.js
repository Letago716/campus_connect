document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  if (!form) {
    console.error("❌ loginForm not found in the HTML");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = document.getElementById("loginEmail");
    const passwordInput = document.getElementById("loginPassword");

    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value;

    console.log("Form submitted");
    console.log("Email:", email);
    console.log("Password:", password);

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    if (password !== "password123") {
      alert("❌ Invalid password. Hint: try 'password123'");
      return;
    }

    // Redirect to account selection page instead of direct role pages
    window.location.href = "select-account.html";
  });
});