class ManagePlace {
    constructor() {
        this.name = "manage";
        this.items = [];
        this.dailyMenu = document.getElementById("daily-menu");
        this.stableMenu = document.getElementById("menu");
        this.InitializeComponents();
    }

    InitializeComponents() {
        this.AddItem(this.dailyMenu, "Hovězí burger ala Formanka, hranolky", 114,
            "Jídlo", "burger.jpg", ["1 Lepek", "3 Vejce", "7 Mléko", "10 Hořčice"]);
        this.AddItem(this.dailyMenu, "Smetanový špenát, uzené maso, vařené brambory", 109,
            "Jídlo", null, ["7  Mléko"]);
        this.AddItem(this.dailyMenu, "Vepřová játra na grilu, hranolky", 109,
            "Jídlo", null, []);
    }

    AddItem(menu, name, price, type, picture, attributes) {
        this.items.push(new ManageItem(menu, this.items, name, price, type, picture, attributes));
    }
}

var managePlace = new ManagePlace();

function addDailyMenuItem() {
    managePlace.AddItem(managePlace.dailyMenu, "Jméno", 0, "Jídlo", null, []);
}
function addMenuItem() {
    managePlace.AddItem(managePlace.stableMenu, "Jméno", 0, "Jídlo", null, []);
}