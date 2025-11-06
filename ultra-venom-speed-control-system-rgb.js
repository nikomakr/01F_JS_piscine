const fanSpeed =
  temperature > 90
    ? 3200
    : temperature > 70
    ? 1600
    : temperature > 40
    ? 800
    : 0;

// alternatively: 
// let fanSpeed;

// if (temperature > 90) {
//   fanSpeed = 3200;
// } else if (temperature > 70) {
//   fanSpeed = 1600;
// } else if (temperature > 40) {
//   fanSpeed = 800;
// } else {
//   fanSpeed = 0;
// }

// console.log(fanSpeed);
