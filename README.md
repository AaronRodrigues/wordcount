# Wordcount

Given a book in a text file (http://www.loyalbooks.com/download/text/Railway-Children-by-E-Nesbit.txt for example)

1. Write an application that outputs the individual words that appear in the book, and how many times that word appears in the text file.
2. The second part is to also output whether the number of times each word appears is a prime number.
 
The following assumptions can be made:
Ignore punctuation and capitalisation
TDD is expected

### Technologies used
- JavaScript
- Test framework: Jasmine
- Version Control System: GIT

### Installation Running Instructions

1. Clone this repository by typing the following in the command line.
   ```
   git clone git@github.com:AaronRodrigues/wordcount.git
   ```
2. Navigate to the directory. 

### Working Instructions

1. Open index.html in the views folder in a web browser.
2. In the browser, select the text file from the sample-text folder.
3. You can choose any other text file stored on your computer as well.
4. A list of words and their frquency in the text will be displayed.
5. If the word frequency is a Prime Number, it is indicated as shown in the screenshot.

![WordCount](./img/wordcount.png)

### Running Tests

1. Tests can be run by opening SpecRunner.html in a web browser.

![WordCountTest](./img/testwordcount.png)

### Approach

1. WordCount object takes string of text as an argument and stores it
2. Converts body into a an array of lowercase words
3. WordCount removes duplicate words from array and saves this array as a reference array
4. Uses this reference array and counts the words in the text
5. Arrange the words : count in decreasing order
6. Check which numbers are prime numbers and return the word and number

### Problems Faced

1. I found reading files not as straightforward as languages like Ruby. From what I have found, JavaScript only allows the user to select a file from a personal computer and does not give access to the file system for security reasons. In a language like Ruby, this would be a trivial thing to do. I was not sure about testing this code.

### Further Improvements

1. Add more styling to index.html
2. Add code coverage and continous integration using Travis-CI

