window.onload = function() {

  var fileInput = document.getElementById('fileInput');

  fileInput.addEventListener('change', function () {
    var file = fileInput.files[0];

    if (file.type.match(/text.*/)) {
      var fileReader = new FileReader();
      fileReader.readAsText(file);
      
      fileReader.onload = function() {
        var wordCount = new WordCount(fileReader.result); 
        var wordArray = wordCount.executeWordCount();
        console.log(wordArray);
      };
    }else {
				fileDisplayArea.innerText = "File not supported!"
		}
  });
}
