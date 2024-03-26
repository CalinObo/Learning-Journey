const userInput = document.getElementById("text-input");
const userButton = document.getElementById("check-btn");
const userResult = document.getElementById("result");

const checkPalindrome = (input) => {
    userResult.replaceChildren()
  console.log(input.length);
  if (input.length == 0) {
    alert("ceva");
  }
  let lowerCase = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
  let lowerCaseReversed = [...lowerCase].reverse().join("");
  if (lowerCase == lowerCaseReversed) {
    const userResultChildrenText = document.createTextNode(
      `${input} is palindrome`
    );

    userResult.appendChild(userResultChildrenText);
  } else {
    const userResultChildrenText = document.createTextNode(
      `${input} is not a palindrome`
    );

    userResult.appendChild(userResultChildrenText);
  }
  console.log(lowerCaseReversed);
  console.log(lowerCase);
};

userButton.addEventListener("click", () => {
  checkPalindrome(userInput.value);
  userInput.value = "";
});

userInput.addEventListener("keyup", (e) => {
  console.log(e.key);
  if (e.key === "Enter") {
    checkPalindrome(userInput.value);
    userInput.value = "";
  }
});
