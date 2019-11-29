class ShowPlace {
    constructor() {
        this.name = "show";
        this.items = [];
        this.dailyMenu = document.getElementById("daily-menu");
        this.stableMenu = document.getElementById("menu");
    }

    ActualizePlace(id) {
        this.currentRestaurant = id;
        ClearElement(this.dailyMenu);
        ClearElement(this.stableMenu);

        const dailyMenu = phpGetDailyMenu(id);
        for (var i in dailyMenu) {
            this.AddItem(this.dailyMenu, dailyMenu[i].id, dailyMenu[i].name, dailyMenu[i].price, dailyMenu[i].image, dailyMenu[i].attributes);
        }
        
        const stableMenu = phpGetStableMenu(id);
        for (var i in stableMenu) {
            this.AddItem(this.stableMenu, stableMenu[i].id, stableMenu[i].name, stableMenu[i].price, stableMenu[i].image, stableMenu[i].attributes);
        }
    }

    AddItem(menu, id, name, price, type, picture, attributes) {
        this.items.push(new ShowItem(menu, id, name, price, type, picture, attributes));
    }
}

var showPlace = new ShowPlace();