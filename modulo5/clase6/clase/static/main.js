

const emailSchema = z.string().email()
const passwordSchema = z.string().min(8).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
const registerButton = document.querySelector('#register-button')
const togglePasswordButtons=[...document.querySelectorAll('.toggle-password')]

const handleRegister = (e) => {
    // cancelar el compartamiento por defecto del formulario (es decir, que no se recargue la página)
    e.preventDefault()
    const form = e.target
    const userEmail=form.children[1].value;
    if(!userEmail){
        alert('El email es obligatorio')
        return;
    }
    const userPassword=form.children[3].value;
    const userPasswordConfirm=form.children[5].value;
    if(userPassword !== userPasswordConfirm){
        alert('Las contraseñas deben coincidir')
        return;
    }
    if(regexPassword.test(userPasswordConfirm)){
        alert('La contraseña debe tener al menos 8 caracteres, una letra mayuscula, minúscula y un número')
        return;
    }
    console.log(userEmail, userPassword, userPasswordConfirm);
    
    
}
registerButton.addEventListener('submit',(e)=> handleRegister(e))

togglePasswordButtons.forEach((button) => {
    button.addEventListener('click', (e) => handleTogglePassword(e))
})

const handleTogglePassword = (e) => {
    e.preventDefault()
    const input = e.target.parentElement.children[0]
    if(input.type === 'password'){
        input.type = 'text'
    }
    else{
        input.type = 'password'
    }
}

emailSchema.parse('uno@uno.com')
passwordSchema.parse('Password1!')