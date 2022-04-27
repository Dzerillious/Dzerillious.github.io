class GameHeaderView {
    constructor(gameView, gameViewModel) {
        this.name = "game-header";
        this.gameView = gameView;
        this.gameViewModel = gameViewModel;

        this.SubscribeToEvents();
    }

    InitializeComponents() {
        this.body = this.CreateBody();
        this.time = this.CreateTimer();
        this.more = this.CreateMoreButton();
        this.score = this.CreateScore();
    }

    CreateBody() {
        const body = Create("div", this.name, "body");
        this.gameView.body.appendChild(body);
        return body;
    }

    CreateTimer() {
        const time = Create("div", this.name, "time", CANT_SELECT_TEXT);
        time.innerText = "Time: 0s";
        this.body.appendChild(time);
        return time;
    }

    CreateMoreButton() {
        var header = this;

        const more = Create("div", this.name, "more", BUTTON, CANT_SELECT_TEXT);
        more.onclick = () => {
            PlayClick();
            header.gameView.moreMenu.Expand();
        }
        this.body.appendChild(more);

        const moreText = Create("div", this.name, "more-text", CANT_SELECT_TEXT);
        moreText.innerText = "lll";
        more.appendChild(moreText);
        return more;
    }

    CreateScore() {
        const score = Create("div", this.name, "score", CANT_SELECT_TEXT);
        score.innerText = "Score: 0";
        this.body.appendChild(score);
        return score;
    }

    SubscribeToEvents() {
        this.gameViewModel.onTimeChanged.Subscribe(this, this.TimeChanged);
        this.gameViewModel.onScoreChanged.Subscribe(this, this.ScoreChanged);
    }

    TimeChanged(receiver, value) {
        if (value > 60000) receiver.time.innerText = `Time: ${value / 60000 >> 0}m${value%60000/1000}s`;
        else receiver.time.innerText = `Time: ${value / 1000}s`;
    }

    ScoreChanged(receiver, value) {
        receiver.score.innerText = `Score: ${value}`;
    }
}