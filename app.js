// 1. Sentence case
const sentenceCase = (word) => {
  text = word
    .split(". ")
    .map((e) => e.charAt(0).toUpperCase() + e.substring(1).toLowerCase())
    .join(". ");
  return text;
};

// 2. lowercase
const lowerCase = (word) => word.toLowerCase();

// 3. UPPERCASE
const upperCase = (word) => word.toUpperCase();

// 4. Capitalize Each Word
const capitalizeCase = (word) => {
  text = word
    .toLowerCase()
    .split(" ")
    .map((e) => e.charAt(0).toUpperCase() + e.substring(1))
    .join(" ");
  return text;
};

// 5. tOOGLE cASE
const toogleCase = (word) => {
  text = word
    .toUpperCase()
    .split(" ")
    .map((e) => e.charAt(0).toLowerCase() + e.substring(1))
    .join(" ");
  return text;
};

module.exports.sentenceCase = sentenceCase;
module.exports.lowerCase = lowerCase;
module.exports.upperCase = upperCase;
module.exports.capitalizeCase = capitalizeCase;
module.exports.toogleCase = toogleCase;
