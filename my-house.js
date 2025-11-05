// Shallow copy: copies first level, nested objects still referenced
const acidHouse = { ...mainHouse }; // Using spread operator

// Deep copy: recursively copies everything to avoid shared references
const deepHouse = JSON.parse(JSON.stringify(mainHouse));