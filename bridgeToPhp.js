var role = "admin";
var signed = "Daniel";

function phpSign(name, password) {
    console.log("sign: " + name + " " + password);
}

function phpLogOut(name) {
    console.log("logout of user: " + name);
}

function phpRegister(name, password, address, tel, mail) {
    console.log("register: " + name + " " + password + " " + address + " " + tel + " " + mail);
}

function phpModifyUser(name, address, tel, mail) {
    console.log("modify user: " + name + " " + address + " " + tel + " " + mail);
}

function phpGetDriverOrders(id) {
    console.log("getting orders assigned to " + id);
    return [
        {'id':0, 'date':'22.11. 17:56', 'restaurant':'Formanka', 'address':'Tylova 23/5'},
        {'id':1, 'date':'22.11. 17:56', 'restaurant':'Formanka', 'address':'Tylova 23/5'},
        {'id':2, 'date':'22.11. 17:56', 'restaurant':'Formanka', 'address':'Tylova 23/5'}
    ]
}

function phpGetUnassignedOrders() {
    console.log("getting unassigned orders");
    return [
        {'id':3, 'date':'22.11. 17:56', 'restaurant':'Formanka', 'address':'Tylova 23/5'},
        {'id':4, 'date':'22.11. 17:56', 'restaurant':'Formanka', 'address':'Tylova 23/5'},
        {'id':5, 'date':'22.11. 17:56', 'restaurant':'Formanka', 'address':'Tylova 23/5'}
    ]
}

function phpGetDrivers() {
    console.log("getting drivers");
    return [
        {'name':"Sára Šerá"},
        {'name':"Honza Novák"},
        {'name':"Petr Kamil"},
        {'name':"Filip Modrý"},
        {'name':"Ondřej Zelený"}
    ]
}

function phpAssignOrder(orderId, id) {
    console.log("asigning order " + orderId + " to driver " + id);
}

function phpUnassignOrder(id) {
    console.log("unasigning order " + id);
}

function phpRemoveOrder(id) {
    console.log("removing order " + id);
}

function phpGetUsers() {
    console.log("getting users");
    return [
        {'name':'Daniel Šerý', 'role':'admin'},
        {'name':'František Koleček', 'role':'admin'},
        {'name':'Sára Šerá', 'role':'driver'},
        {'name':'Pavel Morcinek', 'role':'user'},
    ]
}

function phpRemoveUser(id) {
    console.log("removed user " + id);
}

function phpGetRestaurants() {
    console.log("getting restaurants");
    return [
        {'id':1, 'name':'Formanka'},
        {'id':2, 'name':'Suzies'},
        {'id':3, 'name':'Na vyhlídce'}
    ]
}

function phpGetDailyMenu(id) {
    console.log("getting daily menu of restaurant " + id);
    return [
        {'id':0, 'name':'Chilli con carne, čerstvý chléb', 'price':114, 'image':null, 'type':'Jídlo', 'attributes':[{'id':1, 'name':"1 Lepek"}, {'id':6, 'name':"6 Sója"}]},
        {'id':1, 'name':'Kuřecí steak se sýrem a broskví, hranolky', 'price':109, 'image':null, 'type':'Jídlo', 'attributes':[{'id':7, 'name':"7 Mléko"}]},
        {'id':2, 'name':'Francouzské brambory, kyselý okurek', 'price':105, 'image':null, 'type':'Jídlo', 'attributes':[{'id':4, 'name':"4 Ryby"}, {'id':7, 'name':"7 Mléko"}]}
    ]
}

function phpGetStableMenu(id) {
    console.log("getting stable menu of restaurant " + id);
    return [
        {'id':3, 'name':'Česnečka', 'price':49, 'image':null, 'type':'Polévka', 'attributes':[{'id':1, 'name':"1 Lepek"}, {'id':3, 'name':"3 Vejce"}, {'id':7, 'name':"7 Mléko"}, {'id':9, 'name':"9 Celer"}]},
        {'id':4, 'name':'Hovězí Tataráček (6 ks půl krajíce topinek, česnek)', 'price':135, 'image':null, 'type':'Jídlo', 'attributes':[{'id':1, 'name':"1 Lepek"}, {'id':3, 'name':"3 Vejce"}, {'id':10, 'name':"10 Hořčice"}]},
        {'id':5, 'name':'Nakládaný Hermelín, chléb', 'price':65, 'image':null, 'type':'Jídlo', 'attributes':[{'id':7, 'name':"7 Mléko"}]}
    ]
}

function phpGetUserOrderDates(user) {
    console.log("getting orders of user " + user);
    return [
        {'id':0, 'date':"21-11-2019 15:34"},
        {'id':1, 'date':"21-11-2019 18:50"},
        {'id':2, 'date':"21-11-2019 23:20"},
    ];
}

function phpAddNewRestaurant(name) {
    console.log("added restaurant " + name);
}

function phpGetDriverOrderDates(driverId) {
    console.log("geting orders of driver " + driverId);
    return [
        {'id':0, 'date':"21-11-2019 15:34"},
        {'id':1, 'date':"21-11-2019 18:50"},
        {'id':2, 'date':"21-11-2019 23:20"},
    ];
}

function phpRemoveRestaurant(id) {
    console.log("removed restaurant " + id);
}

function phpGetOrder(id) {
    console.log("getting order " + id);
    return {
        'id':id,
        'state':'kuryr',
        'name':'Daniel Šerý',
        'address':'Božetěchova 1/2',
        'tel':'165 584 526',
        'restaurant':'Formanka',
        'price':567,
        'date':'21-11-2019 15:34',
        'order':'1x Česnečka 49 Kč<br>1x Hovězí burger ala Formanka, hranolky (1,3,7,10) 114 Kč'
    };
}

function phpRemoveMenuItem(id) {
    console.log("removing menu item " + id);
}

function phpMenuItemAppendAttribute(itemId, attributeId) {
    console.log("added attribute " + attributeId + " to menu item " + itemId);
}

function phpMenuItemRemoveAttribute(itemId, attributeId) {
    console.log("removed attribute " + attributeId + " from menu item " + itemId);
}

function phpAddDailyMenuItem(restaurantId) {
    console.log("adding default item to daily menu of restaurant " + restaurantId);
}

function phpAddStableMenuItem(restaurantId) {
    console.log("adding default item to stable menu of restaurant " + restaurantId);
}

function phpActualizeRestaurant(id, name, address) {
    console.log("setting restaurant " + id + " name: " + name + ", address: " + address);
}

function phpModifyMenuItem(id, name, price, type, file) {
    console.log("setting menu item " + id + " name: " + name + ", price: " + price, ", type: " + type + ", file: ", file);
}

function phpChangeOrderState(id, state) {
    console.log("changed order " + id + " state to " + state);
}

function phpCloseOrdersForRestaurant(id) {
    console.log("closed orders for restaurant " + id);
}

function phpUserRoleChanged(id, role) {
    console.log("changed role of user " + id + " to " + role);
}

function phpUserCreateUserForOrder(name, address, tel, mail) {
    console.log("creating user for order " + name + ", " + address + ", " + tel + ", " + mail);
}

function phpSendOrder(user, restaurantId, foodIds) {
    console.log("sending order of user " + user + " restaurant " + restaurantId + " food " + foodIds);
}

function phpGetUser(user) {
    console.log("getting user of name " + user);
    return {
        'name':'Daniel',
        'address':'Address of Daniel',
        'tel':'123 123 123',
        'password': 'asdfljsadflksjf',
        'mail': 'ds@s.cz',
    }
}