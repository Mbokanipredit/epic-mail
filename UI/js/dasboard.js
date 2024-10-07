
    // handle the "login and signin" functionality


    // Function to toggle card selection based on click
    function toggleCard(cardElement) {
        const checkbox = cardElement.querySelector('.select-card');
        checkbox.checked = !checkbox.checked; 
        updateCardSelection(cardElement, checkbox.checked);
    }

    // Function to update card appearance based on selection state
    function updateCardSelection(cardElement, isSelected) {
        if (isSelected) {
            cardElement.classList.add('selected');
        } else {
            cardElement.classList.remove('selected');
        }
    }

    // Function to handle "Select All" functionality
    function selectAllCards(selectAll) {
        const cardCheckboxes = document.querySelectorAll('.select-card');

        // Select or deselect all checkboxes 
        cardCheckboxes.forEach(checkbox => {
            checkbox.checked = selectAll;
            updateCardSelection(checkbox.closest('.card'), selectAll); 
        });
        document.getElementById('select-all-checkbox').checked = selectAll; 
    }

    // Function to show/hide overlay menu
    function toggleOverlayMenu() {
        const overlayMenu = document.getElementById('overlay-menu');
        if (overlayMenu.style.display === 'block') {
            overlayMenu.style.display = 'none';
        } else {
            overlayMenu.style.display = 'block';
        }
    }

    
    // Add click event listener to select all checkbox
    document.getElementById('select-all-checkbox').addEventListener('click', function() {
        selectAllCards(this.checked);
    });

    // Add click event listener to more button
    document.getElementById('more-button').addEventListener('click', toggleOverlayMenu);

    // Close overlay menu when clicking outside
    document.addEventListener('click', function(event) {
        const moreButton = document.getElementById('more-button');
        const overlayMenu = document.getElementById('overlay-menu');
        if (!moreButton.contains(event.target) && !overlayMenu.contains(event.target)) {
            overlayMenu.style.display = 'none';
        }
    });
    //close the login overlay
    



    // login overlay
    // Get elements for list overlay
const openListOverlayBtn = document.getElementById("openListOverlayBtn");
const listOverlay = document.getElementById("listOverlay");
const closeListOverlayBtn = document.getElementById("closeListOverlayBtn");

// Show the list overlay when the button is clicked
openListOverlayBtn.addEventListener("click", () => {
  listOverlay.style.display = "block";
});

// Hide the list overlay when the close button is clicked
closeListOverlayBtn.addEventListener("click", () => {
  listOverlay.style.display = "none";
});

// Hide the list overlay when clicking outside of the content
window.addEventListener("click", (event) => {
  if (event.target === listOverlay) {
    listOverlay.style.display = "none";
  }
});

    // Get elements
const loginItems = document.querySelectorAll(".login-item");
const overlay = document.getElementById("overlay");
const closeOverlayBtn = document.getElementById("closeOverlayBtn");

// Show the overlay when one of the first two items is clicked
loginItems.forEach(item => {
  item.addEventListener("click", () => {
    overlay.style.display = "block";
  });
});

// Hide the overlay when the close button is clicked
closeOverlayBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Hide the overlay when clicking outside of the content
window.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.style.display = "none";
  }
});

//create overlay compose email

// Get elements for the email overlay
const openEmailOverlayBtn = document.getElementById("openEmailOverlayBtn");
const emailOverlay = document.getElementById("emailOverlay");
const closeEmailOverlayBtn = document.getElementById("closeEmailOverlayBtn");

// Show the email overlay when the button is clicked
openEmailOverlayBtn.addEventListener("click", () => {
  emailOverlay.style.display = "block";
});

// Hide the email overlay when the close button is clicked
closeEmailOverlayBtn.addEventListener("click", () => {
  emailOverlay.style.display = "none";
});

// Hide the email overlay when clicking outside the content
window.addEventListener("click", (event) => {
  if (event.target === emailOverlay) {
    emailOverlay.style.display = "none";
  }
});



    



    
    // Function to toggle user status
    function toggleUserStatus() {
        const statusBox = document.querySelector('.status-box');
        const statusText = document.querySelector('.status-text');

        // Check current status and toggle
        if (statusText.textContent === 'Inactive') {
            statusBox.style.backgroundColor = 'rgb(202, 110, 49)'; 
            statusText.textContent = 'Active'; 
        } else {
            statusBox.style.backgroundColor = 'gray';
            statusText.textContent = 'Inactive'; 
        }
    }

    // Add click event listener to status text
    document.querySelector('.status-text').addEventListener('click', toggleUserStatus);


