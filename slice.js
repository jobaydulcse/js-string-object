const message = "openTheDoor";
const part = message.slice(7, 11);
console.log(part);

const sentance =
  "Jobaydul Hasan, a passionate and dedicated 4th-year Computer Science and Engineering student with the dream of becoming a skilled software engineer, constantly strives to improve his knowledge and creativity through coding, designing, and learning, while also balancing personal values, strong family bonds, and an unyielding commitment to his goals";
// console.log(sentance.split(""));
// console.log(sentance.split(" "));
// console.log(sentance.split("a"));

const friendsStr = "Rahim,Kahim,Dahim,Lahim,Fahim,Sahim";
const friends = friendsStr.split(",");
console.log(friends);
const realFriends = ["Rahim", "Kahim", "Dahim", "Lahim", "Fahim", "Hahim"];
console.log(realFriends.join());
console.log(realFriends.join("|"));
console.log(realFriends.join("-"));
