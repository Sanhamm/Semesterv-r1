const form = document.querySelector("#contact");
form.addEventListener("submit", validateForm);

const message = document.querySelector("#message")

//input const
const fName = document.querySelector("#navn");
const subject = document.querySelector("#subject");
const mail = document.querySelector("#mail");
const msg = document.querySelector("#msg");

//msg const
const nameMsg = document.querySelector("#navnMld");
const subjectMsg = document.querySelector("#subjectMld");
const mailMsg = document.querySelector("#mailMld");
const msgMsg = document.querySelector("#msgMld");

//function til feil melding 
function bannerMsgSubmitt() {
    message.innerHTML = "It's submitted!"
    message.classList.add("green")
}
function bannerMsgFail() {
    message.innerHTML = "Check if everything is correct!"
    message.classList.add("red")
}  


function validateForm(err) {
    err.preventDefault();

    let submittedName = fName.value.trim();
    console.log("Name: " + submittedName);
    nameMsg.innerHTML = "";
    if (submittedName.length < 5) {
        nameMsg.innerHTML +="The name must have atleast 5 characters long."
    }
    if (/\d/.test(submittedName)) {
        nameMsg.innerHTML +="the name can't contain any numbers."
    }
    //lånt fra codepen eksempel til lasse.
    
    
    let submittedMail = mail.value.trim();
    console.log("Email: " + submittedMail); 
    mailMsg.innerHTML = "";
    let mailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // tatt fra powerpoint som du har brukt i timen
    if (!mailPattern.test(submittedMail)) {
      mailMsg.innerHTML += "Please enter a valid email";
    }

    let submittedSubject = subject.value.trim();
    console.log("subject: " + submittedSubject);
    subjectMsg.innerHTML = "";
    let subjectPattern = /^[a-zA-ZæÆøØåÅ0-9._-\s]{15,}$/; // har brukt et eksempel fra codse.tutsplus.com og satt inn ekstra til mer egnet bruk
    if (!subjectPattern.test(submittedSubject)) {
        subjectMsg.innerHTML += "you are using weird signs! and you need 15 or more characters";
    }
    

    let submittedMsg = msg.value.trim();
    console.log("adress: " + submittedMsg);
    msgMsg.innerHTML = "";
    let msgPattern = /^[a-zA-ZæÆøØåÅ0-9.-\s]{25,}$/; // har brukt et eksempel fra codse.tutsplus.com og satt inn ekstra til mer egnet bruk
    if (!msgPattern.test(submittedMsg)) {
        msgMsg.innerHTML += "You need to use atleast 25 characters!"

    }

    if (nameMsg.innerHTML === "" && mailMsg.innerHTML === "" && subjectMsg.innerHTML === "" && msgMsg.innerHTML === "") {
        bannerMsgSubmitt()
    } else {
        bannerMsgFail()
    }
}