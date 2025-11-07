function shaker(quantity, fruit, diet) {
  let description = quantity + " ";

  if (diet) {
    description += "skinny ";
  }

  description += fruit + " ";

  if (quantity > 1) {
    description += "milkshakes";
  } else {
    description += "milkshake";
  }

  return description;
}

// console.log(shaker(1, "strawberry", true));
// Output: "1 skinny strawberry milkshake"

// console.log(shaker(2, "chocolate", false));
// Output: "2 chocolate milkshakes"

// console.log(shaker(2, "strawberry", true));
// Output: "2 skinny strawberry milkshakes"

// console.log(shaker(1, "chocolate", false));
// Output: "1 chocolate milkshake"

