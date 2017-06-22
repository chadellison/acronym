class Acronym {
  static parse(text) {
    let words = text.split(/[\-,:\s]/);
    let acronym = "";

    words.forEach(function(word) {
      let letters = word.split("");

      letters.forEach(function(letter, index) {
        if(index === 0 || camelCased(word) && letter === letter.toUpperCase()) {
          acronym += letter.toUpperCase();
        }
      });
    });
    return acronym;
  }
}

function camelCased(word) {
  let upperCase = false;
  let lowerCase = false;

  word.substring(1).split("").forEach(function(char) {
    if(char === char.toUpperCase()) {
      upperCase = true;
    }

    if(char === char.toLowerCase()) {
      lowerCase = true;
    }
  })

  return upperCase && lowerCase ? true : false;
}

module.exports = Acronym;
