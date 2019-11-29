function register() {   
    const name = document.getElementById("register-name").value;
    const password = document.getElementById("register-password").value;
    const password2 = document.getElementById("register-password2").value;
    const address = document.getElementById("register-address").value;
    const tel = document.getElementById("register-tel").value;
    const mail = document.getElementById("register-mail").value;
    if (password != password2)
    {
        alert("Passwords does not match");
        return;
    }
    phpRegister(name, password, address, tel, mail);
    phpSign(name, password);
    location.reload();
}