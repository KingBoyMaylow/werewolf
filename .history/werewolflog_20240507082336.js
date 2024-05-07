javascript
class WerewolfLog {
    constructor() {
        this.log = [];
    }

    addEvent(event) {
        this.log.push(event);
    }

    getLog() {
        return this.log;
    }
}

const werewolfLog = new WerewolfLog();

werewolfLog.addEvent("Full moon night");
werewolfLog.addEvent("Hearing a wolf howl");
werewolfLog.addEvent("Being in a forest");

console.log(werewolfLog.getLog());
