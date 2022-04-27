class GameViewModel {
    constructor() {
        this.showedTiles = new Array();
        this.remaining = options.cardCount;
        this.onTimeChanged = new CustomEvent();
        this.onScoreChanged = new CustomEvent();
    }

    SetEventParent(view) {
        this.onTimeChanged.SetElement(view);
        this.onScoreChanged.SetElement(view);
    }

    StartCountDown() {
        this.ms = 0;
        this.tempMs = 0;
        this.totalMs = 0;
        this.score = 0;

        this.timer = setInterval(() => {
            this.ms += 100;
            this.tempMs += 100;
            this.totalMs += 100;
            this.onTimeChanged.Invoke(this.ms);
        }, 100);
    }

    ShowTile(tile) {
        this.showedTiles.push(tile);
        if (this.showedTiles.length >= 2) {
            var first = this.showedTiles[0];
            var second = this.showedTiles[1];
            this.AfterShow(first, second);
        }
    }

    AfterShow(first, second) {
        setTimeout(() => {
            this.showedTiles.splice(0, 2);
            if (!options.animations) this.tempMs += 200;
            if (first.idx == second.idx) {
                this.HideTiles(first, second);
            }
            else {
                first.Rotate();
                second.Rotate();
            }
        }, options.hideTimeout);
    }

    HideTiles(first, second) {
        first.Hide();
        second.Hide();
        this.remaining -= 2;
        const time = this.tempMs * 5 + this.totalMs;
        if (this.differentMatch) time *= 0.4;
        this.score += 200000 / (1 + time / 240) >> 0;
        this.tempMs = 0;

        this.onScoreChanged.Invoke(this.score);
        this.CheckEnd();
    }

    CheckEnd() {
        if (this.remaining == 0) {
            viewHolder.CreateScoreView(this.score);
            clearInterval(this.timer);
        }
    }
}