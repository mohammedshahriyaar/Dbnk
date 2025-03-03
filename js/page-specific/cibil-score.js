$(document).ready(function() {
    $("#cibilForm").submit(function(e) {
        e.preventDefault();
        let score = Math.floor(Math.random() * (900 - 300 + 1)) + 300;
        let message = `Your CIBIL Score: ${score}. `;
        if (score > 750) {
            message += "Great score! Eligible for loans and cards.";
            $("#scoreResult").removeClass("alert-warning alert-danger").addClass("alert-success");
        } else if (score > 600) {
            message += "Average score. Consider improving it.";
            $("#scoreResult").removeClass("alert-success alert-danger").addClass("alert-warning");
        } else {
            message += "Low score. Contact support for guidance.";
            $("#scoreResult").removeClass("alert-success alert-warning").addClass("alert-danger");
        }
        $("#scoreResult").text(message).show();
    });
});