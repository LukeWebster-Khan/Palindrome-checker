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
