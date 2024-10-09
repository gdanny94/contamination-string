// return the text once it has been mutated so that all of the characters in the original text have been replaced with the character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

function contamination(text, char){
    return char.repeat(text.length)
  }



// Example usage
console.log(mutateText("hello", "*"));  // Output: "*****"
console.log(mutateText("world", "#"));  // Output: "#####"
console.log(mutateText("", "*"));       // Output: ""
console.log(mutateText("hello", ""));   // Output: ""