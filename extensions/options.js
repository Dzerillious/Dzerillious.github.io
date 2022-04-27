function getCookie(name, defaultValue) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    else return defaultValue;
}

class Options {
    constructor() {
        this.setOfCards = getCookie("setOfCards", "disney");
        this.differentMatch = getCookie("differentMatch", "false");
        this.soundLevel = getCookie("sound", 2);
        this.musicLevel = getCookie("music", 2);
        this.animations = getCookie("animations", 2);
        this.SetDifficulty(getCookie("difficulty", 0));  
        this.bestPlayers = JSON.parse(getCookie("bestPlayers", "[]"));
        this.bestPlayers.sort(function (a, b) {
            if (a.score > b.score) {
                return -1;
            }
            if (b.score > a.score) {
                return 1;
            }
            return 0;
        });
        console.log(document.cookie);
        console.log(this.bestPlayers);
    }

    SetDifficulty(value) {
        this.difficulty = value;
        document.cookie = "difficulty=" + value;
        if (value == 0) {
            this.hideTimeout = 800;
            this.cardCount = 16;
            this.columns = 4;
        }
        else if (value == 1) {
            this.hideTimeout = 700;
            this.cardCount = 24;
            this.columns = 6;
        }
        else {
            this.hideTimeout = 600;
            this.cardCount = 32;
            this.columns = 8;
        }
    }

    SetCards(setOfCards) {
        this.setOfCards = setOfCards;
        document.cookie = "setOfCards=" + this.setOfCards;
    }

    SetDifferentMatch(differentMatch) {
        this.differentMatch = differentMatch;
        document.cookie = "differentMatch=" + this.differentMatch;
    }

    SetAnimations(animations) {
        this.animations = animations;
        document.cookie = "animations=" + this.animation;
    }

    ChangeSoundLevel() {
        this.soundLevel = (this.soundLevel + 1) % 4;
        document.cookie = "sound=" + this.soundLevel;
    }

    ChangeMusicLevel() {
        this.musicLevel = (this.musicLevel + 1) % 4;
        document.cookie = "music=" + this.music;
    }
}

function PlayClick() {
    var sound = document.getElementById("clickSound");
    if (options.soundLevel == 0) sound.volume = 0;
    else if (options.soundLevel == 1) sound.volume = 0.33;
    else if (options.soundLevel == 2) sound.volume = 0.66;
    else if (options.soundLevel == 3) sound.volume = 1;
    sound.play();
}