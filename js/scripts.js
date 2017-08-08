var sentence = prompt("Write a sentence: ");

alert(sentence);

var capitalizeFirstLast = function(sentence){
  var firstLetterChange = 
  sentence[0] = sentence.toUpperCase().charAt(0);
  sentence[-1] = sentence.toUpperCase().charAt(-1);
  return sentence;
}

alert(capitalizeFirstLast(sentence));
