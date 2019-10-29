$(document).ready(function() {
console.log("hello");
});

$("form#sentenceForm").submit(function(event) {
  var sentenceVariable = $("input#sentenceInput").val();
  var words = sentenceVariable.split('');
  var three = [];

  words.forEach(function(word) {
    if(word.length >= 3) {
      three.push(word);
    }
  });
  // three.reverse();

  var result = three.join('');

  $("#results").append(result);
  $("#results").show();

  event.preventDefault();
  });
