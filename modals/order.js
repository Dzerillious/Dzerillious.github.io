var orderItems = [];
function orderSigned() {
    phpSendOrder(signed, showPlace.currentRestaurant, orderItems);
}

function orderUnsigned() {
    const name = document.getElementById("order-name").value;
    const address = document.getElementById("order-address").value;
    const tel = document.getElementById("order-tel").value;
    const mail = document.getElementById("order-mail").value;
    phpUserCreateUserForOrder(name, address, tel, mail);
    phpSendOrder(name, showPlace.currentRestaurant, orderItems);
}

function changeSignedOrder() {
    var orderString = "";
    orderItems = [];
    var price = 0;
    const items = showPlace.items;
    for (var i in items) {
        if (items[i].value.value == 0) continue;
        const value = items[i].price.innerText * items[i].value.value;
        price += value;
        for (var j = 0; j < items[i].value.value; j++) {
            orderItems.push(items[i].id);
        } 
        orderString += "<p class=\"left\">" + items[i].value.value + "x " + items[i].nameLabel.innerText + "</p><p class=\"right\">" + value + "Kč</p>";
    }
    orderString += "<hr><p class=\"left\">Celkem</p><p class=\"right\">" + price + "Kč</p>";
    document.getElementById("signed-order").innerHTML = orderString;
}

function changeUnsignedOrder() {
    var orderString = "";
    orderItems = [];
    var price = 0;
    const items = showPlace.items;
    for (var i in items) {
        if (items[i].value.value == 0) continue;
        const value = items[i].price.innerText * items[i].value.value;
        price += value;
        for (var j = 0; j < items[i].value.value; j++) {
            orderItems.push(items[i].id);
        } 
        orderString += "<p class=\"left\">" + items[i].value.value + "x " + items[i].nameLabel.innerText + "</p><p class=\"right\">" + value + "Kč</p>";
    }
    orderString += "<hr><p class=\"left\">Celkem</p><p class=\"right\">" + price + "Kč</p>";
    document.getElementById("unsigned-order").innerHTML = orderString;
}