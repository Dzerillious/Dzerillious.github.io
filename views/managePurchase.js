class ManagePurchase {
    constructor() {
        this.name = "manage-purchase";
        this.mapDiv = document.getElementById("map-div");
        this.AddOrders();
    }

    ActualizeOrder(a, id) {
        this.currentOrder = id;
        SetClassList(a, "nav-link", "active");
        const order = phpGetOrder(id);
        document.getElementById("label").innerText = "Objednávka z " + order.date;
        document.getElementById("name").innerText = order.name;
        document.getElementById("address").innerText = order.address;
        document.getElementById("tel").innerText = order.tel;
        document.getElementById("restaurant").innerText = order.restaurant;
        document.getElementById("order").innerHTML = order.order;
        document.getElementById("state").value = order.state;
    }

    AddOrders() {
        this.aArray = [];
        var purchases = document.getElementById("purchases");
        ClearElement(purchases);
        
        const orders = phpGetDriverOrderDates(signed);
        for (var i in orders) {
            this.AddOrder(purchases, orders[i].id, orders[i].date);
        }
        this.ActualizeOrder(this.aArray[0], orders[0].id);
    }

    AddOrder(orders, id, order) {
        var manage = this;
        const li = Create("li", "nav-item");

        const a = Create("a", "nav-link");
        this.aArray.push(a);
        a.onclick = () => {
            for (var i in manage.aArray) {
                SetClassList(manage.aArray[i], "nav-link");
            }
            this.ActualizeOrder(a, id);
        }
        a.text = order;
        li.appendChild(a);
        orders.appendChild(li);
    }
}

var managePurchase = new ManagePurchase();

function actualize() {
    phpChangeOrderState(managePurchase.currentOrder, document.getElementById("state").value);
}