// Get elements for Sign In overlay
const openSignInOverlayBtn = document.getElementById("openSignInOverlayBtn");
const signInOverlay = document.getElementById("signInOverlay");
const closeSignInOverlayBtn = document.getElementById("closeSignInOverlayBtn");

// Get elements for Sign Up overlay
const openSignUpOverlayBtn = document.getElementById("openSignUpOverlayBtn");
const signUpOverlay = document.getElementById("signUpOverlay");
const closeSignUpOverlayBtn = document.getElementById("closeSignUpOverlayBtn");

// Show the Sign In overlay when the button is clicked
openSignInOverlayBtn.addEventListener("click", () => {
  signInOverlay.style.display = "block";
});

// Show the Sign Up overlay when the button is clicked
openSignUpOverlayBtn.addEventListener("click", () => {
  signUpOverlay.style.display = "block";
});

// Hide the Sign In overlay when the close button is clicked
closeSignInOverlayBtn.addEventListener("click", () => {
  signInOverlay.style.display = "none";
});

// Hide the Sign Up overlay when the close button is clicked
closeSignUpOverlayBtn.addEventListener("click", () => {
  signUpOverlay.style.display = "none";
});

// Hide the overlays when clicking outside of the content
window.addEventListener("click", (event) => {
  if (event.target === signInOverlay) {
    signInOverlay.style.display = "none";
  }
  if (event.target === signUpOverlay) {
    signUpOverlay.style.display = "none";
  }
});
