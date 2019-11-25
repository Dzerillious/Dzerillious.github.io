class CustomEvent {
    constructor () {
        this.methodArray = new Array();
    }

    Subscribe(receiver, method) {
        this.methodArray.push([receiver, method]);
    }

    Invoke (param) {
        for (var i = 0; i < this.methodArray.length; i++) {
            var tuple = this.methodArray[i];
            tuple[1](tuple[0], param);
        }
    }
}