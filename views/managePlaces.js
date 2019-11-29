class ManagePlaces {
    constructor() {
        this.name = "manage-places"
        this.places = document.getElementById("manage-places");
        this.SetPlaces();
    }

    ActualizePlace(button, id) {
        SetClassList(button, this.name, "select", "btn", "btn-primary");
        managePlace.ActualizePlace(id);
    }
    
    SetPlaces() {
        ClearElement(this.places);
        this.items = [];
        this.buttons = [];
        
        const restaurants = phpGetRestaurants();
        for (var i in restaurants) {
            this.AddPlace(restaurants[i].id, restaurants[i].name);
        }
        this.ActualizePlace(this.buttons[0], restaurants[0].id);
    }

    AddPlace(id, text) {
        const manage = this;
        this.items.push(text);

        const body = Create("div", this.name, "row", "input-group", "mb-2");
        this.places.appendChild(body);

        const selectDiv = Create("div", this.name, "select-div", "input-group-prepend");
        body.appendChild(selectDiv);
        
        const select = Create("button", this.name, "select", "btn");
        select.onclick = () => {
            for (var i in manage.buttons) {
                SetClassList(manage.buttons[i], this.name, "select", "btn");
            }
            this.ActualizePlace(select, id);
        };
        this.buttons.push(select);
        select.innerText = text;
        selectDiv.appendChild(select);

        const trashDiv = Create("div", "input-group-append");
        body.appendChild(trashDiv);

        const trash = Create("button", "btn", "btn-secondary");
        trashDiv.appendChild(trash);
        trash.onclick = () => {
            ArrayRemove(manage.items, text);
            manage.places.removeChild(body);
            phpRemoveRestaurant(id);
        }
        trash.appendChild(Create("span", "fa", "fa-trash"));
    }
}

var managePlaces = new ManagePlaces();

function addPlace() {
    phpAddNewRestaurant("Restaurace");
    managePlaces.SetPlaces();
}