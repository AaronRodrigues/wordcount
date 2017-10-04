describe('WordPrinter', function() {

  var wordPrinter;

  beforeEach(function() {
    wordPrinter = new WordPrinter();
  });

  describe('Number', function() {
    it('returns true if prime', function(){
         expect(wordPrinter.isPrime(1)).toBeFalsy();
         expect(wordPrinter.isPrime(2)).toBeTruthy();
         expect(wordPrinter.isPrime(3)).toBeTruthy();
         expect(wordPrinter.isPrime(11)).toBeTruthy();
    });
  });
    
  describe('Word', function() {
    it('is displayed with a message if its frequency is a Prime Number ', function() {
      var array = [["tequila", 3]];
      expect(wordPrinter.printWords(array)).toEqual(['<p> <b>"tequila"</b> - <b>3</b> is a Prime Number  </p>']);
    });
    
    it('is displayed only with its frequency if not a Prime Number', function() {
      var array = [["four", 4]];
      expect(wordPrinter.printWords(array)).toEqual(['<p> <b>"four"</b> - <b>4</p>']);
    });
  });
});
