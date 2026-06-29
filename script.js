emailjs.init({
  publicKey: "Wzv8G_thAnnKKf9fi"
});

function sendMail() {
  const params = {
    to_email: "abhishekmishra679@gmail.com",
    date: document.getElementById("date").value,
    food: document.getElementById("food").value,
    message: document.getElementById("msg").value
  };

  emailjs.send(
    "service_z0om1xr",
    "template_5m05x68",
    params
  )
  .then(() => {
    document.getElementById("status").innerHTML =
      "❤️ Thank you! Your answer has been sent successfully!";
  })
  .catch((err) => {
    console.error(err);
    document.getElementById("status").innerHTML =
      "❌ Something went wrong. Please try again.";
  });
}
