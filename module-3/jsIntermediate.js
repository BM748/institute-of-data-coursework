//Question 1: Create a function that takes a string as a parameter and returns the string with the first character of each word changed into a capital letter, as in the example below. Test it with different strings.//
function capwords(string) {
    let words = string.split(" ")
    let capwords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    return capwords.join(" ");
}

console.log(capwords("here i go!"))
console.log(capwords("the cat in the hat left the house in a mess."))
console.log(capwords("a man who never eats a pork buns is never a whole man!"))

//Question 2: Create a function truncate(str, max) that truncates a given string of text if its total length is greater than the max length. It should return either the truncated text, with an ellipsis (...) added to the end if it was too long, or the original text otherwise.b) Write another variant of the truncate function that uses a conditional operator.//

function truncate(str,max) {
    if (str.length <+max) {
        return str;
    } else {
        return str.substring(0,max) + '....';
    }
}

console.log(truncate('Never gonna give you up',19));
console.log(truncate('Jack did not hit the ball',20));
console.log(truncate('Short text',10))

function truncate(str, max) {
    return str.length <= max ? str : str.substring(0, max) + '...';
  }
  
  console.log(truncate('Never gonna give you up',19));
console.log(truncate('Jack did not hit the ball',20));
console.log(truncate('Short text',10))