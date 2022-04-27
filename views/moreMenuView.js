const MORE_MENU_BUTTON = "more-menu-button";

class MoreMenuView {
    constructor(gameView, gameViewModel) {
        this.viewModel = gameViewModel;
        this.gameView = gameView;
    }

    InitializeComponent() {
        this.body = this.CreateBody(); 
        this.lessButton = this.CreateLessButton();

        this.newGame = this.CreateNewGameButton();
        this.restart = this.CreateRestartButton();
        this.sound = this.CreateSoundButton();
        // this.music = this.CreateMusicButton();
    }

    CreateBody() {
        const body = Create("div", "more-menu", "div");
        document.body.appendChild(body);
        return body;
    }

    CreateLessButton() {
        var moreMenu = this;

        const less = Create("div", BUTTON, "more-menu", "less-button", CANT_SELECT_TEXT);
        less.onclick = () => moreMenu.Collapse();
        this.body.appendChild(less);

        const lessText = Create("div", "more-menu", "less-button-text", CANT_SELECT_TEXT);
        lessText.innerText = "lll";
        less.appendChild(lessText);

        return less;
    }

    CreateNewGameButton() {
        const newGame = Create("div", LONG_BUTTON, MORE_MENU_BUTTON, CANT_SELECT_TEXT);
        newGame.style.margin = "300px 25px 25px 25px";
        newGame.innerText = "New Game";
        newGame.onclick = () => viewHolder.CreateNewGameView();
        this.body.appendChild(newGame);
        return newGame;
    }

    CreateRestartButton() {
        const restart = Create("div", LONG_BUTTON, MORE_MENU_BUTTON, CANT_SELECT_TEXT);
        restart.innerText = "Restart";
        restart.onclick = () => viewHolder.CreateGameView();
        this.body.appendChild(restart);
        return restart;
    }

    CreateSoundButton() {
        var moreMenu = this;

        const sound = Create("div", LONG_BUTTON, MORE_MENU_BUTTON, CANT_SELECT_TEXT);
        sound.innerText = `Sound ${this.LevelLs(options.soundLevel)}`;
        sound.onclick = () => {
            options.ChangeSoundLevel();
            PlayClick();
            moreMenu.sound.innerText = `Sound ${moreMenu.LevelLs(options.soundLevel)}`;
        };
        this.body.appendChild(sound);
        return sound;
    }

    // CreateMusicButton() {
    //     var moreMenu = this;

    //     const music = Create("div", LONG_BUTTON, MORE_MENU_BUTTON, CANT_SELECT_TEXT);
    //     music.innerText = `Music ${this.LevelLs(options.musicLevel)}`;
    //     music.onclick = () => {
    //         options.ChangeMusicLevel();
    //         PlayClick();
    //         moreMenu.music.innerText = `Music ${moreMenu.LevelLs(options.musicLevel)}`;
    //     };
    //     this.body.appendChild(music);
    //     return music;
    // }

    LevelLs(level) {
        if (level == 0) return "...";
        else if (level == 1) return "l..";
        else if (level == 2) return "ll.";
        else if (level == 3) return "lll";
    }

    Expand() {
        this.gameView.body.classList.add("more-menu-expand");

        this.body.style.height = this.gameView.body.clientHeight - 20;
        this.body.style.display = "inline";
        this.body.classList.add("more-menu-expand");
    }

    Collapse() {
        this.gameView.body.classList.remove("more-menu-expand");
        this.gameView.body.classList.add("more-menu-collapse");
        
        this.body.classList.remove("more-menu-expand");
        this.body.classList.add("more-menu-collapse");

        setTimeout(() => {
            this.gameView.body.classList.remove("more-menu-collapse");

            this.body.style.display = "none";
            this.body.classList.remove("more-menu-collapse");
        }, 150);
    }

    Destroy() {
        document.body.removeChild(this.body);
    }
}