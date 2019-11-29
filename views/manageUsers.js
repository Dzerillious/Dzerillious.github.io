class ManageUsers {
    constructor() {
        this.name = "manage-users"
        this.usersDiv = document.getElementById("users");
        this.SetUsers();
    }
    
    SetUsers() {
        this.users = phpGetUsers();
        for (var i in this.users) {
            this.AddUser(this.users[i].name, this.users[i].role);
        }
    }

    AddUser(name, role) {
        const tr = Create("tr");
        const th = Create("th");
        th.scope = "row";
        th.innerText = name;

        tr.appendChild(th);
        const td1 = Create("td");
        tr.appendChild(td1);

        this.select = this.CreateSelect();
        this.select.value = role;
        this.select.onselectionchange = () => {
            phpUserRoleChanged(id, this.select.value);
        };
        td1.appendChild(this.select);

        const td2 = Create("td");
        tr.appendChild(td2);

        const div = Create("div", "btn-group");
        div.role = "group";
        td2.appendChild(div);
        
        const btn1 = Create("button", "btn", "btn-secondary");
        btn1.setAttribute("data-toggle", "modal");
        btn1.setAttribute("data-target", "#modalUpravit");
        btn1.appendChild(Create("span", "fa", "fa-wrench"));
        btn1.onclick = () => {
            this.currentUser = name;
            setAdminUserData(name);
        };
        div.appendChild(btn1);
        
        const btn2 = Create("button", "btn", "btn-danger");
        btn2.appendChild(Create("span", "fa", "fa-trash"));
        btn2.text = " Odebrat";
        btn2.onclick = () => {  
            this.usersDiv.removeChild(tr);
            phpRemoveUser(name);
        };
        div.appendChild(btn2);

        tr.appendChild(td2);
        this.usersDiv.appendChild(tr);
    }

    CreateSelect() {
        const select = Create("select", "form-control");
        this.CreateOption(select, "user");
        this.CreateOption(select, "driver");
        this.CreateOption(select, "operator");
        this.CreateOption(select, "admin");
        this.CreateOption(select, "none");
        return select;
    }

    CreateOption(select, name) {
        const option = Create("option");
        option.value = name;
        option.text = name;
        select.appendChild(option);
    }
}

var manageUsers = new ManageUsers();