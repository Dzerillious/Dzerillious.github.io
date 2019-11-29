function Create() {
    const element = document.createElement(arguments[0]);
    element.classList = [];
    for (var i = 1; i < arguments.length; i++) {
        element.classList.add(arguments[i]);
    }
    return element;
}

function SetClassList() {
    arguments[0].classList = [];
    for (var i = 1; i < arguments.length; i++) {
        arguments[0].classList.add(arguments[i]);
    }
}

function ArrayRemove(arr, value) {
    for (var i in arr) {
        if (arr[i] == value) {
            delete arr[i];
            return;
        }
    }
 }

function ArrayContains(arr, value) {
    for (var i in arr) {
        if (arr[i] == value) return true;
    }
    return false;
}

function ClearElement(element) {
    while (element.firstChild) {
        element.firstChild.remove();
    }
}