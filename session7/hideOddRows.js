  function hideOddRows() {
    var elements = document.getElementsByTagName('tr');
    var index = 1;
    Array.prototype.forEach.call(elements, function(element){
    	if ((index % 2) != 0) {
	        element.style.display = "none";
    	}
    	index = index + 1;
    });
  }
  document.getElementById('hideOddRowsButton').onclick = hideOddRows;
