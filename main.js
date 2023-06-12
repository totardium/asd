const contactForm = document.querySelector("#form");
const submitBtn = document.querySelector(".submit-btn");
const nameImput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const publicKey = "ySkcSbCTbWznDqrYU";
const serviceID = "service_qhucxia";
const templateID = "template_3guad3c";
emailjs.init(publicKey);
contactForm.addEventListener("submit", e => {
e.preventDefault();
submitBtn.innerText = "Just A Moment...";
const inputFields = {
    name: nameImput.value,
    email: emailInput.value,
    message: messageInput.value
}
emailJs.send(serviceID, templateID, inputFields)
.then(() => {
            submitBtn.innerText = "Message Sent Successfully";
        nameImput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }, (error) => {
    console.log(error);
    submitBtn.innerText = "Something Went Wrong";
    });
});