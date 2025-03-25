// script.js

// Function to redirect to the specified page
function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
  }
  
  // Function to set the active menu item and navigate
  function setActiveMenuItem(event, pageUrl) {
    const buttons = document.querySelectorAll('.word-button');
    
    // Remove 'active' class from all buttons
    buttons.forEach(button => {
      button.classList.remove('active');
    });
  
    // Add 'active' class to the clicked button
    event.target.classList.add('active');
  
    // Navigate to the specified page after a brief delay to allow for visual feedback
    setTimeout(() => {
      navigateToPage(pageUrl);
    }, 150);
  }
  
  // Get all the buttons and set up click events with navigation
  document.querySelectorAll('.word-button').forEach(button => {
    button.addEventListener('click', (event) => {
      const pageUrl = getPageUrl(button.textContent.trim());
      setActiveMenuItem(event, pageUrl);
    });
  });
  
  // Function to return the URL based on the button text
  function getPageUrl(buttonText) {
    switch (buttonText) {
      case 'Home':
        return 'home.html'; // Change this to your home page URL
      case 'Category':
        return 'category.html'; // Change this to your category page URL
      case 'My Orders':
        return 'orders.html'; // Change this to your orders page URL
      case 'Shopping Cart':
        return 'cart.html'; // Change this to your shopping cart page URL
      case 'My Favorite':
        return 'favorites.html'; // Change this to your favorites page URL
      case 'Settings':
        return 'settings.html'; // Change this to your settings page URL
      case 'Rate Us':
        return 'rate.html'; // Change this to your rate us page URL
      default:
        return 'home.html'; // Default fallback URL
    }
  }