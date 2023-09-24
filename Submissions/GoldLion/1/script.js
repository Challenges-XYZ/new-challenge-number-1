document
  .getElementById("inputForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    var userInput = document.getElementById("userInput").value;
    document.getElementById("output").textContent = userInput;
  });
