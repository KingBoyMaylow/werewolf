Sure, here is an example of a console app in JavaScript that records the events of a werewolf:

javascript
let werewolfLog = [];

function transformIntoWerewolf(event) {
  werewolfLog.push(`Transformed into werewolf during ${event}`);
}

function transformBackIntoHuman(event) {
  werewolfLog.push(`Transformed back into human during ${event}`);
}

function printLog() {
  console.log("Werewolf Log:");
  werewolfLog.forEach((event, index) => {
    console.log(`${index + 1}. ${event}`);
  });
}

transformIntoWerewolf("full moon");
transformBackIntoHuman("sunrise");
transformIntoWerewolf("being attacked");
transformBackIntoHuman("dawn");

printLog();


In this code, we have functions to record when the werewolf transforms into a werewolf and back into a human, as well as a function to print out the log of events. You can add more events and customize the log as needed.