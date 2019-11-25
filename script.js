var role = "admin";
var signed = "Daniel Šerý";

function removeAllElements() {
    while (document.firstChild) {
        firstChild.removeChild(firstChild.firstChild);
    }
}

$(document).ready(function () {
    var className = document.body.className;
    if (role == "user") {
        if (className == "driver" || className == "operator" || className == "admin")
            removeAllElements();
        $('.user').show();
    }
    else if (role == "driver") {
        if (className == "operator" || className == "admin")
            removeAllElements();
        $('.user').show();
        $('.driver').show();
    }
    else if (role == "operator") {
        if (className == "driver" || className == "admin")
            removeAllElements();
        $('.user').show();
        $('.operator').show();
    }
    else if (role == "admin") {
        $('.user').show();
        $('.driver').show();
        $('.operator').show();
        $('.admin').show();
    }

    if (signed == "") {
        $('.signed').hide();
        $('.unsigned').show();
    }
    else {
        $('.signed').show();
        $('.unsigned').hide();
        $('.signed')[0].innerHTML = `
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#modalUcet"><span class="fa fa-user"></span> ` + signed + `</button>
                <button type="button" class="btn btn-secondary"><span class="fa fa-sign-out-alt"></span> Odhlásit</button>
            </div>`;
    }
});

$(document).on('click', '.number-spinner button', function () {    
	var btn = $(this),
		oldValue = btn.closest('.number-spinner').find('input').val().trim(),
		newVal = 0;
	
	if (btn.attr('data-dir') == 'up') {
		newVal = parseInt(oldValue) + 1;
	} else {
		if (oldValue > 0) {
			newVal = parseInt(oldValue) - 1;
		} else {
			newVal = 0;
		}
	}
	btn.closest('.number-spinner').find('input').val(newVal);
});