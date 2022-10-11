const form = document.querySelector('.form');
const firstname = document.querySelector('.firstname');
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const number = document.querySelector('.number');
const country= document.querySelector('.country');
const city = document.querySelector('.city');
const password = document.querySelector('.password');
const password_2 = document.querySelector('.password_2');
const btn = document.querySelector('.btn');
const toast = document.querySelector('.toast');

// проверка ошибки
function showError (input, message){
    const formControl = input.parentElement;
    formControl.className = 'form_control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// показывает, что проверка прошла
function showSuccess (input){
    const formControl = input.parentElement;
    formControl.className = 'form_control success';
}

// проверка email
function isValidEmail (email){
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase())
}

function errorToast (message){
    toast.className = 'error_toast';
    toast.innerText = message;
    setTimeout(function (){
        toast.remove()
    }, 3000)
}
function successToast (message){
    toast.className = 'success_toast';
    toast.innerText = message;
    setTimeout(function (){
        toast.remove()
    }, 3000)
}

form.addEventListener('submit', function (e){
    e.preventDefault()
    if (firstname.value === ''){
        showError(firstname, 'Необхідно ввести прізвище')
    } else if (firstname.value.length<4) {
        showError(firstname, 'Введіть вірні дані')
    }else {
        showSuccess(firstname)
    }

    if (name.value === ''){
        showError(name, 'Необхідно ввести дані')
    } else if (name.value.length<4) {
        showError(name, 'Введіть вірні дані')
    }  else {
        showSuccess(name)
    }

    if (email.value === ''){
        showError(email, 'Необхідно ввести email')
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Введенний пароль не дійсний')
    } else {
        showSuccess(email)
    }

    if (number.value === ''){
        showError(number, 'Необхідно ввести номер телефона')
    } else if (number.value.length<10) {
        showError(number, 'Введіть вірні дані')
    } else {
        showSuccess(number)
    }

    if (password.value === ''){
        showError(password, 'Необхідно ввести пароль')
    } else if (password.value.length<8) {
        showError(password, 'Пароль повинен містите не менше 8 символів')
    } else {
        showSuccess(password)
    }

    if (password_2.value === ''){
        showError(password_2, 'Необхідно ввести пароль')
    } else if(password_2.value !== password.value) {
        showError(password_2, 'Паролі не співпадають')
    } else {
        showSuccess(password_2)
    }

    if (firstname.value === '' || firstname.value.length<4 || name.value === '' || name.value.length<4 || email.value === '' || !isValidEmail(email.value) || number.value === '' || number.value.length<10 || password.value === '' || password.value.length<8 || password_2.value !== password.value) {
        errorToast('Неможливо зареєструватися!')
    } else {
        successToast('Реєстрація пройшла успішно!')
    }
})



