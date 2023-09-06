// Get the custom menu and Twitter share button
const customMenu = document.getElementById('custom-menu');
const twitterShareButton = document.getElementById('twitter-share-button');

// Function to show the custom menu at the selected position
function showCustomMenu(x, y) {
    customMenu.style.display = 'block';
    customMenu.style.left = x + 'px';
    customMenu.style.top = y + 'px';
}

// Function to hide the custom menu
function hideCustomMenu() {
    customMenu.style.display = 'none';
}

// Event listener for mouseup event (text selection)
document.addEventListener('mouseup', (event) => {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText !== '') {
        // Set the text on the Twitter share button dynamically
        twitterShareButton.innerText = `Share "${selectedText}" on Twitter`;

        // Show the custom menu
        showCustomMenu(event.pageX, event.pageY);

        // Handle Twitter sharing button click
        twitterShareButton.addEventListener('click', () => {
            const twitterIntentURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedText)}`;
            window.open(twitterIntentURL);
            hideCustomMenu();
        });
    } else {
        // If no text is selected, hide the custom menu
        hideCustomMenu();
    }
});

// Close the custom menu if the user clicks anywhere else on the page
document.addEventListener('mousedown', (event) => {
    if (!customMenu.contains(event.target)) {
        hideCustomMenu();
    }
});
