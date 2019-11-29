function setUserData() {
    const user = phpGetUser(signed);
    document.getElementById("user-name").value = user.name;
    document.getElementById("user-address").value = user.address;
    document.getElementById("user-tel").value = user.tel;
    document.getElementById("user-mail").value = user.mail;
}

function modifyUser() {   
    const name = document.getElementById("user-name").value;
    const password = document.getElementById("user-password").value;
    const password2 = document.getElementById("user-password2").value;
    const address = document.getElementById("user-address").value;
    const tel = document.getElementById("user-tel").value;
    const mail = document.getElementById("user-mail").value;
    if (password != password2)
    {
        alert("Passwords does not match");
        return;
    }
    phpModifyUser(name, password, address, tel, mail);
}

function setAdminUserData(name) {
    const user = phpGetUser(signed);
    document.getElementById("modify-user-name").value = user.name;
    document.getElementById("modify-user-address").value = user.address;
    document.getElementById("modify-user-tel").value = user.tel;
    document.getElementById("modify-user-mail").value = user.mail;
}

function adminModifyUser() {   
    const name = document.getElementById("modify-user-name").value;
    const address = document.getElementById("modify-user-address").value;
    const tel = document.getElementById("modify-user-tel").value;
    const mail = document.getElementById("modify-user-mail").value;
    phpModifyUser(name, address, tel, mail);
}