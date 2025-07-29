function onChangeEmail(){
    toggleButtonDisable();
    toggleEmailErrors();
}

function onChangePassword(){
    toggleButtonDisable();
    togglePasswordErrors();
}

function isEmailValid(){
    const email = form.email().value;
    if(!email){
        return false;
    }
    return validateEmail(email);
}

function toggleEmailErrors(){
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors(){
    const senha = form.senha().value;
    form.passwordRequiredError().style.display = senha ? "none" : "block";    
}

function toggleButtonDisable(){
    const emailValid = isEmailValid();
    form.recoverBtn().disabled = !emailValid;
    
    const senhaValid = isPasswordValid();
    form.loginBtn().disabled = !emailValid || !senhaValid;
}

function isPasswordValid(){
    const senha = form.senha().value;
    if(!senha){
        return false;
    }
    return true;
}

function login(){
    window.location.href = "/home/gabe/Projetos/web/prj-1/home/home.html";
}

function register(){
    window.location.href = "/home/gabe/Projetos/web/prj-1/register/register.html";
}

const form = {
    email: () => document.getElementById("email"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    loginBtn: () => document.getElementById("login-btn"),
    senha: () => document.getElementById("senha"),
    passwordRequiredError: () => document.getElementById("password-invalid-error"),
    recoverBtn: () => document.getElementById("recover-password-btn")
}