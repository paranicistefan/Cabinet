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