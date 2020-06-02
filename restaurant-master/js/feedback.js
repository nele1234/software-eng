$('#feedbackButton').click(function () {
    var feedback = $('#feedback').val();

   
    if (feedback == "") {
        alert("Please enter your feedback")
    } else {
        /* AJAX */
        alert("Thank you")
    }

});