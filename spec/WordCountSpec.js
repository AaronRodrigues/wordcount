'use strict';

describe('WordCount', function(){
  var wordCount;
  
  beforeEach(function(){
    wordCount = new WordCount("One Tequila, Two Tequila, Three Tequila, Floor");
  });
  
  it('stores a string in a variable', function(){
      expect(wordCount.text).toEqual("One Tequila, Two Tequila, Three Tequila, Floor")
  });
  
  it('splits a body of text into an array of words in lowercase ', function(){
    var test = new WordCount("One Tequila, Two Tequila, Three Tequila, Floor")
      expect(wordCount.stringToArrayOfLowerCaseWords()).toEqual([ "one", "tequila", "two", "tequila", "three", "tequila", "floor" ])
  });
  
  it('counts the frequency of words in an array', function() {
      var wordArray = wordCount.stringToArrayOfLowerCaseWords();
      console.log(wordArray);
      expect(wordCount.wordFrequency(wordArray)).toEqual({"tequila": 3, "one": 1, "two": 1, "three": 1, "floor": 1});
    });
});