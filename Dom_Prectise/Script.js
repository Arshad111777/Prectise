var username = document.getElementById("user");
var password = document.getElementById("pass");

var btn = document.querySelector(".btn");
var userVal1 = document.getElementById("val1")
var passVal1 = document.getElementById("val2")

function myFun(){
var data1 = username.value;
var data2 = password.value;
// var result = data1 + " " + data2;

// console.log(result);
// userVal1.innerHTML = "Enter The Username"
// passVal1.innerHTML = "Enter The Password";

// alert(data1);
// alert(data2)


if ( (data1.length == " " || data2.length == " ")  || (data1.length < 3 || data2.length < 3)) {
   
 userVal1.innerHTML = "Enter The Username";
 passVal1.innerHTML = "Enter The Password";
userVal1.style.color = "red";
passVal1.style.color = "red";

    
}else{
    

    userVal1.innerHTML = "Username Validation Success";
    passVal1.innerHTML = "Password Validation Success";


userVal1.style.color = "green";
passVal1.style.color = "green";
console.log(data1 + " " + data2);

}



}


function myFun2(){
username.value = null;
password.value = null;

userVal1.innerHTML = " ";
passVal1.innerHTML = " ";
}


