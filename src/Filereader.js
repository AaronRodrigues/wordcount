window.onload = function() {

  var fileInput = document.getElementById('fileInput');
  var wordBody = document.getElementById('wordBody')
  fileInput.addEventListener('change', function () {
    var file = fileInput.files[0];

    if (file.type.match(/text.*/)) {
      var fileReader = new FileReader();
      fileReader.readAsText(file);
      
      fileReader.onload = function() {
        var wordCount = new WordCount(fileReader.result); 
        var wordArray = wordCount.executeWordCount();
        var wordPrinter = new WordPrinter(wordArray);
        wordBody.innerHTML = wordPrinter.printWords(wordArray).join(' ');
      };
    }else {
				fileDisplayArea.innerText = "File not supported!"
		}
  });
}
