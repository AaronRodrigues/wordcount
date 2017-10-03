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
        var wordBody = document.getElementById('wordBody');
        console.log(wordArray);
        printWords(wordBody, wordArray);
      };
    }else {
				fileDisplayArea.innerText = "File not supported!"
		}
  });
  
  printWords = function(div, array) {
    array = [];
    for (var i = 0; i < array.length; i++) {
      htmlArray.push("<p> <b>" + array[i][0]  + "</b> - " + array[i][1]  + "</p>");
    }
    div.innerHTML = array.join('');
  }
}
