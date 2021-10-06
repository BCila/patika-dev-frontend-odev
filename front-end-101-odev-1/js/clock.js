let myname;
myname = prompt("Adınız nedir?")
document.getElementById("myName").innerHTML = myname;

var gunler = new Array('Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi','Pazar')

function myDate(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    document.getElementById("myClock").innerText = `${h}:${checkZero(m)}:${checkZero(s)} ${gunler[today.getDay()-1]}`
    t = setTimeout(function(){ myDate() }, 500);
}

function checkZero(num) {
    if (num < 10) {
        return "0" + num.toString();
    } else {
        return num.toString();
    }
}

myDate();