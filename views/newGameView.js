const NEW_GAME_BODY = "new-game-body";

class NewGameView {
    constructor() {
        this.name = "new-game";
    }

    InitializeComponents() {
        this.body = this.CreateBody();
        this.title = this.CreateTitle();
        this.CreateDifficulties();
        this.CreateModes();
        this.CreateCardSets();
        this.newGame = this.CreateNewGameButton();
    }

    CreateBody() {
        const body = Create("div", this.name, "body");
        document.body.appendChild(body);
        return body;
    }

    CreateTitle() {
        const title = Create("p", this.name, "title", CANT_SELECT_TEXT);
        title.innerText = "New game";
        this.body.appendChild(title);
        return title;
    }

    CreateDifficulties() {
        const difficulties = Create("div", this.name, "difficulties");
        this.body.appendChild(difficulties);
        this.difficultyButtons = [];

        this.CreateDifficultyButton(difficulties, "Easy", "rgb(32, 113, 0)", 1);
        this.CreateDifficultyButton(difficulties, "Normal", "rgb(255, 190, 0)", 2);
        this.CreateDifficultyButton(difficulties, "Hard", "rgb(208, 32, 6)", 3);

        SetClassList(this.difficultyButtons[options.difficulty], this.name, "difficulty", "new-game", "select-long-button", "selected1", CANT_SELECT_TEXT);
    }

    CreateDifficultyButton(difficulties, name, color, id) {
        const difficulty = Create("div", this.name, "difficulty", "new-game", "select-long-button", CANT_SELECT_TEXT);
        difficulty.innerText = name;
        difficulty.style.color = color;
        difficulty.onclick = () => {
            PlayClick();
            for (var button of this.difficultyButtons)
                SetClassList(button, this.name, "difficulty", "new-game", "select-long-button", CANT_SELECT_TEXT);
            SetClassList(difficulty, this.name, "difficulty", "new-game", "select-long-button", "selected" + id, CANT_SELECT_TEXT);
            options.SetDifficulty(id - 1);
        }
        this.difficultyButtons.push(difficulty);
        difficulties.appendChild(difficulty);
    }

    CreateModes() {
        const modes = Create("div", this.name, "modes");
        modes.style.clear = "both";
        this.body.appendChild(modes);

        var mode = null;
        var mode2 = null;
        if (options.differentMatch == "true") {
            mode = Create("div", this.name, "mode");
            mode2 = Create("div", this.name, "mode", "selected");
        }
        else {
            mode = Create("div", this.name, "mode", "selected");
            mode2 = Create("div", this.name, "mode");
        }

        modes.appendChild(mode);
        mode.onclick = () => {
            PlayClick();
            SetClassList(mode2, this.name, "mode");
            SetClassList(mode, this.name, "mode", "selected");
            options.SetDifferentMatch(false);
        };

        const img = Create("img", this.name, "mode-img");
        img.src = `images/match_same.png`;
        mode.appendChild(img);

        modes.appendChild(mode2);
        mode2.onclick = () => {
            PlayClick();
            SetClassList(mode2, this.name, "mode", "selected");
            SetClassList(mode, this.name, "mode");
            options.SetDifferentMatch(true);
        };

        const img2 = Create("img", this.name, "mode-img");
        img2.src = `images/match_different.png`;
        mode2.appendChild(img2);
    }

    CreateCardSets() {
        const sets = Create("div", this.name, "sets");
        sets.style.clear = "both";
        this.body.appendChild(sets);
        this.setBorders = [];

        const disney = this.CreateCardSet(sets, "disney");
        const pixar = this.CreateCardSet(sets, "pixar");
        const marvel = this.CreateCardSet(sets, "marvel");

        if (options.setOfCards == "disney") SetClassList(disney, this.name, "set", "set-border", "selected");
        if (options.setOfCards == "pixar") SetClassList(pixar, this.name, "set", "set-border", "selected");
        if (options.setOfCards == "marvel") SetClassList(marvel, this.name, "set", "set-border", "selected");
    }

    CreateCardSet(sets, name) {
        const setDiv = Create("div", this.name, "set");
        sets.appendChild(setDiv);

        const setImg = Create("img", this.name, "mode-img");
        setImg.src = "images/" + name + ".jpg";
        setDiv.appendChild(setImg);

        const setBorder = Create("div", this.name, "set", "set-border");
        setDiv.appendChild(setBorder);
        this.setBorders.push(setBorder);

        setDiv.onclick = () => {
            PlayClick();
            for (var border of this.setBorders)
                SetClassList(border, this.name, "set", "set-border");
            SetClassList(setBorder, this.name, "set", "set-border", "selected");
            options.SetCards(name);
        };

        return setBorder;
    }

    CreateNewGameButton() {
        const newGame = Create("div", this.name, LONG_BUTTON, CANT_SELECT_TEXT);
        newGame.style.margin = "45px auto 0 auto";
        newGame.innerText = "Play";
        newGame.onclick = () => {
            PlayClick();
            viewHolder.CreateGameView();
        }
        this.body.appendChild(newGame);
        return newGame;
    }

    Destroy() {
        document.body.removeChild(this.body);
    }
}