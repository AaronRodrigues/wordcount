var WordCount = function(text) {
  this.text = text;
}

WordCount.prototype.stringToArrayOfLowerCaseWords = function (text) {
     return this.text.trim().toLowerCase().split(" ");
};