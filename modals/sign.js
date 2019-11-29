function sign() {
    const name = document.getElementById("sign-name").value;
    const password = document.getElementById("sign-password").value;
    phpSign(name, password);
    location.reload();
}

function logOut() {
    phpLogOut(name);
    location.reload();
}