// JavaScript Document for form validation

function checkrequired(which) {
var pass=true;
if (document.images) {
for (i=0;i<which.length;i++) {
var tempobj=which.elements[i];
if (tempobj.name.substring(0,8)=="required") {
if (((tempobj.type=="text"||tempobj.type=="textarea")&&
tempobj.value=='')||(tempobj.type.toString().charAt(0)=="s"&&
tempobj.selectedIndex==0)) {
pass=false;
break;
}
}
}
}
if (!pass) {
shortFieldName=tempobj.name.substring(8,30).toUpperCase();
alert("Please make sure the "+shortFieldName+" field was properly completed.");
return false;
}
else
return true;
}

function allLetter(name)
    var letters = /^[A-Za-z]+$/;
    if(name.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('Name must have alphabet characters only');
        return false;
    }
}

function checkEmail() {
    var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
 }
}

function validgender(mgender,fgender)
{
    x=0;

    if(mgender.checked)
    {
        x++;
    } if(fgender.checked)
{
    x++;
}
    if(x==0)
    {
        alert('Select Male/Female');
        return false;
    }
    else
    {
        alert('Form Successfully Submitted');
        window.location.reload()
        return true;}
}



