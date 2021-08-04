let checkButton = document.getElementById("input");

function palindrome(str) {
  let polishedString = str.replace(/\W+|_/g, "").toLowerCase();
  let reversedString = polishedString
    .split("")
    .reverse()
    .join("")
    .toLowerCase();

  if (polishedString != reversedString) return false;
  else {
    return true;
  }
}

palindrome("is this a palindrome");

function modifyText() {
  const notif = document.getElementById("notif");
  if (notif.firstChild.nodeValue == true) {
    notif.firstChild.nodeValue = "Not a Palindrome";
  }
}

addEventListener("click", modifyText);
/*function palindrome(str) {
    let polishedString = str.replace(/\W+|_/g, "").toLowerCase();
    let reversedString = polishedString.split("").reverse().join("").toLowerCase();
    console.log(polishedString, reversedString)
    if (polishedString != reversedString)
    return false;
    else {return true}
  } 
  
  palindrome("A man, a plan, a canal. Panama");*/
