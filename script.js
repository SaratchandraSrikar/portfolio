(function() {
  emailjs.init("F3OsDTQTGwFXIcSWc"); // Replace with your EmailJS public key
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_3j8s1xn", "__ejs-test-mail-service__", this)
      .then(function () {
        alert("Message sent successfully!");
        form.reset();
      }, function (error) {
        alert("Failed to send message. Please try again.");
        console.log(error);
      });
  });
});