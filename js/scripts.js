var sentence = prompt("Write a sentence: ");

alert(sentence);

var capitalizeFirstLast = function(sentence){
  var removeLetter = sentence.substring(1, sentence.length-1)
  var newSentence = sentence[0].toUpperCase() + removeLetter + sentence[sentence.length-1].toUpperCase();
  return newSentence;
}

alert(capitalizeFirstLast(sentence));

var reverseLetters = function(sentence){
  var removeLetters = sentence.substring(1, sentence.length-1)
  var newSentence = sentence[sentence.length-1] + removeLetters + sentence[0];
  return newSentence;
}

alert(reverseLetters(sentence));
