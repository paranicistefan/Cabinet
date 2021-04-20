const day=sessionStorage.getItem("programmed-day");
const datadeazi=sessionStorage.getItem("programmed-date");
document.getElementById("btnClickedValue").value = datadeazi;

formular();
robotDark();
verificareORE();

if(localStorage.getItem('status')=='programmed')
{
    location.href="home";
}
function formular()
{
    let sir="";
    let x="";
    document.querySelector(".formular h2").innerHTML=datadeazi;
    if(day==1 || day==3)
    {
        for(let i=14;i<=16;i++)
        {
            x+= `<input type="radio" id=${i} onclick="del()" name="ora" value="${i}:00-${i+1}:00"><label id=${i}l>${i}:00-${i+1}:00</label><br id=${i}b>`;
            document.querySelector(".ore").innerHTML=x;
        }
    }
    if(day==2 || day==4)
    {
        for(let i=10;i<=12;i++)
        {
            x+= `<input type="radio" id=${i} onclick="del()" name="ora" value="${i}:00-${i+1}:00"><label id=${i}l>${i}:00-${i+1}:00</label><br id=${i}b>`;
            document.querySelector(".ore").innerHTML=x;
        }
    }
    if(day==5)
    {
        document.querySelector('.hour').innerHTML="Ora : 13:00-14:00";
        x+= `<input type="hidden" id=13 onclick="del()" name="ora" value="13:00-14:00">`;
        document.querySelector(".ore").innerHTML=x;
        document.querySelector(".obs").innerHTML="Observatie: Programarile pe ziua de vineri, sunt la cabinetul din Liteni !";
    }
}

function programare()
{
    let incomplete=0;
    if(day==1 || day==3)
    {
        for(let i=14;i<=16;i++)
        {
            if(document.getElementById(i).checked)
            {
                sessionStorage.setItem('programmed-date&h',sessionStorage.getItem('programmed-date')+`  Ora: ${i}:00-${i+1}:00`);
                incomplete--;
            }
        }
    }
    if(day==2 || day==4)
    {
        for(let i=10;i<=12;i++)
        {
            if(document.getElementById(i).checked)
            {
                sessionStorage.setItem('programmed-date&h',sessionStorage.getItem('programmed-date')+`  Ora: ${i}:00-${i+1}:00`);
                incomplete--;
            }
        }
    }
    if(day==5)
    {
        sessionStorage.setItem('programmed-date&h',sessionStorage.getItem('programmed-date')+`  Ora: 13:00-14:00`);
        incomplete--;
    }
    if(incomplete==0)
    {
        document.querySelector('.ore').style.marginBottom ="0rem";
        document.querySelector('.error0').innerHTML=`<p>Trebuie sa selectati o ora !</p>`;
        document.querySelector('.error0').style.marginBottom ="1.2rem";
        incomplete+=2;
    }
    else
    {
        incomplete=0;
    }
    if(localStorage.getItem('status')=='programmed')
    {
        incomplete++;
        location.href="home";
    }
    if(document.querySelector('.nume').value=="")
    {
        document.querySelector('.nume').style.border="solid #bf2a37";
        document.querySelector('.camp1').style.marginBottom ="0rem";
        document.querySelector('.error1').innerHTML=`<p>-Treuie sa introduceti numele</p>`;
        document.querySelector('.error1').style.marginBottom ="1.2rem";
        incomplete++;
    }
    if(document.querySelector('.prenume').value=="")
    {
        document.querySelector('.prenume').style.border="solid #bf2a37";
        document.querySelector('.camp2').style.marginBottom ="0rem";
        document.querySelector('.error2').innerHTML=`<p>-Treuie sa introduceti prenumele</p>`;
        document.querySelector('.error2').style.marginBottom ="1.2rem";
        incomplete++;
    }
    if(document.querySelector('.telefon').value.length!=10)
    {
        document.querySelector('.telefon').style.border="solid #bf2a37";
        document.querySelector('.camp3').style.marginBottom ="0rem";
        document.querySelector('.error3').innerHTML=`<p>-Acest camp trebuie sa contina exact 10 cifre</p>`;
        document.querySelector('.error3').style.marginBottom ="1.2rem";
        incomplete++;
    }
    if(isNaN(document.querySelector('.telefon').value))
    {
        document.querySelector('.telefon').style.border="solid #bf2a37";
        document.querySelector('.camp3').style.marginBottom ="0rem";
        document.querySelector('.error3').innerHTML=`<p>-Acest camp trebuie sa contina doar cifre</p>`;
        document.querySelector('.error3').style.marginBottom ="1.2rem";
        incomplete++;
    }
    if(document.querySelector('.telefon').value=="")
    {
        document.querySelector('.telefon').style.border="solid #bf2a37";
        document.querySelector('.camp3').style.marginBottom ="0rem";
        document.querySelector('.error3').innerHTML=`<p>-Treuie sa introduceti numarul de telefon</p>`;
        document.querySelector('.error3').style.marginBottom ="1.2rem";
        incomplete++;
    }
    if(incomplete==0)
    {
        localStorage.setItem('date',sessionStorage.getItem('date1'));
        localStorage.setItem('month',sessionStorage.getItem('month1'));
        localStorage.setItem('year',sessionStorage.getItem('year1'));
        return true;
    }
    else
        return false;
}

function recolor(clasa1,clasa2,clasa3)
{
    document.querySelector(clasa1).style.border="solid #555";        
    document.querySelector(clasa2).style.marginBottom ="2.4rem";
    document.querySelector(clasa3).innerHTML=`<p></p>`;
    document.querySelector(clasa3).style.marginBottom ="0rem";
}
function del()
{
    document.querySelector(".error0").innerHTML=`<p></p>`;
}

function reload()
{
    location.href='home';
}
const ref=document.querySelector('.return');
ref.addEventListener("click",reload);

function verificareORE()
{
    if(day==1 || day==3)
    {
        for(let i=14;i<=16;i++)
            verificarePHP(i+":00-"+(i+1)+":00",day,i,datadeazi);
    }
    if(day==2 || day==4)
    {
        for(let i=10;i<=12;i++)
        {
            if(i==9)
                verificarePHP("0"+i+":00-"+(i+1)+":00",day,i,datadeazi);
            else
                verificarePHP(i+":00-"+(i+1)+":00",day,i,datadeazi);
        }
    }
    if(day==5)
    {
        verificarePHP("13:00-14:00",day,13,datadeazi);
    }
}

function verificarePHP(interval,ziua,first,dataS)
{
    var datele = new FormData();
    datele.append("dataSelectata",dataS)
    datele.append("intervalSelectat",interval);
    datele.append("ziuaSapt",ziua)
    var xhr = new XMLHttpRequest();
    xhr.open("POST","Hours.php");
    xhr.onload = function(){
        if(this.response=="true")
        {
            document.getElementById(first).style.display="none";
            document.getElementById(first+"l").style.display="none";
            document.getElementById(first+"b").style.display="none";
        }
    }
    xhr.send(datele);
}

