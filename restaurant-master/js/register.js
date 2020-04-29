$('#registerButton').click(function () {
    var firstName = $('#firstName').val()
    var lastName = $('#lastName').val()
    var emailReg = $('#emailRegister').val();
    var passReg = $('#passwordRegister').val();

    function validateEmail($emailSign) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($emailSign);
    }

    if (firstName == "") {
        alert("Please enter your name")
    } else if (lastName == "") {
        alert("Please enter your surname")
    } else if (emailReg == "") {
        alert("Please enter your email address")
    } else if (!validateEmail(emailReg)) {
        alert("Please enter a valid email address")
    } else if (passReg == "") {
        alert("Please creat a password")
    } else {
        /* AJAX */
        alert("Account created successfully")
    }

});