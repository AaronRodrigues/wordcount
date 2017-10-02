'use strict';

describe('WordCount', function(){
  var wordCount;
  
  beforeEach(function(){
    wordCount = new WordCount();
  });
  
  it('stores a string in a variable', function(){
    var test = new WordCount("One Tequila, Two Tequila, Three Tequila, Floor")
    expect(test.text).toEqual("One Tequila, Two Tequila, Three Tequila, Floor")
  });
});