
emailjs.init({publicKey:"YOUR_PUBLIC_KEY"});
function sendMail(){
 const params={
   to_email:"abhishekmishra679@gmail.com",
   date:document.getElementById('date').value,
   food:document.getElementById('food').value,
   message:document.getElementById('msg').value
 };
 emailjs.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",params)
 .then(()=>{
   document.getElementById("status").innerHTML="❤️ Thank you! Your answer has been sent.";
 })
 .catch(()=>{
   document.getElementById("status").innerHTML="Configure EmailJS IDs in script.js to enable email sending.";
 });
}
