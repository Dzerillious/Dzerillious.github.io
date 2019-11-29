class ManagePlace {
    constructor() {
        this.name = "manage";
        this.dailyMenu = document.getElementById("daily-menu");
        this.stableMenu = document.getElementById("menu");
    }

    ActualizePlace(id) {
        this.currentRestaurant = id;
        ClearElement(this.dailyMenu);
        ClearElement(this.stableMenu);

        const dailyMenu = phpGetDailyMenu(id);
        for (var i in dailyMenu) {
            this.AddItem(this.dailyMenu, dailyMenu[i].id, dailyMenu[i].name, dailyMenu[i].price, dailyMenu[i].type, dailyMenu[i].image, dailyMenu[i].attributes);
        }
        
        const stableMenu = phpGetStableMenu(id);
        for (var i in stableMenu) {
            this.AddItem(this.stableMenu, stableMenu[i].id, stableMenu[i].name, stableMenu[i].price, stableMenu[i].type, stableMenu[i].image, stableMenu[i].attributes);
        }
    }

    AddItem(menu, id, name, price, type, picture, attributes) {
        menu.appendChild(new ManageItem(this, id, name, price, type, picture, attributes));
    }
}

var managePlace = new ManagePlace();

function addDailyMenuItem() {
    phpAddDailyMenuItem(managePlace.currentRestaurant);
    managePlace.ActualizePlace(managePlace.currentRestaurant);
}
function addMenuItem() {
    phpAddStableMenuItem(managePlace.currentRestaurant);
    managePlace.ActualizePlace(managePlace.currentRestaurant);
}
function closeOrders() {
    phpCloseOrdersForRestaurant(managePlace.currentRestaurant);
}
function actualize() {
    const restaurantName = document.getElementById("restaurant-name").value;
    const restaurantAddress = document.getElementById("restaurant-address").value;
    phpActualizeRestaurant(managePlaces.currentRestaurant, restaurantName, restaurantAddress);
}