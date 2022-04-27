class CustomAnimation {
    constructor (from, to, seconds) {
        this.value = from;
        this.to = to;

        this.cmp = to >= from ? this.CompareGreater : this.CompareSmaller;

        var frames = seconds * options.fps;
        this.diff = (to - from) / frames;
        this.waitMs = 1000 / options.fps;

        this.actions = new Array();
        this.keyEvents = new Array();
    }

    CompareGreater(x, y, stepSize) {
        return x + stepSize > y;
    }

    CompareSmaller(x, y, stepSize) {
        return x - stepSize < y;
    }

    AddKeyEvent(x, action) {
        this.keyEvents.push([x, action]);
        return this;
    }

    AddAction(action) {
        this.actions.push(action);
        return this;
    }
    
    Start() {
        if (!options.animations) this.WithoutAnimation();
        else this.WithAnimation();
    }

    WithoutAnimation() {
        for (var i = 0; i < this.keyEvents.length; i++) {
            this.keyEvents[i][1]();
        }
        for (var action of this.actions)
            action(this.to);
    }

    WithAnimation() {
        var to = this.to;
        var value = this.value;
        var diff = this.diff;
        var cmp = this.cmp;

        var keyEvents = this.keyEvents;
        var actions = this.actions;
        var stepSize = Math.abs(diff) / 2;

        var animation = setInterval(frame, this.waitMs);
        function frame() {
            if (cmp(value, to, stepSize)) {
                clearInterval(animation);
            }
            for (var i = 0; i < keyEvents.length; i++) {
                var event = keyEvents[i];
                if (Math.abs(event[0] - value) < stepSize) {
                    event[1]();
                    keyEvents.splice(i, 1);
                    i -= 1;
                }
            }
            for (var action of actions)
                action(value);
            value += diff;
        }
    }
}