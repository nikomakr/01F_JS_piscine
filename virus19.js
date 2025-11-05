// Freeze virus19 so it cannot be changed
Object.freeze(virus19);

// Deep copy antivirus to create vaccine
const vaccine = JSON.parse(JSON.stringify(antivirus));

// Freeze vaccine to make it immutable too
Object.freeze(vaccine);
