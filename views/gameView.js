class GameView {
    constructor(gameViewModel) {
        this.name = "game";
        this.viewModel = gameViewModel;
        this.board = new BoardView(this);
        this.header = new GameHeaderView(this, gameViewModel);
        this.moreMenu = new MoreMenuView(this, gameViewModel);
    }

    InitializeComponents() {
        this.body = this.CreateBody();

        this.header.InitializeComponents();
        this.moreMenu.InitializeComponent();
        this.board.InitializeComponents();
        this.SetScaling();

        this.Print();
    }

    CreateBody() {
        const body = Create("div", this.name, "body");
        document.body.appendChild(body);
        return body;
    }

    SetScaling() {
        var boardWidth = this.board.body.clientWidth;
        if (boardWidth > screen.width) {
            this.body.style.transform = `scale(${screen.width / boardWidth})`;
        }
    }

    Print() {
        this.body.classList.add("game-print");
        setTimeout(() => {
            this.viewModel.StartCountDown();
            this.body.classList.remove("game-print");
        }, 700);
    }

    Destroy() {
        document.body.removeChild(this.body);
        this.moreMenu.Destroy();
    }
}