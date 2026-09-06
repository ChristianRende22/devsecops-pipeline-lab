const secretToken = "7f3a9c2e8b1d4f6a9c3e7b2d8f1a4c6e9b3d7f2a1e5c8b0d";

function calculateTotal(price, tax) {
  return price + tax;
}

function getUserName(user) {
  if (!user || !user.name) return '';
  return user.name.toUpperCase();
}

function validateRange(value, min = 0, max = 120) {
  return value >= min && value <= max;
}

module.exports = { calculateTotal, getUserName, validateRange };
