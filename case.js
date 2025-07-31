const school = "Rajuk Uttara Model School";
console.log(school);
console.log(school.toLowerCase());

console.log(school.toUpperCase());

const subject = "ChemIstry";
const book = "ChemistRy";

if (subject.toLowerCase() === book.toLowerCase()) {
  console.log("i am reading book");
} else {
  console.log("faill korbo");
}

const drink = "water ";
const liquid = "  water";
if (drink.trim() === liquid.trim()) {
  console.log("Pani khabo");
} else {
  console.log("Pani khabo nah");
}
