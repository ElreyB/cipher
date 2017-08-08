var sentence = prompt("Write a sentence: ");

alert(sentence);

var capitalizeFirstLast = function(sentence){
  var removeFirstLetter = sentence.substring(1, sentence.length-1)
  var newSentence = sentence[0].toUpperCase() + removeFirstLetter + sentence[sentence.length-1].toUpperCase();
  return newSentence;
}

alert(capitalizeFirstLast(sentence));
