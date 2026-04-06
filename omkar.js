
function sendMessage() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let whatsappNumber = "918800794368"; // your number

  let url = "https://wa.me/" + whatsappNumber + "?text=" +
    encodeURIComponent(
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Message: " + message
    );

  window.open(url, "_blank");
}
