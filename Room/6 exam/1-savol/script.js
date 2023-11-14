let opened = document.getElementById('open')
let login = prompt('Login kiriting')
let password = prompt('Parol kiriting')

if (login=='Shift' && password=='Shift123') {
    opened.innerText+= 'Siz platformaga kirdingiz'
}else if (login=='' && password=='') {
    opened.innerText+= 'Ruyxatdan uting'
}else{
    opened.innerText+= 'Login yoki parolni xato kiritdingiz'
}