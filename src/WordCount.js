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