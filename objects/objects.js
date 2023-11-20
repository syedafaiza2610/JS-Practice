// var obj = {
//     s_id : '01',
//     s_name : 'Faiza Parveen',
//     s_age : '24',
//     s_roll : 'EP21101010',
//     s_depart : 'UBIT'
// }
// for(var key in obj){                      // key is a name of variable hum kuch bhi name rakh sakty hn uthaega wo key hi
//     document.write(key , ':' , ' ' ,obj[key],'<br>')
// }
// document.write(obj.s_id,+obj.s_name,obj.s_age,obj.s_roll,obj.s_depart)
// console.log(obj)

// localStorage.setItem('firstName','Faiza')
// localStorage.clear()
// sessionStorage.setItem('LastName','Naqi')

function signup() {
    var email = document.getElementById('semail').value
    var pass = document.getElementById('spass').value
    localStorage.setItem('Email',email)
    localStorage.setItem('Password' , pass)
    location.href = './signin.html'
}
function signin() {
    var email = document.getElementById('lemail').value
    var pass = document.getElementById('lpass').value
    if(localStorage.getItem('Email')== email && localStorage.getItem('Password')== pass )
    location.href = "./welcome.html"
else{
    alert("Kindly Sign up")
    location.href = './signup.html'
}
}