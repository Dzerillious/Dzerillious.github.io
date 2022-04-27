class DummyView {
    Destroy() {
    }
}

class ViewHolder {
    constructor() {
        this.currentView = new DummyView();
        this.CreateTitleView();
    }

    CreateTitleView() {
        this.currentView.Destroy();
        this.currentView = new TitleView();
        this.currentView.InitializeComponents();
    }

    CreateNewGameView() {
        this.currentView.Destroy();
        this.currentView = new NewGameView();
        this.currentView.InitializeComponents();
    }

    CreateGameView() {
        this.currentView.Destroy();
        game = new GameViewModel();
        this.currentView = new GameView(game);
        this.currentView.InitializeComponents();
    }

    CreateScoreView(score) {
        this.currentView.Destroy();
        this.currentView = new ScoreView(score);
        this.currentView.InitializeComponents();
    }
}