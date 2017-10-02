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
      expect(wordCount.stringToArrayOfLowerCaseWords()).toEqual([ "one", "tequila,", "two", "tequila,", "three", "tequila,", "floor" ])
  });
});