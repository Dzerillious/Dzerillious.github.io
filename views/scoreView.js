class ScoreView {
    constructor(score) {
        this.name = "score";
        this.score = score;
    }

    InitializeComponents() {
        this.body = this.CreateBody();
        this.CreateTitle();
        this.CreateScore();
        this.CreateInput();
        this.CreateButtons();
    }

    CreateBody() {
        const body = Create("div", this.name, "body");
        document.body.appendChild(body);
        return body;
    }

    CreateTitle() {
        const title = Create("p", this.name, "title", CANT_SELECT_TEXT);
        title.innerText = "You won";
        this.body.appendChild(title);
    }

    CreateScore() {
        const scoreDiv = Create("div", this.name, "score-div");
        this.body.appendChild(scoreDiv);

        const score = Create("p", this.name, "sub-title", CANT_SELECT_TEXT);
        score.innerText = "Your score is " + this.score;
        scoreDiv.appendChild(score);
    }

    CreateInput() {
        this.input = Create("input", this.name);
        this.input.placeholder = "Name";
        this.body.appendChild(this.input);
    }
    
    CreateButtons() {
        const buttonsDiv = Create("div", this.name, "buttons");

        const cancel = Create("div", this.name, BUTTON, "danger", CANT_SELECT_TEXT);
        cancel.onclick = () => {
            PlayClick();
            viewHolder.CreateGameView();
        }

        const imgCancel = Create("img");
        imgCancel.src = "images/cancel.png";
        cancel.appendChild(imgCancel);
        buttonsDiv.appendChild(cancel);

        const ok = Create("div", this.name, BUTTON, "selected", CANT_SELECT_TEXT);
        ok.onclick = () => {
            PlayClick();
            options.bestPlayers.push({name: this.input.value, score: this.score});
            document.cookie = "bestPlayers=" + JSON.stringify(options.bestPlayers);
            viewHolder.CreateTitleView();
        }

        const img = Create("img");
        img.src = "images/ok.png";
        ok.appendChild(img);
        buttonsDiv.appendChild(ok);

        this.body.appendChild(buttonsDiv);
    }

    Destroy() {
        document.body.removeChild(this.body);
    }
}