function sendMail() {
let parms = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value
};

emailjs.send("service_kcjxkpe","template_m4417yt",parms).then(alert("Din besked er sendt!"))
}