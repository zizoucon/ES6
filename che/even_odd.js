function isEven(n) {
    return n == parseFloat(n) && !(n % 2);
  }
  function evenOrOdd(num) { //for string length take string
    if (num % 2 == 0) {//and replace numm with string.length here
      return "even";
    } else {
      return "odd";
    }
  }