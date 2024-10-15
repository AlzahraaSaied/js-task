function newString() {
    const str = prompt("Please enter a string of 3 or more characters:");

    // handling the string characters (three or more)

    if (str.length < 3) {
      return "String length must be 3 or more.";
    }
    const lastThree = str.slice(-3);

    return lastThree + str + lastThree;
  }

  alert(newString());

  