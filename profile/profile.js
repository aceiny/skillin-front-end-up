let sd = document.getElementById('sdbar')
let side = document.getElementById('side')
let cntr = document.getElementById('cntr')
let chngacc = document.getElementById('chngaccount')
let fchng = document.getElementById('fchange')
let fname = document.getElementById('fullname')
let place = document.getElementById('place')
console.log(chngacc,fchng)
sd.onclick = () => {
    if(!side.hasAttribute('class')) {
    side.setAttribute('class','sidedective')
    cntr.style.width = '100%'
    }
    else{
        side.removeAttribute('class')
        cntr.style.width = '90%'
    }
}
function ff() { 
    fchng.focus()
}
// name and place 

//about filling 
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
infos = `
                        <ul class="ful">
                        <li>Birth Date : </li>
                        <li>Adresse : </li>
                        <li>Email : </li>
                        <li>Phone : </li>
                        </ul>
                        <ul class="sul">
                            <li>${arr.date}</li>
                            <li>${arr.adress}</li>
                            <li>${arr.email}</li>
                            <li>${arr.phone}</li>
                        </ul>
                        `
document.getElementById('tabel').innerHTML=infos
// name and place 
document.getElementById('fullnamee').textContent = arr.name
//get geolocation
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const city = data.address.city;
          document.getElementById('place').textContent = city
        })
        .catch(error => {
          console.error("Error retrieving city:", error);
          document.getElementById('place').textContent = 'cant retrive current location'
        });
    });
  }
// change value 
let dob = document.getElementById('fchange')
let adr = document.getElementById('schange')
let cm = document.getElementById('tchange')
let cp = document.getElementById('fochange')
function change() {
    console.log('hl')
    if(cm.value.length > 0 ) {data[indx].email = cm.value}
    if(cp.value.length > 0 ) {data[indx].phone = cp.value}
    if(dob.value.length > 0 ) {data[indx].date = dob.value}
    if(adr.value.length>0) {data[indx].adress = adr.value}
localStorage.loginData = JSON.stringify((data))
infos = `
                        <ul class="ful">
                        <li>Birth Date : </li>
                        <li>Adresse : </li>
                        <li>Email : </li>
                        <li>Phone : </li>
                        </ul>
                        <ul class="sul">
                            <li>${data[indx].date}</li>
                            <li>${data[indx].adress}</li>
                            <li>${data[indx].email}</li>
                            <li>${data[indx].phone}</li>
                        </ul>
                        `
document.getElementById('tabel').innerHTML= infos
}
function reset() {
    dob.value = ''
    cm.value = ''
    cp.value ='' 
    adr.value = ''
}
//profile => username 
document.getElementById('usernamepr').textContent = arr.username