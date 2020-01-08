function checkForm(data) {
    var check = document.querySelectorAll('errors');

    var fullName = data.fullname.value.length;
    if (fullName < 1) {
        event.preventDefault();
        error("fullname", "redinput");
        printError('<li class="errors" id="fullnameError"> Missing full name </li>');
        console.log("fullname error");
        return false;
    } else if (check != null) {
        console.log("check != null");
        clearError("#fullnameError", "#fullname", "redinput");
    }

    var email = data.email.value;
    var emailPattern = new RegExp(/^[a-zA-Z0-9\._%+-]+@[A-Za-z0-9.-]+[\.A-Za-z]{2,3}$/gi);
    if (!emailPattern.test(email)) {
        event.preventDefault();
        error("email", "redinput");
        printError('<li class="errors" id="emailError">Invalid or missing email address.</li>')
        console.log("email error");
        return false;
    } else if (check != null) {
        console.log("check != null");
        clearError("#emailError", "#email", "redinput");
    }

    var password = data.password.value;
    if ((password.length < 10)) {
        event.preventDefault();
        printError('<li class="errors passwordError">Password must be between 10 and 20 characters.</li>')
        error("password", "redinput");
        return false;
    } else if (password.length > 20) {
        printError('<li class="errors passwordError">Password must be between 10 and 20 characters.</li>')
        error("password", "redinput");
    } else if (check != null) {
        clearError(".passwordError", "password", "redinput");
    }

    var upperLowerPattern = RegExp(/^((?=.*\d)(?=.*[A-Z]).{10,20})$/g)
    if (!upperLowerPattern.test(password)) {
        event.preventDefault();
        printError('<li class="errors passwordError">Password must contain at least one lowercase character.</li>');
        printError('<li class="errors passwordError">Password must contain at least one uppercase character.</li>');
        printError('<li class="errors passwordError">Password must contain at least one digit.</li>');
        error("password", "redinput");
        return false;
    } else if (check != null) {
        clearError(".passwordError", "#password", "redinput");
    }

    if (password != data.passwordConfirm.value) {
        event.preventDefault();
        printError("<li class='errors' id='passwordConfirmError'>Password and confirmation password don\'t match.</li>")
        error("passwordConfirm", "redinput");
        return false;
    } else {
        clearError("#passwordConfirmError", "#passwordConfirm", "redinput");
    }
    event.currentTarget();
    return true;
}
username

function error(id, err) {
    document.getElementById(id).className += err; //add input error style class
}

function clearError(lid, cid, clr) {
    $(lid).remove();
    $(cid).removeClass(clr); //remove input error style class
}

function printError(msg) {
    var errors = document.getElementById("formErrors");
    errors.style.display += "block";
    errors.innerHTML += msg; //append error message
}