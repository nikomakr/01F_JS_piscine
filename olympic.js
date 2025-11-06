let position = athletes.indexOf("Pedro") + 1; // it returns the position index of the athlete, as it starts from 0 then we need to +1

if (position === 1) {
  console.log("🥇");
} else if (position === 2) {
  console.log("🥈");
} else if (position === 3) {
  console.log("🥉");
} else {
  console.log("😞 Pedro is #" + position);
}
