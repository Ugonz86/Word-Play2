$(document).ready(function() {

$("#sentenceForm").submit(function(event) {
  event.preventDefault();
  var sentenceVariable = $("#sentenceInput").val();
  var three = [];
  var words = sentenceVariable.split(" ");
  words.forEach(function(word) {
    if(word.split("").length >= 3) {
      three.push(word);
    }
  });

  three.reverse();

  var result = three.join(' ');

  
  $("#results").append(result);
  $("#results").show();

  });
});
