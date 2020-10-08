const time = new Date().getHours();
const headStyle = {
  color: "red"
};
//console.log(time);
let greeting = "Morning";
if (time > 12 && time <= 18) {
  greeting = "Afternoon";
  headStyle.color = "green";
} else if (time > 18) {
  greeting = "Evening";
  headStyle.color = "blue";
}

export {
  greeting,
  headStyle
};