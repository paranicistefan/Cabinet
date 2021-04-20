var theme;
var mode=localStorage.getItem("mode");
var prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
module();

function module()
{
    if(mode==null)
        standard();
    else
    {
    if(mode==1)
        standard();
      if(mode==2)
      {
        document.body.classList.add("dark-mode");
        theme="dark";
        document.querySelector('.dropdown-content  i1').style.display="none";
        document.querySelector('.dropdown-content  i2').style.display="block";
        document.querySelector('.dropdown-content  i3').style.display="none";
        mode=2;
        localStorage.setItem("mode", mode);
      }
      if(mode==3)
      {
        document.body.classList.add("light-mode");
        theme="light";
        document.querySelector('.dropdown-content  i1').style.display="none";
        document.querySelector('.dropdown-content  i2').style.display="none";
        document.querySelector('.dropdown-content  i3').style.display="block";
        mode=3;
        localStorage.setItem("mode", mode);
      };
    }
}

function toggleD() {
  if(theme=="light")
  {
    document.body.classList.remove("light-mode")
    document.body.classList.add("dark-mode");
    theme="dark";
    document.querySelector('.dropdown-content  i1').style.display="none";
    document.querySelector('.dropdown-content  i2').style.display="block";
    document.querySelector('.dropdown-content  i3').style.display="none";
    mode=2;
    localStorage.setItem("mode", mode);
  }
}
function toggleL() {
  if(theme=="dark")
  {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    theme="light";
    document.querySelector('.dropdown-content  i1').style.display="none";
    document.querySelector('.dropdown-content  i2').style.display="none";
    document.querySelector('.dropdown-content  i3').style.display="block";
    mode=3;
    localStorage.setItem("mode", mode);
  }
}

function standard() {
  if (prefersDarkScheme.matches)
  {
    if(theme=="light")
      document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    theme="dark";
  }
  else
  {
    if(theme=="dark")
      document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    theme="light";
  }
  document.querySelector('.dropdown-content  i1').style.display="block";
  document.querySelector('.dropdown-content  i2').style.display="none";
  document.querySelector('.dropdown-content  i3').style.display="none";
  mode=1;
  localStorage.setItem("mode", mode);
}

var state=0;
function navbar(home)
{
  if(state==0)
  {
      document.querySelector('.burger').innerHTML=`<il class="fas fa-times"></il>`;
      document.querySelector('.burger').style.fontSize="9.92rem";
      document.querySelector('.nav').style.transform="translateX(0%)";
      document.body.style.overflowY="hidden";
      if(home==1)
        setTimeout(() => {  document.querySelector('.calendar').style.opacity=0; 
        document.querySelector('.popup').style.opacity=0;
        document.querySelector('footer').style.opacity=0;}, 350);
      state++;
  }
  else
  {
      document.querySelector('.burger').innerHTML=`<il class="fas fa-bars"></il>`;
      document.querySelector('.burger').style.fontSize="8rem";
      document.querySelector('.nav').style.transform="translateX(-100%)";
      document.body.style.overflowY="visible";
      if(home==1)
        setTimeout(() => {  document.querySelector('.calendar').style.opacity=1; 
        document.querySelector('.popup').style.opacity=1;
        document.querySelector('footer').style.opacity=1;}, 350);
      state--;
  }
}