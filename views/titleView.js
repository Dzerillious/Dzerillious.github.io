class TitleView {
    constructor() {
    }

    InitializeComponents() {
        this.name = "title";
        this.body = this.CreateBody();
        this.title = this.CreateTitle();
        this.top100 = this.CreateTop100();
        this.newGame = this.CreateNewGameButton();
    }

    CreateBody() {
        const body = Create("div", this.name, "body");
        document.body.appendChild(body);
        return body;
    }

    CreateTitle() {
        const title = Create("p", this.name, "title", CANT_SELECT_TEXT);
        title.innerText = "Awesome pexeso";
        this.body.appendChild(title);
        return title;
    }

    CreateTop100() {
        const top100 = Create("div", this.name, "top100");
        this.body.appendChild(top100);
        
        const top100Title = Create("p", this.name, "top100-title", CANT_SELECT_TEXT);
        top100Title.innerText = "Best players"
        top100.appendChild(top100Title);

        const top100Content = Create("p", this.name, "top100-content", CANT_SELECT_TEXT);
        top100Content.innerText = "";
        
        options.bestPlayers.sort(function (a, b) {
            if (a.score > b.score) {
                return -1;
            }
            if (b.score > a.score) {
                return 1;
            }
            return 0;
        });

        for (var i in options.bestPlayers) {
            var more = parseInt(i, 10) + 1;
            top100Content.innerHTML += more + " " + options.bestPlayers[i].name + " " + options.bestPlayers[i].score + "<br>";
        }
        top100.appendChild(top100Content);
        return top100;
    }

    CreateNewGameButton() {
        const newGame = Create("div", this.name, "new-game", LONG_BUTTON, CANT_SELECT_TEXT);
        newGame.style.margin = "45px auto 0 auto";
        newGame.innerText = "Play";
        newGame.onclick = () => {
            PlayClick();
            viewHolder.CreateNewGameView();
        }
        this.body.appendChild(newGame);
        return newGame;
    }

    Destroy() {
        document.body.removeChild(this.body);
    }
}