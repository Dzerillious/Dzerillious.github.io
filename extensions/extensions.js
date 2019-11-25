function SetClassList() {
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