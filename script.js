document.querySelector("#notes01_11082024").addEventListener("click", () => {
    window.open("https://drive.google.com/file/d/1dz0gdzgYhkF5p4v_1Zrb3cGNR3dSj0-C/view?usp=drive_link", "_blank");
});

document.querySelector("#notes02_11082024").addEventListener("click", () => {
    window.open("https://drive.google.com/file/d/1uFmd7Bo0f7F6VLYN0YglZc1wv7epQh33/view?usp=drive_link", "_blank");
});

document.querySelector("#notes01_25082024").addEventListener("click" , () => {
    window.open("https://drive.google.com/file/d/1KlGi_jQ9q6eNR2SGStBpWyG2MqWX_eze/view?usp=sharing" , "_blank");
})

// Adding typing effect typing effect to the Heading:

document.addEventListener("DOMContentLoaded", function () {
    const heading = document.getElementById("web-heading");
    const text = "Initiated By Shubhashish Chakraborty";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            heading.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust typing speed here
        }
    }

    typeText();
});

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
    window.location.href = "index.html";
});

// Prevent back navigation
history.pushState(null, null, window.location.href);
window.onpopstate = function () {
    history.go(1);
};
