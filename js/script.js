/* CONTACT */
function sendMessage(params) {
    var tempParams ={
        user_name: document.getElementById("user_name").value,
        user_email: document.getElementById("user_email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("msg").value,
    };

    emailjs.send('gmail', 'contact_form', tempParams)
    .then(function(res){
        console.log("success", res.status);
    });

    document.getElementById("form").reset();
    window.alert("Message Sent.");
}