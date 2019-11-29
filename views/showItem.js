class ShowItem {
    constructor(parent, id, name, price, picture, categories) {
        this.id = id;
        this.name = "show-item";
        this.CreateBody();
        this.attributes = [];

        this.img.src = picture;
        this.nameLabel.innerText = name;
        this.price.innerText = price;
        this.categories = categories;

        for (var i in categories) {
            this.AppendAttribute(categories[i].name);
        }
        parent.appendChild(this.body);
        this.parent = parent;
    }

    Destroy() {
        this.parent.removeChild(this.body);
    }

    CreateBody() {
        this.body = Create("div", this.name, "body", "border", "mb-3");
        this.FillBody()
    }

    FillBody() {
        this.img = Create("img", this.name, "img", "float-left");
        this.body.appendChild(this.img);

        const inner = Create("div", this.name, "div", "float-left");
        this.body.appendChild(inner);

        this.CreatePrice(inner);

        this.attributesDiv = Create("div", this.name, "float-left", "mb-2");
        inner.appendChild(this.attributesDiv);

        this.CreateValue(inner);
    }

    CreatePrice(inner) {
        const moreInner = Create("div", this.name, "div", "float-left");
        inner.appendChild(moreInner);

        this.nameLabel = Create("h5", "float-left");
        moreInner.appendChild(this.nameLabel);

        const kc = Create("h5", "float-right");
        kc.innerText = " Kč";
        moreInner.appendChild(kc);

        this.price = Create("h5", "float-right");
        moreInner.appendChild(this.price);
    }

    CreateValue(inner) {
        const valueDiv = Create("div", "btn-group", "input-group", "number-spinner", "right");
        inner.appendChild(valueDiv);

        const dec = Create("button", "btn", "btn-secondary", "side-button");
        dec.setAttribute("data-dir", "down"); 
        valueDiv.appendChild(dec);
        dec.appendChild(Create("span", "fa", "fa-angle-down"));

        this.value = Create("input", "form-control", "text-center");
        this.value.type = "text";
        this.value.value = 0; 
        valueDiv.appendChild(this.value);

        const inc = Create("button", "btn", "btn-secondary", "side-button");
        inc.setAttribute("data-dir", "up"); 
        valueDiv.appendChild(inc);
        inc.appendChild(Create("span", "fa", "fa-angle-up"));
    }

    AppendAttribute(name) {
        const label = Create("button", this.name, "property", "btn", "btn-secondary");
        label.disabled = true;
        label.innerText = name;
        this.attributesDiv.appendChild(label);
    }
}