// Griswold the Blacksmith's Shop

// Create an empty array to store items the player can afford
let purchasableGoods = [];

// Check if player can afford arrows (3 coins)
if (playerCoins >= 3) {
  purchasableGoods.push("arrows");
}

// Check if player can afford boots (44 coins)
if (playerCoins >= 44) {
  purchasableGoods.push("boots");
}

// Check if player can afford sword (299.99 coins)
if (playerCoins >= 299.99) {
  purchasableGoods.push("sword");
}

// Display the results (only if running outside of tests)
if (typeof console !== "undefined") {
  console.log("Welcome to Griswold's Blacksmith Shop!");
  console.log("You have " + playerCoins + " coins.");
  console.log("You can purchase: " + purchasableGoods.join(", "));
}
