class ManageItem {
    constructor(parent, items, name, price, type, picture, categories) {
        this.name = "manage-item";
        this.body = this.CreateBody();
        this.parentItems = items;
        this.attributes = [];

        this.img.src = picture;
        this.fileLabel.innerText = picture;
        this.nameInput.value = name;
        this.priceInput.value = price;

        for (var i in categories) {
            this.AppendAttribute(categories[i]);
        }
        parent.appendChild(this.body);
        this.parent = parent;

        this.InitializeOptions();
        this.SetType(type);
    }

    CreateBody() {
        const body = document.createElement("div");
        SetClassList(body, this.name, "body", "border", "mb-3");
        
        body.appendChild(this.CreateProperties());
        body.appendChild(this.CreateAttributes());
        return body;
    }

    CreateProperties() {
        const body = document.createElement("div");
        SetClassList(body, this.name, "properties", "mb-3");

        this.img = document.createElement("img");
        SetClassList(this.img, this.name, "img");
        body.appendChild(this.img);

        const inner = document.createElement("div");
        SetClassList(inner, this.name, "inner");
        body.appendChild(inner);

        inner.appendChild(this.CreateNameInput());
        inner.appendChild(this.CreatePriceInput());
        inner.appendChild(this.CreateTypeInput());
        inner.appendChild(this.CreateImageInput());

        return body;
    }

    CreateNameInput() {
        const manage = this;
        const body = document.createElement("div");
        SetClassList(body, "input-group", "mb-3");

        const removeDiv = document.createElement("div");
        SetClassList(removeDiv, "input-group-prepend");
        body.appendChild(removeDiv);

        this.remove = document.createElement("button");
        SetClassList(this.remove, "btn", "btn-danger");
        this.remove.onclick = () => {
            ArrayRemove(manage.parentItems, manage);
            manage.parent.removeChild(manage.body);
        }
        removeDiv.appendChild(this.remove);

        var trashIcon = document.createElement("span");
        SetClassList(trashIcon, "fa", "fa-trash");
        this.remove.appendChild(trashIcon);

        const labelDiv = document.createElement("div");
        SetClassList(labelDiv, "input-group-prepend");
        body.appendChild(labelDiv);

        const label = document.createElement("span");
        SetClassList(label, "input-group-text");
        label.innerText = "Název";
        labelDiv.appendChild(label);

        this.nameInput = document.createElement("input");
        SetClassList(this.nameInput, "form-control");
        body.appendChild(this.nameInput);

        return body;
    }

    CreatePriceInput() {
        const body = document.createElement("div");
        SetClassList(body, "input-group", "mb-3");

        const labelDiv = document.createElement("div");
        SetClassList(labelDiv, "input-group-prepend");
        body.appendChild(labelDiv);

        const label = document.createElement("span");
        SetClassList(label, "input-group-text");
        label.innerText = "Cena";
        labelDiv.appendChild(label);

        this.priceInput = document.createElement("input");
        this.priceInput.type = "number";
        this.priceInput.step = "0.1";
        SetClassList(this.priceInput, "form-control");
        body.appendChild(this.priceInput);

        return body;
    }

    CreateTypeInput() {
        const select = document.createElement("select");
        SetClassList(select, "form-control", "mb-3");

        this.typeInput = select;
        return select;
    }

    InitializeOptions() {
        this.typeOptions = ["Jídlo", "Pití", "K pivu", "Alkohol", "Káva", "Maso", "Ryba", "Příloha"];
        this.CreateOption(this.typeInput, "Jídlo")
        this.CreateOption(this.typeInput, "Pití");
        this.CreateOption(this.typeInput, "K pivu");
        this.CreateOption(this.typeInput, "Alkohol");
        this.CreateOption(this.typeInput, "Káva");
        this.CreateOption(this.typeInput, "Maso");
        this.CreateOption(this.typeInput, "Ryba");
        this.CreateOption(this.typeInput, "Příloha");
    }

    SetType(type) {
        for (var i in this.typeOptions) {
            if (type == this.typeOptions[i])
                this.typeInput.selectedIndex = i;
        }
    }

    GetType() {
        return this.typeOptions[this.typeInput.selectedIndex];
    }

    CreateOption(select, value) {
        var option = document.createElement("option");
        option.setAttribute("value", value);
        var text = document.createTextNode(value);
        option.appendChild(text);
        select.appendChild(option);
    }

