function change()
{
  localStorage.setItem('bcolor' , "red");
  a = document.getElementsByClassName("container");
  myValue = null;
  if (localStorage.getItem('bcolor')) {
      myValue = localStorage.getItem('bcolor');
      a[0].style.backgroundColor = myValue;
    }

      localStorage.setItem('bagcolor' , "grey");
      my=null;
      if(localStorage.getItem('bagcolor'))
      {
        my=localStorage.getItem('bagcolor');
        document.body.style.background = my;
      }

}


function change2()
{
  localStorage.setItem('bcolor' , "blue");
  a = document.getElementsByClassName("container");
  myValue = null;
  if (localStorage.getItem('bcolor')) {
      myValue = localStorage.getItem('bcolor');
      a[0].style.backgroundColor = myValue;

      localStorage.setItem('bagcolor' , "yellow");
      my=null;
      if(localStorage.getItem('bagcolor'))
      {
        my=localStorage.getItem('bagcolor');
        document.body.style.background = my;
      }

  }
}
