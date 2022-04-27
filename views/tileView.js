class TileView {
    constructor(boardView, idx) {
        this.name = "pexeso-tile";
        this.idx = idx;
        this.boardView = boardView;
        this.pictureVisible = false;
        this.viewModel = this.CreateViewModel(idx);
    }

    CreateViewModel(idx) {
        const viewModel = new TileViewModel(this, idx / 2 >> 0);
        viewModel.onRotate.Subscribe(this, this.RotateAnimation);
        viewModel.onHide.Subscribe(this, this.Hide);
        return viewModel;
    }

    InitializeComponents() {
        this.body = this.CreateBody(this.boardView.body);
        this.front = this.CreateBackSide(this.body);
        this.back = this.CreateFrontSide(this.idx);
    }

    CreateBody(board) {
        const tile = this;
        const body = Create("div", this.name, "body", BUTTON, CANT_SELECT_TEXT);
        body.onclick = () => {
            PlayClick();
            tile.viewModel.ClickedCommand();
        }
        board.appendChild(body);
        return body;
    }

    CreateBackSide() {
        const text = Create("p", this.name, "back", BUTTON, CANT_SELECT_TEXT)
        text.innerText = "AP";
        this.body.appendChild(text);
        return text;
    }

    CreateFrontSide(idx) {
        const image = Create("img", this.name, "front", BUTTON, CANT_SELECT_TEXT);
        idx = options.differentMatch ? idx : idx - idx % 2;
        image.src = `images/card_sets/${options.setOfCards}/${idx}.png`;
        return image;
    }

    RotateAnimation(receiver) {
        receiver.body.classList.add("rotate");
        setTimeout(() => {
            receiver.body.replaceChild(receiver.back, receiver.front);
            [receiver.back, receiver.front] = [receiver.front, receiver.back];
            receiver.pictureVisible = !receiver.pictureVisible;

            if (receiver.pictureVisible) receiver.body.classList.add("selected");
            else receiver.body.classList.remove("selected");
            setTimeout(() => {
                receiver.body.classList.remove("rotate");
            }, 75);
        }, 75);
    }

    Hide(receiver) {
        receiver.body.classList.add("hidden");
    }
}