    CreateImageInput() {
        const manage = this;
        const body = document.createElement("div");
        SetClassList(body, "input-group", "mb-3");

        const fileDiv = document.createElement("div");
        SetClassList(fileDiv, "custom-file");
        body.appendChild(fileDiv);
        
        this.fileInput = document.createElement("input");
        this.fileInput.type = "file";
        this.fileInput.onchange = sender => {
            var input = sender.target;
            if (input.files && input.files[0]) {
                manage.fileLabel.innerText = input.files[0].name;
                var reader = new FileReader();
                reader.onload = function (e) {
                    manage.img.src = e.target.result;
                };
                reader.readAsDataURL(input.files[0]);
            }
        }

        SetClassList(this.fileInput, "custom-file-input");
        fileDiv.appendChild(this.fileInput);

        this.fileLabel = document.createElement("label");
        SetClassList(this.fileLabel, "custom-file-label");
        fileDiv.appendChild(this.fileLabel);

        const removeImageDiv = document.createElement("div");
        SetClassList(removeImageDiv, "input-group-append");
        body.appendChild(removeImageDiv);

        this.removeImage = document.createElement("button");
        SetClassList(this.removeImage, "btn", "btn-secondary");
        removeImageDiv.appendChild(this.removeImage);
        this.removeImage.onclick = () => {
            manage.fileLabel.innerText = "Picture";
            manage.img.src = null;
        }

        const trashIcon = document.createElement("span");
        SetClassList(trashIcon, "fa", "fa-trash");
        this.removeImage.appendChild(trashIcon);

        return body;
    }

    CreateAttributes() {
        const body = document.createElement("div");
        SetClassList(body, this.name, "properties", "float-left");
        
        this.attributesDiv = document.createElement("div");
        body.appendChild(this.attributesDiv);
        
        this.addAttribute = document.createElement("button");
        SetClassList(this.addAttribute, "attribute-button", "btn", "btn-success", "mb-2");
        $('.dropdown-toggle').dropdown()
        this.addAttribute.setAttribute("data-toggle", "dropdown");
        this.addAttribute.innerText = "+";
        body.appendChild(this.addAttribute);
        
        var dropDiv = document.createElement("div");
        SetClassList(dropDiv, "dropdown-menu");

        this.CreateAttributeOption(dropDiv, "1 Lepek");
        this.CreateAttributeOption(dropDiv, "2 Korýši");
        this.CreateAttributeOption(dropDiv, "3 Vejce");
        this.CreateAttributeOption(dropDiv, "4 Ryby");
        this.CreateAttributeOption(dropDiv, "5 Arašídy");
        this.CreateAttributeOption(dropDiv, "6 Sója");
        this.CreateAttributeOption(dropDiv, "7 Mléko");
        this.CreateAttributeOption(dropDiv, "8 Skořápkové plody");
        this.CreateAttributeOption(dropDiv, "9 Celer");
        this.CreateAttributeOption(dropDiv, "10 Hořčice");
        this.CreateAttributeOption(dropDiv, "11 Sezam");
        this.CreateAttributeOption(dropDiv, "12 Oxid siřičitý a siřičitany");
        this.CreateAttributeOption(dropDiv, "13 Vlčí bob");
        this.CreateAttributeOption(dropDiv, "14 Měkkýši");
        body.appendChild(dropDiv);
        
        return body;
    }

    CreateAttributeOption(dropDiv, name) {
        const manage = this;
        var item = document.createElement("a");
        SetClassList(item, "dropdown-item");
        item.onclick = () => {
            manage.AppendAttribute(name);
        }
        item.innerText = name;
        dropDiv.appendChild(item);
    }

    AppendAttribute(name) {
        const manage = this;
        if (ArrayContains(this.attributes, name)) return;
        this.attributes.push(name);

        const body = document.createElement("div");
        SetClassList(body, "btn-group", "mb-2");
        
        const label = document.createElement("button");
        SetClassList(label, "btn", "btn-secondary");
        label.disabled = true;
        label.innerText = name;
        body.appendChild(label);
        
        const remove = document.createElement("button");
        SetClassList(remove, "attribute-button", "btn", "btn-secondary");
        remove.onclick = () => {
            manage.RemoveAttribute(body, name);
        };
        body.appendChild(remove);
        
        const trashIcon = document.createElement("span");
        SetClassList(trashIcon, "fa", "fa-trash");
        remove.appendChild(trashIcon);

        this.attributesDiv.appendChild(body);
    }

    RemoveAttribute(attribute, name) {
        this.attributesDiv.removeChild(attribute);
        ArrayRemove(this.attributes, name)
    }
}