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
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";

    const emojis = ["❤️","💖","💕","💗"];

    heart.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left = Math.random()*100 + "vw";
    heart.style.fontSize = (15 + Math.random()*20) + "px";
    heart.style.animationDuration = (6 + Math.random()*5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 11000);
}

setInterval(createHeart, 1200);
