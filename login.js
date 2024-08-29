const loginButton = document.querySelector("#loginBtn");

loginButton.addEventListener("click", userAuth);

function trimEndCharacter(str, charToRemove) {
    while (str.endsWith(charToRemove)) {
        str = str.slice(0, -1);
    }
    return str;
}

function userAuth() {
    let username = document.querySelector("#usernameInput").value;
    let password = document.querySelector("#passwordInput").value;
    
    username = trimEndCharacter(username, " ");
    password = trimEndCharacter(password, " ");

    // Student : ANKITA
    if ((username === "ANKITA" || username === "ankita" || username === "Ankita") && password === "iam.ankita") {
        localStorage.setItem("isAuthenticated", "true");
        window.location.href = "main.html";
    }
    // CEO & Founder : Shubhashish Chakraborty
    else if ((username === "Shubhashish" || username === "shubhashish" || username === "Shubh" || username === "shubh") && (password === "6996" || password === "sss")) {
        localStorage.setItem("isAuthenticated", "true");
        window.location.href = "main.html";
    }
    // Spectators:
    else if ((username === "Spectator" || username === "spectator") && password === "4321") {
        localStorage.setItem("isAuthenticated", "true");
        window.location.href = "main.html";
    }
    else if (username === "t" && password === "t") {
        localStorage.setItem("isAuthenticated", "true");
        window.location.href = "temp.html";
    }
    else {
        alert("Incorrect username or password!");
    }
}

if (localStorage.getItem("isAuthenticated") === "true") {
    window.location.href = "main.html";
}
if (localStorage.getItem("isAuthenticated") === "true") {
    window.location.href = "temp.html";
}
