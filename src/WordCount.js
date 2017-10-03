(function(exports) {
var WordCount = function(text) {
  this.text = text;
}

WordCount.prototype.stringToArrayOfLowerCaseWords = function (text) {
  return this.text.replace(/\W+/g, ' ').toLowerCase().split(' ');
};

WordCount.prototype.wordFrequency = function (array){
  return array.reduce(function(frequency,word){
    frequency[word] = (+frequency[word]||0)+1; return frequency
  },{});
}

WordCount.prototype.hashToArray = function (hash) {
  var array = [];
    for (var key in hash) {
      if (hash.hasOwnProperty(key)) {
        array.push([key, hash[key]])
      }
    }
  return array;
};

WordCount.prototype.sortArrayDescendingFrequency = function (array) {
 array = array.sort(function(a,b) {
 return a[1] - b[1];
 });
 return array.reverse();
};

WordCount.prototype.executeWordCount = function () {
  var wordArray = this.stringToArrayOfLowerCaseWords();
  var hash = this.wordFrequency(wordArray);
  var wordFrequencyArray = this.hashToArray(hash);
  return this.sortArrayDescendingFrequency(wordFrequencyArray);
};

_isPrime = function(number){
  var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}
exports.WordCount = WordCount;
})(this);