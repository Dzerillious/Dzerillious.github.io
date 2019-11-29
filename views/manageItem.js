class ManageItem {
    constructor(managePlaces, id, name, price, type, picture, categories) {
        this.itemId = id;
        this.name = "manage-item";
        this.body = this.CreateBody();
        this.attributes = [];

        this.img.src = picture;
        this.fileLabel.innerText = picture;
        this.nameInput.value = name;
        this.priceInput.value = price;

        for (var i in categories) {
            this.AppendAttribute(categories[i].id, categories[i].name);
        }
        this.managePlaces = managePlaces;

        this.InitializeOptions();
        this.typeInput.value = type;
        return this.body;
    }

    CreateBody() {
        const manage = this;
        const body = Create("div", this.name, "body", "border", "mb-3");
        body.appendChild(this.CreateProperties());
        body.appendChild(this.CreateAttributes());

        const actualize = Create("button", "btn", "btn-primary", "float-right");
        actualize.innerText = "Aktualizovat";
        actualize.onclick = () => {
            phpModifyMenuItem(manage.itemId, manage.nameInput.value, manage.priceInput.value, manage.typeInput.value, manage.fileLabel.innerText);
        };
        body.appendChild(actualize);
        return body;
    }

    CreateProperties() {
        const body = Create("div", this.name, "properties", "mb-3");

        this.img = Create("img", this.name, "img");
        body.appendChild(this.img);

        const inner = Create("div", this.name, "inner");
        body.appendChild(inner);

        inner.appendChild(this.CreateNameInput());
        inner.appendChild(this.CreatePriceInput());
        inner.appendChild(this.CreateTypeInput());
        inner.appendChild(this.CreateImageInput());

        return body;
    }

    CreateNameInput() {
        const manage = this;
        const body = Create("div", "input-group", "mb-3");
        const removeDiv = Create("div", "input-group-prepend");
        body.appendChild(removeDiv);

        this.remove = Create("button", "btn", "btn-danger");
        this.remove.onclick = () => {
            ArrayRemove(manage.parentItems, manage);
            this.managePlaces.ActualizePlace(this.currentRestaurant);
            phpRemoveMenuItem(this.itemId);
        }
        removeDiv.appendChild(this.remove);
        this.remove.appendChild(Create("span", "fa", "fa-trash"));

        const labelDiv = Create("div", "input-group-prepend");
        body.appendChild(labelDiv);

        const label = Create("span", "input-group-text");
        label.innerText = "Název";
        labelDiv.appendChild(label);

        this.nameInput = Create("input", "form-control");
        body.appendChild(this.nameInput);

        return body;
    }

    CreatePriceInput() {
        const body = Create("div", "input-group", "mb-3");
        const labelDiv = Create("div", "input-group-prepend");
        body.appendChild(labelDiv);

        const label = Create("span", "input-group-text");
        label.innerText = "Cena";
        labelDiv.appendChild(label);

        this.priceInput = Create("input", "form-control");
        this.priceInput.type = "number";
        this.priceInput.step = "0.1";
        body.appendChild(this.priceInput);

        return body;
    }

    CreateTypeInput() {
        this.typeInput = Create("select", "form-control", "mb-3");
        return this.typeInput;
    }

    InitializeOptions() {
        this.CreateOption(this.typeInput, "Jídlo")
        this.CreateOption(this.typeInput, "Pití");
        this.CreateOption(this.typeInput, "K pivu");
        this.CreateOption(this.typeInput, "Alkohol");
        this.CreateOption(this.typeInput, "Káva");
        this.CreateOption(this.typeInput, "Maso");
        this.CreateOption(this.typeInput, "Ryba");
        this.CreateOption(this.typeInput, "Příloha");
    }

    CreateOption(select, value) {
        var option = Create("option");
        option.setAttribute("value", value);
        option.value = value;
        var text = document.createTextNode(value);
        option.appendChild(text);
        select.appendChild(option);
    }

    CreateImageInput() {
        const manage = this;
        const body = Create("div", "input-group", "mb-3");

        const fileDiv = Create("div", "custom-file");
        body.appendChild(fileDiv);
        
        this.fileInput = Create("input", "custom-file-input");
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
        fileDiv.appendChild(this.fileInput);

        this.fileLabel = Create("label", "custom-file-label");
        fileDiv.appendChild(this.fileLabel);

        const removeImageDiv = Create("div", "input-group-append");
        body.appendChild(removeImageDiv);

        this.removeImage = Create("button", "btn", "btn-secondary");
        removeImageDiv.appendChild(this.removeImage);
        this.removeImage.onclick = () => {
            manage.fileLabel.innerText = "Picture";
            manage.img.src = null;
        }
        this.removeImage.appendChild(Create("span", "fa", "fa-trash"));

        return body;
    }

    CreateAttributes() {
        const body = Create("div", "properties", "float-left");

        this.attributesDiv = Create("div", "float-left");
        body.appendChild(this.attributesDiv);
        
        this.addAttribute = Create("button", "attribute-button", "btn", "btn-success", "mb-2");
        $('.dropdown-toggle').dropdown()
        this.addAttribute.setAttribute("data-toggle", "dropdown");
        this.addAttribute.innerText = "+";
        body.appendChild(this.addAttribute);
        
        var dropDiv = Create("div", "dropdown-menu");
        this.CreateAttributeOption(dropDiv, 1, "1 Lepek");
        this.CreateAttributeOption(dropDiv, 2, "2 Korýši");
        this.CreateAttributeOption(dropDiv, 3, "3 Vejce");
        this.CreateAttributeOption(dropDiv, 4, "4 Ryby");
        this.CreateAttributeOption(dropDiv, 5, "5 Arašídy");
        this.CreateAttributeOption(dropDiv, 6, "6 Sója");
        this.CreateAttributeOption(dropDiv, 7, "7 Mléko");
        this.CreateAttributeOption(dropDiv, 8, "8 Skořápkové plody");
        this.CreateAttributeOption(dropDiv, 9, "9 Celer");
        this.CreateAttributeOption(dropDiv, 10, "10 Hořčice");
        this.CreateAttributeOption(dropDiv, 11, "11 Sezam");
        this.CreateAttributeOption(dropDiv, 12, "12 Oxid siřičitý a siřičitany");
        this.CreateAttributeOption(dropDiv, 13, "13 Vlčí bob");
        this.CreateAttributeOption(dropDiv, 14, "14 Měkkýši");
        body.appendChild(dropDiv);
        
        return body;
    }

    CreateAttributeOption(dropDiv, id, name) {
        const manage = this;
        var item = Create("a", "dropdown-item");
        item.onclick = () => {
            if (manage.AppendAttribute(id, name))
                phpMenuItemAppendAttribute(manage.itemId, id);
        }
        item.innerText = name;
        dropDiv.appendChild(item);
    }

    AppendAttribute(id, name) {
        const manage = this;
        if (ArrayContains(this.attributes, id)) return false;
        this.attributes.push(id);

        const body = Create("div", "btn-group", "mb-2");
        const label = Create("button", "btn", "btn-secondary");
        label.disabled = true;
        label.innerText = name;
        body.appendChild(label);
        
        const remove = Create("button", "attribute-button", "btn", "btn-secondary");
        remove.onclick = () => {
            manage.RemoveAttribute(body, id);
            phpMenuItemRemoveAttribute(this.itemId, id);
        };
        body.appendChild(remove);
        remove.appendChild(Create("span", "fa", "fa-trash"));

        this.attributesDiv.appendChild(body);
        return true;
    }

    RemoveAttribute(attribute, id) {
        this.attributesDiv.removeChild(attribute);
        ArrayRemove(this.attributes, id)
    }
}