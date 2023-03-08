var time = new Date().getHours();
// console.log(time);
var greeting = "Greetings";
var name = "Maureen";

if (time < 12) {
  greeting = "Good morning";
} else if (time <= 18) {
  greeting = "Good afternoon";
} else if (time <= 22) {
  greeting = "Go to bed";
} else {
  greeting = "Why are you still awake? Hit the hay";
}
// alert(=
alert(`${greeting} ${name}!`);
