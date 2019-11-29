class ShowPlaces {
    constructor() {
        this.name = "show-places";
        this.AddPlaces();
    }

    ActualizePlace(place, id) {
        SetClassList(place, "nav-link", "active");
        showPlace.Place = place.text;
        showPlace.ActualizePlace(id);
    }

    AddPlaces() {
        this.aArray = [];
        var places = document.getElementById("places");

        ClearElement(places);
        const restaurants = phpGetRestaurants();
        for (var i in restaurants) {
            this.AddPlace(places, restaurants[i].id, restaurants[i].name);
        }
        this.ActualizePlace(this.aArray[0], restaurants[0].id);
    }

    AddPlace(places, id, place) {
        var manage = this;
        const li = Create("li", "nav-item");

        const a = Create("a", "nav-link");
        this.aArray.push(a);
        a.onclick = () => {
            for (var i in manage.aArray) {
                SetClassList(manage.aArray[i], "nav-link");
            }
            this.ActualizePlace(a, id);
        }
        a.text = place;
        li.appendChild(a);
        places.appendChild(li);
    }
}

var managePurchase = new ShowPlaces();