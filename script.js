function compute()
{
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = principal * years * rate /100
  var year= new Date().getFullYear()+parseInt(years);
  console.log(year)
  if(year <2022) {
      alert("Please enter a proper year")
      return false
  }
  if(principal<=0) {
      alert("Please enter a positive number")
      principal.focus()
      return false

  }
  document.getElementById("result").innerHTML=" <br>If you deposite <mark>"+String(principal)
  +"</mark> <br\> at an interest rate of <mark>"+ String(rate) +"</mark> <br\> You will receive an amount of <mark>"+ String(interest)+ 
  "</mark> <br\> in the year <mark>"+String(year)+"</mark>"
}

function updateRate()
{
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText=rateval+"%";
  }
