document.getElementById('submitButton').addEventListener('click', function() {
    // DOM manipulation 1: Retrieving values from inputs
    const textInput = document.getElementById('textInput').value;
    const emailInput = document.getElementById('emailInput').value;
    const numberInput = document.getElementById('numberInput').value;
  
    // Creating a string with the form data
    const resultContent = `Text: ${textInput}<br>Email: ${emailInput}<br>Number: ${numberInput}`;
  
    // DOM manipulation 2: Displaying the result in the result div
    document.getElementById('resultContent').innerHTML = resultContent;
    document.getElementById('result').classList.remove('d-none');
  });