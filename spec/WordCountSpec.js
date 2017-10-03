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
    expect(wordCount.wordFrequency(wordArray)).toEqual({"tequila": 3, "one": 1, "two": 1, "three": 1, "floor": 1});
    });
  
  it('converts the wordFrequency hash to an array', function() {
    var wordArray = wordCount.stringToArrayOfLowerCaseWords();
    var hash = wordCount.wordFrequency(wordArray);
    expect(wordCount.hashToArray(hash)).toEqual([ [ 'one', 1 ], [ 'tequila', 3], [ 'two', 1 ], ['three', 1], ['floor', 1] ]);
  });
  
  it('sorts array in descending order', function(){
    var wordArray = wordCount.stringToArrayOfLowerCaseWords();
    var hash = wordCount.wordFrequency(wordArray);
    var wordFrequencyArray = wordCount.hashToArray(hash);
    expect(wordCount.sortArrayDescendingFrequency(wordFrequencyArray)).toEqual([ [ 'tequila', 3 ], [ 'floor', 1], [ 'three', 1 ], ['two', 1], ['one', 1] ]);
  });
  
  it('returns true if a passed number is prime', function(){
    expect(_isPrime(1)).toBeFalsy();
    expect(_isPrime(2)).toBeTruthy();
    expect(_isPrime(3)).toBeTruthy();
    expect(_isPrime(11)).toBeTruthy();
  });
});