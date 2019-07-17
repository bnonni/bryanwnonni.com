function check(form) {
    event.preventDefault();
    var id = form.id,
        user = form.user,
        pass = form.pass;
    var form = document.getElementById("signup");

    var fid = form.id.value.length;
    if (fid == 0) {
        printError("<p>Plese assign yourself an ID!</p>")
        color("ispan", "ed", "red");
        return false;
    } else if (fid > 0) {
        color("ispan", "ed", "black");
    }
    var fus = form.user.value.length;
    if (fus == 0) {
        printError("<p>Plese enter a username!</p>")
        color("uspan", "us", "red");
        return false;
    } else if (fus > 0) {
        color("uspan", "us", "black");
    }
    var fpass = form.pass.value.length
    if (fpass == 0) {
        printError("<p>Plese enter a password!</p>")
        color("pspan", "pd", "red");
        return false;
    } else if (fpass > 0) {
        color("pspan", "pd", "black");
    }
    printSuccess(id, user, pass, "Form successfully submitted!");
    return true;
}

function color(sp, inp) {
    document.getElementById(sp).className += "red";
    document.getElementById(inp).className += "redinput";
}

function printSuccess(i, u, p, m) {
    document.getElementById("message").innerHTML = "<p>ID = " + i.value + "</p><p> Username = " + u.value + "</p><p> Password = " + p.value + "</p><p>" + m + "</p>";
}

function printError(msg) {
    document.getElementById("message").innerHTML = msg;
}

function clear() {
    document.getElementById("message").innerHTML = "";
}