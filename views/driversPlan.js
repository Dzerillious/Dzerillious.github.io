class DriversPlan {
    constructor() {
        this.name = "drivers-plan";
        this.assigned = document.getElementById("assigned");
        this.unassigned = document.getElementById("unassigned");
        this.AddDrivers();
    }
    
    FormatString(date, restaurant, address) {
        return date + " - " + restaurant + " -> " + address; 
    }

    ActualizeDriver(a, id) {
        this.currentDriver = id;
        this.assignedNames = [];
        this.unassignedNames = [];
        SetClassList(a, "nav-link", "active");
        
        ClearElement(this.assigned);
        ClearElement(this.unassigned);
        const driverOrders = phpGetDriverOrders(this.currentDriver);
        for (var i in driverOrders) {
            this.AddToAssigned(driverOrders[i].id, this.FormatString(driverOrders[i].date, driverOrders[i].restaurant, driverOrders[i].address));
        }
        const unassigned = phpGetUnassignedOrders();
        for (var i in unassigned) {
            this.AddToUnassigned(unassigned[i].id, this.FormatString(unassigned[i].date, unassigned[i].restaurant, unassigned[i].address));
        }
    }

    AddDrivers() {
        this.aArray = [];
        var drivers = document.getElementById("drivers");
        ClearElement(drivers);

        const driverNames = phpGetDrivers();
        for (var i in driverNames) {
            this.AddDriver(drivers, driverNames[i].id, driverNames[i].name);
        }
        this.ActualizeDriver(this.aArray[0], driverNames[0].id);
    }

    AddDriver(drivers, driverId, driverName) {
        var manage = this;
        const li = Create("li", "nav-item");

        const a = Create("a", "nav-link");
        this.aArray.push(a);
        a.onclick = () => {
            for (var i in manage.aArray) {
                SetClassList(manage.aArray[i], "nav-link");
            }
            this.ActualizeDriver(a, driverId);
        }
        a.text = driverName;

        li.appendChild(a);
        drivers.appendChild(li);
    }

    AddToAssigned(id, name) {
        this.assignedNames.push(name);
        const li = Create("li", "nav-item");

        const div = Create("div", "input-group", "mb-3");
        li.appendChild(div);

        const input = Create("input", "form-control");
        input.disabled = true;
        input.placeholder = name;
        div.appendChild(input);

        const buttonDiv = Create("div", "input-group-append");
        div.appendChild(buttonDiv);

        const button = Create("button", "btn", "btn-secondary");
        button.appendChild(Create("span", "fas", "fa-chevron-right"));
        button.onclick = () => {
            this.RemoveAssigned(name, li);
            this.AddToUnassigned(id, name);
            phpUnassignOrder(id);
        };
        buttonDiv.appendChild(button);

        this.assigned.appendChild(li);
    }

    RemoveAssigned(name, li) {
        ArrayRemove(this.assignedNames, name);
        this.assigned.removeChild(li);
    }

    AddToUnassigned(id, name) {
        this.unassignedNames = name;
        const li = Create("li", "nav-item");

        const div = Create("div", "input-group", "mb-3");
        li.appendChild(div);

        const buttonDiv = Create("div", "input-group-prepend");
        div.appendChild(buttonDiv);

        const button = Create("button", "btn", "btn-secondary");
        button.appendChild(Create("span", "fas", "fa-chevron-left"));
        button.onclick = () => {
            this.RemoveUnassigned(name, li);
            this.AddToAssigned(id, name);
            phpAssignOrder(id, this.currentDriver);
        };
        buttonDiv.appendChild(button);

        const input = Create("input", "form-control");
        input.disabled = true;
        input.placeholder = name;
        div.appendChild(input);

        const button2Div = Create("div", "input-group-append");
        div.appendChild(button2Div);

        const button2 = Create("button", "btn", "btn-danger");
        button2.appendChild(Create("span", "fa", "fa-trash"));
        button2.onclick = () => {
            this.RemoveUnassigned(name, li);
            phpRemoveOrder(id);
        };
        button2Div.appendChild(button2);
        this.unassigned.appendChild(li);
    }

    RemoveUnassigned(name, li) {
        ArrayRemove(this.unassignedNames, name);
        this.unassigned.removeChild(li);
    }
}

var driversPlan = new DriversPlan();