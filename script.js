//Math.floor(Math.random() * (max - min + 1) + min)
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1) + 97));
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1) + 65));
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * (57 - 48 + 1) + 48));
}
function getRandomSymbol() {
  return String.fromCharCode(Math.floor(Math.random() * (47 - 33 + 1) + 33));
}

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
