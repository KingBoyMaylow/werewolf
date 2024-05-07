avascript
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

