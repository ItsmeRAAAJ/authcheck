// Check if the user is authenticated
if (localStorage.getItem("isAuthenticated") !== "true") {
    // If not authenticated, redirect to the login page
    window.location.href = "index.html";
}

// Logout functionality
const logoutButton = document.querySelector("#logoutBtn");
logoutButton.addEventListener("click", () => {
    // Clear authentication status
    localStorage.removeItem("isAuthenticated");

    // Redirect to login page
    window.location.href = "temp.html";
});

// Prevent back navigation
history.pushState(null, null, window.location.href);
window.onpopstate = function () {
    history.go(1);
};
