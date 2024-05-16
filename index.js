function generatePassword(length, upperCase, lowerCase, numbers, symbols) {
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const allNumbers = "0123456789";
  const allSymbols = "!@#$%^&*()_+";
  let password = "";
  let allowedChars = "";

  length = parseInt(document.getElementById("length").value);
  upperCase = document.getElementById("upperCase").checked;
  lowerCase = document.getElementById("lowerCase").checked;
  numbers = document.getElementById("numbers").checked;
  symbols = document.getElementById("symbols").checked;
  result = document.getElementById("result");
  strength = document.getElementById("strength");

  if (!upperCase && !lowerCase && !numbers && !symbols) {
    result.textContent = "Please select at least one Modifier.";
    return;
  }

  if (length <= 0) {
    result.textContent = "Length of Password Cant't be less than Zero or Zero";
  } else if (length === 1) {
    result.textContent = "Need more than 1 letter for Password";
  } else {
    allowedChars += upperCase ? upperCaseChars : "";
    allowedChars += lowerCase ? lowerCaseChars : "";
    allowedChars += numbers ? allNumbers : "";
    allowedChars += symbols ? allSymbols : "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
    }
    result.textContent = `The Random Generated Password is ${password}`;
    if (length > 5 && upperCase && lowerCase && numbers && symbols) {
      strength.textContent = "The Password looks pretty Strong";
    } else {
      strength.textContent = "the Strength of password can be Increased.";
    }
  }
}
