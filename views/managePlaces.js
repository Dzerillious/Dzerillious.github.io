class ManagePlaces {
    constructor() {
        this.items = [];
        this.name = "manage-places"
        this.places = document.getElementById("manage-places");
        this.InitializeComponents();
    }
    
    InitializeComponents() {
        this.AddItem("Formanka", true);
        this.AddItem("Suzies", false);
        this.AddItem("Na vyhlídce", false);
    }

    AddItem(text, active) {
        const manage = this;
        this.items.push(text);

        const body = document.createElement("div");
        SetClassList(body, this.name, "row", "input-group", "mb-2");
        this.places.appendChild(body);

        const selectDiv = document.createElement("div");
        SetClassList(selectDiv, this.name, "select-div", "input-group-prepend");
        body.appendChild(selectDiv);
        
        const select = document.createElement("button");
        if (active) SetClassList(select, this.name, "select", "btn", "btn-primary");
        else SetClassList(select, this.name, "select", "btn");
        select.onclick = () => {

        }
        select.innerText = text;
        selectDiv.appendChild(select);

        const trashDiv = document.createElement("div");
        SetClassList(trashDiv, "input-group-append");
        body.appendChild(trashDiv);

        const trash = document.createElement("button");
        SetClassList(trash, "btn", "btn-secondary");
        trashDiv.appendChild(trash);
        trash.onclick = () => {
            ArrayRemove(manage.items, text);
            manage.places.removeChild(body);
        }
        
        const trashIcon = document.createElement("span");
        SetClassList(trashIcon, "fa", "fa-trash");
        trash.appendChild(trashIcon);
    }
}

var managePlaces = new ManagePlaces();

function addPlace() {
    managePlaces.AddItem("Restaurace", false)
}