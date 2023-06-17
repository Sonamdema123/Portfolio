var typed = new Typed('.typing-text', {
    strings : ['Front-End Developer', 'Web Designer', 'Graphic Designer', 'Web Developer'],
    loop : true,
    typeSpeed : 150
});
VanillaTilt.init(document.querySelectorAll('.tilt'),{
    max:25
});


/**contact form */
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "username",
        Password : "password",
        To : 'sdema1684@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Conatact Form Enquiry",
        Body : "Name:" + document.getElementById("name").value
        + "<br> Email:" + document.getElementById("email").value
        + "<br> Subject:" + document.getElementById("subject").value
        + "<br> Message:" + document.getElementById("message").value

    }).then(
      message => alert("Message Sent Successfully")
    );
}

