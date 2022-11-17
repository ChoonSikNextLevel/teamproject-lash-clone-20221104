const loginButton = document.querySelectorAll(".login-button")[0];
const joinButton = document.querySelectorAll(".login-button")[1];


loginButton.onclick = () => {
    const loginform = document.querySelector("form");
    loginform.submit();
}

joinButton.onclick = () => {
    location.href = "/account/join";

}