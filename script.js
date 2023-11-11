// Get elements by their IDs
const nameInput = document.getElementById('yname');
const popupButton = document.getElementById('popupButton');
const popupMessage = document.getElementById('popupMessage');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// Add an event listener to the submit button
popupButton.addEventListener('click', function () {
    // Get the input value
    const name = nameInput.value;

    // Check if the name is not empty
    if (name.trim() !== '') {
        // Create the concatenated message
        const thankYouMessage = `Thank You, ${name}!`;

        // Set the message in the popup
        popupMessage.textContent = thankYouMessage;

        // Show the popup
        popup.style.display = 'block';
    }
});

// Add an event listener to close the popup
closePopup.addEventListener('click', function () {
    // Hide the popup
    popup.style.display = 'none';
});
