document.getElementById('button').addEventListener('click', function() {
    // Get the value from the first input box
    var inputValue = document.getElementById('Dollars').value;
    
    // Set the value to the second input box
    document.getElementById('Egyptian-pounds').value = inputValue*48;
});
