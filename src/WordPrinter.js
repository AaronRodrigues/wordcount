var WordPrinter = function(wordArray) {
  this.wordArray = wordArray;
}

WordPrinter.prototype.printWords = function(array) {
  words = [];
    for (var i = 0; i < array.length; i++) {
    if (this.isPrime(array[i][1])) {
      words.push('<p> <b>"' + array[i][0]  + '"</b> - <b>' + array[i][1] + "</b> is a Prime Number " + " </p>");
    } else {
      words.push('<p> <b>"' + array[i][0]  + '"</b> - <b>' + array[i][1] + "</p>");
    }
  }
  return words;
}

WordPrinter.prototype.isPrime = function(number){
  var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}