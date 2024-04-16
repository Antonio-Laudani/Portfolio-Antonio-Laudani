document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector("#emailForm");
    const submitBTN = document.querySelector("#submitBTN");
    const nameInput = document.querySelector("#user_name");
    const emailInput = document.querySelector("#user_email");
    const messageInput = document.querySelector("#message"); 

    const publicKey = "f4b52kD9UEoBilrAq";
    const serviceID = "service_ebwkbyv";
    const templateID = "template_0xwh5a5";

    emailjs.init(publicKey);

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        submitBTN.innerText = "Wait a moment...";

        const inputFields = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value,
            reply_to: emailInput.value, // Aggiunto reply_to con l'indirizzo email del mittente
            from_name: nameInput.value, // Aggiunto from_name con il nome del mittente
        };

        emailjs.send(serviceID, templateID, inputFields)
            .then(() => {
                submitBTN.innerText = "Sent successfully";
                nameInput.value = "";
                emailInput.value = "";
                messageInput.value = "";
            })
            .catch((error) => {
                console.log(error);
                submitBTN.innerText = "Something went Wrong";
            });
    });
});