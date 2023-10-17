const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
    wrapper.classList.add('active');
}

loginLink.onclick = () => {
    wrapper.classList.remove('active');
}


async function register(){

    const data = {
        email: document.querySelector("#s-email").value,
        password: document.querySelector("#s-password").value,
        username: document.querySelector("#s-username").value
    }

    const result = await fetch(location.origin+"/users",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if(result.status === 201){
        wrapper.classList.remove('active');
    }

}

async function login(){
    const data = {
        password: document.querySelector("#l-password").value,
        email: document.querySelector("#l-email").value
    }

    const result = await fetch(location.origin+"/login",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if(result.status === 200){
        location.href = "/";
    }    
}

llogin.onclick = async _=> await login();
signup.onclick = async _=> await register();












