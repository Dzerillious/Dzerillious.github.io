class TrackPurchase {
    constructor() {
        this.name = "track-purchase";
        this.mapDiv = document.getElementById("map-div");
        this.AddOrders();
    }

    ActualizeOrder(a, id) {
        SetClassList(a, "nav-link", "active");
        const order = phpGetOrder(id);
        document.getElementById("label").innerText = "Objednávka z " + order.date;
        document.getElementById("state").innerText = order.state;
        document.getElementById("name").innerText = order.name;
        document.getElementById("address").innerText = order.address;
        document.getElementById("tel").innerText = order.tel;
        document.getElementById("restaurant").innerText = order.restaurant
        document.getElementById("price").innerText = order.price + " Kč";
        document.getElementById("time").innerText = order.date;
        document.getElementById("order").innerHTML = order.order;
    }

    AddOrders() {
        this.aArray = [];
        const purchases = document.getElementById("purchases");
        
        ClearElement(purchases);
        const orders = phpGetUserOrderDates(signed);
        for (var i in orders) {
            this.AddOrder(purchases, orders[i].id, orders[i].date);
        }
        this.ActualizeOrder(this.aArray[0], orders[0].id);
    }

    AddOrder(purchases, id, purchase) {
        const manage = this;
        const li = Create("li", "nav-item");
        const a = Create("a", "nav-link");
        this.aArray.push(a);
        a.onclick = () => {
            for (var i in manage.aArray) {
                SetClassList(manage.aArray[i], "nav-link");
            }
            this.ActualizeOrder(a, id);
        }
        a.text = purchase;
        li.appendChild(a);
        purchases.appendChild(li);
    }
}

var showPlace = new TrackPurchase();