const form1=document.querySelector('#form1')
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const phone=document.querySelector('#phone');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');

form1.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})

function validateInputs(){
    const usernameVal=username.value.trim()
    const emailVal=email.value.trim();
    const phoneVal=phone.value.trim();
    const passwordVal=password.value.trim();
    const cpaaswordVal=cpassword.value.trim();


}

function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')

    errorElement.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')

    errorElement.innerText='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
    
}

const validateEmail=(email)=>{
    return String(email).toLowerCase().match(
        
    )
}