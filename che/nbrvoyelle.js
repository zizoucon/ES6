// java script


function getVowels(str) {
    var vowelsCount = 0;
    //turn the input into a string
    var string = str.toString();
  
    //loop through the string
    for (var i = 0; i <= string.length - 1; i++) {
  
    //if a vowel, add to vowel count
      if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
        vowelsCount += 1;
      }
    }
    return vowelsCount;
  }

function getVowels(str) {
    var m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
  }
//   ES6
let st="saha ramdankom go my code"
  const count = str => (str.match(/[aeiou]/gi) || []).length;

  console.log(count (st))