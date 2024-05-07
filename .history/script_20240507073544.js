To create a console app that records the events of a werewolf, you can follow these steps in JavaScript:

1. Create a new JavaScript file, for example, werewolfLog.js.

2. Define a class for the werewolf with properties for the werewolf's name, current form (human or wolf), and a log of events.

javascript
class Werewolf {
  constructor(name) {
    this.name = name;
    this.form = 'human';
    this.log = [];
  }

  transform() {
    if (this.form === 'human') {
      this.form = 'wolf';
      this.log.push('Transformed into a werewolf');
    } else {
      this.form = 'human';
      this.log.push('Transformed back into a human');
    }
  }

  logEvent(event) {
    this.log.push(event);
  }

  getLog() {
    return this.log;
  }
}


3. Create a new instance of the Werewolf class and log events as the werewolf goes through different activities.

javascript
const werewolf = new Werewolf('Luna');

werewolf.transform();
werewolf.logEvent('Hunted in the forest');
werewolf.transform();
werewolf.logEvent('Attacked a village');
werewolf.transform();

console.log(werewolf.getLog());


4. Run the JavaScript file in a Node.js environment to see the log of events recorded by the werewolf.

This code will create a log of events for the werewolf, including when it transforms between human and wolf forms and other activities it engages in. You can analyze this log to determine the triggers that cause the werewolf to transform.