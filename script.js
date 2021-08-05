var checkButton = document.getElementById("checkPalindrome");

function palindrome(str) {
  let polishedString = str.replace(/\W+|_/g, "").toLowerCase();
  let reversedString = polishedString.split("").reverse().join("");

  if (polishedString != reversedString) return false;
  else {
    return true;
  }
}
checkButton.addEventListener("click", function () {
  "use strict";

  var value = document.getElementById("inputPalindrome").value;
  var notification = document.getElementById("notification");

  if (palindrome(value)) {
    notification.innerHTML = "That is INDEED a Palindrome young man";
    notification.className = "alert alert-success";
  } else {
    notification.innerHTML = "That is NOT a Palindrome";
    notification.className = "alert alert-failure";
  }
});

/*function palindrome(str) {
    let polishedString = str.replace(/\W+|_/g, "").toLowerCase();
    let reversedString = polishedString.split("").reverse().join("").toLowerCase();
    console.log(polishedString, reversedString)
    if (polishedString != reversedString)
    return false;
    else {return true}
  } 
  
  palindrome("A man, a plan, a canal. Panama");*/
