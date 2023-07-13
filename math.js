function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

const OPERATIONS = {
  sum: "+",
  substract: "-",
};

function calculate({ a, b, operation }) {
  let result = null;
  if (operation === "+") {
    return a + b;
  } else {
    return a - b;
  }
}
