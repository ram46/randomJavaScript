/*
Rot1, Rot2, Rot3 ... Rot25 encoding implementation
The encodeToRotX() function takes two arguments - string and number of places to rotate.
Example,
encodeToRotX('// Does this test work ? yep looks like it!', 13);
*/

function encodeToRotX(inputStr, rotNum) {
  var inputList = inputStr.split('');
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var outputList = [];
  for (var i = 0; i < inputList.length; i++) {
    var inputChar = inputList[i];
    if (IsCharNotAlphabet(inputChar, alphabet)) {
      outputList = processNonAlphabets(outputList,inputChar);
      continue;
    } else {
      if (IsCharLowerCase(alphabet,inputChar)){
        outputList = processAlphabets(outputList,alphabet,inputChar, rotNum); 
      } else {
      outputList = processAlphabets(outputList,alphabet.toUpperCase(),inputChar, rotNum); 
      }
    }
  }
  return outputList.join('');
}

function IsCharNotAlphabet(inputChar, alphabet) {
  return ((alphabet.indexOf(inputChar) === -1) && (alphabet.toUpperCase().indexOf(inputChar) === -1 ));
}

function IsCharLowerCase(alphabet,inputChar) {
  return alphabet.indexOf(inputChar) !== -1;
  
}

function processNonAlphabets(outputList,inputChar) {
  outputList = outputList.concat(inputChar);
  return outputList;
}

function processAlphabets(outputList, alphabet, inputChar, rotNum) {
  var alphabetList = alphabet.split('');
  var origIndex = alphabet.indexOf(inputChar);
  var newIndex = origIndex + rotNum;
  if (newIndex > 25) {
    var startFromBeginningIndex = newIndex - 26;
    outputList = outputList.concat(alphabetList[startFromBeginningIndex]);
  } else {
    outputList = outputList.concat(alphabetList[newIndex]);
  }
  return outputList;
}

var output = encodeToRotX('// Does this test work ? yep looks like it!', 13);
console.log(output);
