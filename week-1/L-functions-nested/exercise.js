var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function getPercentage(numberStudents, NumberMentors) {
    let StudentsPlusMentors = numberStudents + NumberMentors;
    let calculatePercentageStudents = Math.round((numberStudents / StudentsPlusMentors) * 100);
    let calculatePercentegeMentors = Math.round((NumberMentors / StudentsPlusMentors) * 100);
    let Message = "Percentaje students: " + calculatePercentageStudents + " Percentage Mentors: " + calculatePercentegeMentors;
    return Message
}
console.log(getPercentage(15, 8));
console.log(getPercentage(60, 50));

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function Upercasename(name) {
    return name.toUpperCase();
}
console.log(Upercasename("Irina"));

function Greeting(name) {
    let nameUper = Upercasename(name);
    let message = "HELLO " + nameUper;
    return message;
}

console.log(Greeting("Irina"));
console.log(Greeting("Daniel"));
console.log(Greeting("Mimi"));
console.log(Greeting("rob"));
console.log(Greeting("Yohannes"))