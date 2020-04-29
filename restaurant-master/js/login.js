$('#loginButton').click(function () {
    var emailLog = $('#emailLogin').val();
    var passLog = $('#passwordLogin').val();

    function validateEmail($emailSign) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($emailSign);
    }

    if (emailLog == "") {
        alert("Please enter your email address")
    } else if (!validateEmail(emailLog)) {
        alert("Please enter a valid email address")
    } else if (passLog == "") {
        alert("Please enter your password")
    } else {
        /* AJAX */
        alert("Logged in successfully")
    }

});