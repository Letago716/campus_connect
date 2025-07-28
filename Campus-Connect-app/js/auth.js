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

    // Email role detection
    if (email.endsWith(".s@campus.ac.za")) {
      window.location.href = "student.html";
    } else if (email.endsWith(".t@campus.ac.za")) {
      window.location.href = "teacher.html";
    } else if (email.endsWith(".admin@campus.ac.za")) {
      window.location.href = "admin.html";
    } else {
      alert("❌ Invalid email format. Use your official campus email.");
    }
  });
});
