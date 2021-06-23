function mode1()
{
  localStorage.setItem('backgroundcolor' , "white");
  localStorage.setItem('divbackground' , "#cedbda");
  localStorage.setItem('divcolor' , "black");
  myValue1 = null;
  myValue2 = null;
  myValue3 = null;
  z=document.getElementsByClassName("container");
  if(localStorage.getItem('backgroundcolor'))
  {
    myValue1 = localStorage.getItem('backgroundcolor');
    document.body.style.background = myValue1;
  }
  if(localStorage.getItem('divbackground'))
  {
    myValue2 = localStorage.getItem('divbackground');
    z[0].style.backgroundColor =myValue2;
  }
  if(localStorage.getItem('divcolor'))
  {
    myValue3 = localStorage.getItem('divcolor');
    z[0].style.color =myValue3;
  }
  y=document.getElementsByClassName("dropdown-menu");
  y[0].style.background = "none";
  y[0].style.border = "1px solid #0b3b40";
  x=document.getElementsByClassName("dropdown-item");
  x[0].style.color = "black";
  x[1].style.color = "black";
}

function mode2()
{
  localStorage.setItem('backgroundcolor' , "#0b3b40");
  localStorage.setItem('divbackground' , "#157b85");
  localStorage.setItem('divcolor' , "#ebe1e1");
  myValue1 = null;
  myValue2 = null;
  myValue3 = null;
  z=document.getElementsByClassName("container");
  if(localStorage.getItem('backgroundcolor'))
  {
    myValue1 = localStorage.getItem('backgroundcolor');
    document.body.style.background = myValue1;
  }
  if(localStorage.getItem('divbackground'))
  {
    myValue2 = localStorage.getItem('divbackground');
    z[0].style.backgroundColor =myValue2;
  }
  if(localStorage.getItem('divcolor'))
  {
    myValue3 = localStorage.getItem('divcolor');
    z[0].style.color =myValue3;
  }
  y=document.getElementsByClassName("dropdown-menu");
  y[0].style.background = "none";
  y[0].style.border = "1px solid #637d80";
  x=document.getElementsByClassName("dropdown-item");
  x[0].style.color = "#637d80";
  x[1].style.color = "#637d80";
}
