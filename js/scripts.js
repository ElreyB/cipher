var sentence = prompt("Write a sentence: ");

alert(sentence);

var capitalizeFirstLast = function(sentence){
  var newString = sentence[0].toUpperCase() + sentence[sentence.length-1].toUpperCase();
  return newString;
}

alert(capitalizeFirstLast(sentence));

var reverseLetters = function(sentence){
  var newString = sentence[sentence.length-1] + sentence[0];
  return newString;
}

alert(reverseLetters(sentence));
