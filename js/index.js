
addStudent = () => {

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let number = document.getElementById("number").value
    let subject = document.getElementById("subject").value
    let spam = document.getElementById("spam").checked

    if(spam === true){
        alert("Welcome " + name + " Thank you for your interest in " + subject + "! We will contact you via the email provided: " + email + ", or alternatively on the phone number: " + number);
    } else {
        alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " + name + "!  If you want to sign up, you better CHECK that newsletter box! ");
    }

    document.getElementById("Form").reset();

}