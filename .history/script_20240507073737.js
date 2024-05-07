
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
