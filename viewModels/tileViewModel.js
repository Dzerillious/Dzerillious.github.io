class TileViewModel {
    constructor(view, idx) {
        this.onRotate = new CustomEvent(view);
        this.onHide = new CustomEvent(view);
        this.idx = idx;
        this.showed = false;
    }

    ClickedCommand() {
        if (this.showed || game.showedTiles.length >= 2) return;
        game.ShowTile(this);
        this.Rotate();
    }

    Rotate() {
        this.showed = !this.showed;
        this.onRotate.Invoke();
    }

    Hide() {
        this.onHide.Invoke();
    }
}