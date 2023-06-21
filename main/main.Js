let cindx = 0
function addd(wilaya,date,prix,link){
    if(localStorage.itemminfo != null ) {
        itemarr = JSON.parse(localStorage.itemminfo)
        console.log('helo')
    }
    else {
        itemarr = []
    }
    iteminfo = {
        wil : wilaya,
        da : date, 
        pr : prix,
        link : link,
    }
    itemarr.push(iteminfo)
    localStorage.itemminfo = JSON.stringify(itemarr)
    tbl = `
    <div class="add">
                        <div class="img"><img src="sgn.png" alt="pc"></div>
                        <div class="infos">
                            <p>${iteminfo.wil} </p>
                            <p>${iteminfo.da}</p>
                            <p><span>${iteminfo.pr}DA</span> par nuit</p>
                            <a href="${iteminfo.link}" onclick ='localStorage.cindx = ${cindx}'>voir plus</a>
                        </div>
                    </div>
    `
document.getElementById('cntcnt').innerHTML += tbl
cindx += 1 
}
// bring added listings//
var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1;
var day = currentDate.getDate();
var formattedDate = year + '-' + month.toString().padStart(2, '0') + '-' + day.toString().padStart(2, '0');
if(localStorage.items != null) {
    datarr = JSON.parse(localStorage.items)
    for(i = 0 ; i<datarr.length ; i++){
        addd(datarr[i].willaya,formattedDate,datarr[i].price,"#")
    }
}
//Change profile name 
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