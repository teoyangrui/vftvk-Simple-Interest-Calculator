function compute()
{
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal*years*rate/100
var year=new Date().getFullYear()+parseInt(years);

if((year != '[object Date]') ||(year <2022)) {
    alert("Please enter a proper year")
    return false
}
if(principal<=0) {
    alert("Please enter a positive number")
    principal.focus()
    return false

}
document.getElementById("result").innerText="If you deposite <mark>"+String(principal)
+"</mark> <br\> at an interest rate of 3.5% <br\> You will receive an amount of <mark>"+String(interest)+
"</mark> <br\> in the year "+String(year)
return True
}

function updateRate()
{
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText=rateval;}
