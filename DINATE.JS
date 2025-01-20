  // Dynamically changing the donation type label when clicked
  document.getElementById("one-time-btn").addEventListener("click", function() {
    alert("One-time donation selected.");
    // You can change behavior here if needed, such as updating form fields or labels.
  });

  document.getElementById("monthly-btn").addEventListener("click", function() {
    alert("Monthly donation selected.");
    // You can update labels or behavior for monthly donations.
  });

  // Form validation and donation submission
  function submitDonationForm() {
    // Validate the required fields
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email-address").value;
    const password = document.getElementById("password").value;

    if (!firstName || !lastName || !email || !password) {
      alert("Please fill out all fields.");
      return; // Stop form submission if any field is empty
    }

    // Optional: Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Optional: Confirm donation selection
    if (!document.getElementById("flexCheckChecked").checked) {
      alert("You must agree to the terms before donating.");
      return;
    }

    // If all fields are valid, show a success message
    alert("Thank you for your donation!");
    // Optionally, you can submit the form data to a backend here
  }