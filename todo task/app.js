var userName = prompt("enter your name");
var userAge = prompt("enter your age");
if (userAge<=0)
alert("there is no age equal or less 0");
var gender = prompt("enter your gender");
switch(gender)
{ case "male":
alert("welcome Mr" + userName);
break;
case "female":
    alert ("welcome Ms" + userName);
    break;
    default:
    alert ("your gender is not valid");
}

