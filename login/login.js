let l_email = document.getElementById('email')
let l_password = document.getElementById('password')
let fname = document.getElementById('fname')
let username = document.getElementById('username')
let s_email = document.getElementById('s-email')
let s_password = document.getElementById('s-password')
let cs_password = document.getElementById('cs-password')
let checkbox = document.getElementById('ck')
if(localStorage.loginData != null) { 
     da = JSON.parse(localStorage.loginData)
}
else {
     da = []
}
console.log(da)
window.onload = l_email.focus()
function rdrctsignup() { 
    fname.focus()
} 


function checkname(){
    if (fname.value.includes(" ") && fname.value[fname.value.length - 1 ]!=" "){
        fname.style.border = '1px solid hsl(125, 100%, 50%)'
return true
    }
    return 
}


function checkemail(){
    if (s_email.value.includes('@') && s_email.value.includes('.')){
        s_email.style.border = '1px solid hsl(125, 100%, 50%)'
        return true
    }
    return false
}

function checkusername(){
    let h = true
    if (username == ""){ 
    return false}
    else{
    for(i=0;i<da.length;i++){
        if(da[i].username == username.value) {
            username.style.border = '1px solid red'
            let h = false
            return false
        }
    }
    if(h==true){
        username.style.border = '1px solid hsl(125, 100%, 50%)'
    }
    return true
}
}

function checkpassword() { 
    if (s_password.value != cs_password.value) { 
        cs_password.style.border = '1px solid hsl(0, 99%, 55%)'
    }
    else if(s_password.value!="" && s_password.value == cs_password.value){
        s_password.style.border = '1px solid hsl(125, 100%, 50%)'
        cs_password.style.border = '1px solid hsl(125, 100%, 50%)'
        return true
    }
}


function creatacc(){  
    if(!checkusername()){
        username.style.border = '1px solid red'
    }
    if (!checkname()){
        fname.style.border = '1.9px solid red'
    }
    if(!checkemail()){
       s_email.style.border = '1.9px solid red'
    }
    if(!checkpassword()){
        s_password.style.border = '1.9px solid red'
    }
    else if (checkemail() && checkname() && checkpassword()) {
        let log =  {
            name : fname.value,
            username : username.value ,
            email : s_email.value,
            password : s_password.value
        }
        da.push(log)
        console.log(da)
        localStorage.loginData = JSON.stringify(da)
        l_email.value = s_email.value
        s_email.value = ""
        fname.value = ""
        username.value = ""
        s_password.value = ""
        cs_password.value = ""
    }
}

function log(){
    indx = 0 
    let login = false
    for(i=0;i<da.length;i++){
        if (da[i].email == l_email.value && da[i].password== l_password.value || da[i].username == l_email.value && da[i].password== l_password.value){
            localStorage.inx = i 
            location.assign('../profile/profile.html')
            if(checkbox.checked){
            staylogin = true
        }
            else{staylogin = false}
            login = true
        }}
        if(login == false) { 
            l_email.style.borderColor = 'red'
            l_password.style.borderColor = 'red'
        }
}
