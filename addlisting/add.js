let apname = document.getElementById('appname')
let apwil = document.getElementById('appwillaya')
let apadres = document.getElementById('appaddress')
let appprice = document.getElementById('appprice')
let addbtn = document.getElementById('itmaddd')
if(addbtn.style.display == 'block'){
    addbtn.style.display = 'none'
}
function addlisting(){
    if (localStorage.items != null ) {
        data = JSON.parse(localStorage.items)
    }
    else {
        data = []
    }
    let itemInfo = {
        name : apname.value,
        willaya : apwil.value,
        adresse : apadres.value,
        price : appprice.value 
    }
    data.push(itemInfo)
    localStorage.items = JSON.stringify(data)
    if(addbtn.style.display == 'none'){
        addbtn.style.display = 'block'
    }
    setTimeout(()=>{location.reload()},1500)
}
//change profile name 
if (localStorage.loginData != null) { 
    data = JSON.parse(localStorage.loginData)
}
else {
    data = [{
       username : 'tst' ,
       name : 'test',
       phone : '012345678',
       email : 'example@example.com',
       password : 'password'
    }]}
if (localStorage.inx != null) {
        indx = localStorage.inx
 }
else{
        indx = 0
}
arr = data[indx]
arr = data[indx]
document.getElementById('usernamepr').textContent = arr.username