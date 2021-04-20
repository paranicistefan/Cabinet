const date = new Date();
let curentYear = date.getFullYear();
let curentDate = date.getDate();
let curentDay = date.getDay();
let curentMonth = date.getMonth();
let M=[];
const months = [
    "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie",
    "August", "Septembrie", "Octombire", "Noiembrie", "Decembrie"
];

const Weekdays = [
    "Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"

];
const monthsDates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
for(let i=0; i<6; i++) 
 {
    M[i] = [];
    for(let j=0; j<7; j++) 
    {
        M[i][j] = undefined;
    }
}

function cMonth()
{
    date.setMonth(curentMonth);
    date.setYear(curentYear);
    curentCalendar();
}
document.querySelector('.date p').addEventListener("click",cMonth);

function nextMonth()
{
    if(date.getMonth()+1==curentMonth || date.getFullYear==curentYear)
    {
        date.setMonth(date.getMonth()+1);
        curentCalendar();
        verificareDate();
        programat();
    }
    else
    {
        date.setMonth(date.getMonth()+1);
        calendar();
        verificareDate();
        programat();
    }
}
const forword=document.querySelector('.mounth i2');
forword.addEventListener("click",nextMonth);

function prevsMonth()
{
    if(date.getMonth()-1<curentMonth)
        return 0;
    if(date.getMonth()-1==curentMonth || date.getFullYear==curentYear)
    {
        date.setMonth(date.getMonth()-1);
        curentCalendar();
        verificareDate();
        programat()
    }
    else
    {
        date.setMonth(date.getMonth()-1);
        calendar();
        verificareDate();
        programat()
    }
}
const back=document.querySelector('.mounth i1');
back.addEventListener("click",prevsMonth);


curentCalendar();
verificareDate();
programat();



function curentCalendar()
{
    document.querySelector('.mounth i1').style.opacity = "0.4";
    document.querySelector('.date h1').innerHTML = months[curentMonth] + " " + curentYear;
    document.querySelector('.date p').innerHTML = Weekdays[curentDay] + " " + curentDate + " " + months[curentMonth] + " " + curentYear;


    if (curentYear % 4 == 0)
        monthsDates[1] = 29;

    date.setDate(1);
    let previousDates
    if(date.getDay()==0)
        previousDates = date.getDay()-1+7;
    else
        previousDates = date.getDay()-1;
    let prevMonth;
    if (date.getMonth() == 0)
        prevMonth = 11;
    else
        prevMonth = curentMonth-1;
    let days = "";
    let x=0;
    let y=0;
    for (let i = monthsDates[prevMonth] - previousDates; i < monthsDates[prevMonth]; i++) 
    {
        M[x][y]=i+1;
        y++;
        if(y==7)
        {
            x++;
            y=0;
        }
    }
    for (let i = 1; i <= monthsDates[curentMonth]; i++) 
    {
        M[x][y]=i;
        y++;
        if(y==7)
        {
            x++;
            y=0;
        }
    }
    let nextDates =1;
    for(let j=y;j<7;j++)
    {
        M[x][j]=nextDates;
        nextDates++;
    }
    x++;
    for (let i=x; i<6; i++)
    {
        for(let j=0;j<7;j++)
        {
            M[i][j]=nextDates;
            nextDates++;
        }
    }
    let one=1;
    for(let i=0; i<6; i++)
    {
        for(let j=0; j<7; j++) 
        {
            if(M[i][j]==1)
            {
                one++;
            }   
            if(one==1)
            {
                days += `<div onclick="select(0)" class="prev-date">${M[i][j]}</div>`;
                document.querySelector('.days').innerHTML = days;
            }
            if(one==2)
            {
                if (M[i][j] == curentDate && j>=5) 
                {
                    days += `<div id=${0} onclick="select(id)" class="today busy">${M[i][j]}</div>`;
                    document.querySelector('.days').innerHTML = days;
                    continue;
                }
                if (M[i][j] == curentDate) 
                {
                    days += `<div id=${0} onclick="select(this.id)" class="today busy">${M[i][j]}</div>`;
                    document.querySelector('.days').innerHTML = days;
                    continue;
                }                
                if(j>=5)
                {
                    days += `<div id=${0} onclick="select(this.id)" class="busy">${M[i][j]}</div>`;
                    document.querySelector('.days').innerHTML = days;
                    continue;
                }
                if(M[i][j]<curentDate)
                    days += `<div id=${0} onclick="select(this.id)" class="busy">${M[i][j]}</div>`;
                else
                    days += `<div id=${M[i][j]} onclick="select(this.id)" >${M[i][j]}</div>`;
                document.querySelector('.days').innerHTML = days;
            }
            if(one==3)
            {
                days += `<div id=${0} onclick="select(this.id)" class="next-date noselect">${M[i][j]}</div>`;
                document.querySelector('.days').innerHTML = days;
            }
        }
    }

}
function calendar()
{
    let dYear = date.getFullYear();
    let dDate = date.getDate();
    let dDay = date.getDay();
    let dMonth = date.getMonth();

    document.querySelector('.mounth i1').style.opacity = "1";
    document.querySelector('.date h1').innerHTML = months[dMonth] + " " + dYear;
    document.querySelector('.date p').innerHTML = Weekdays[curentDay] + " " + curentDate + " " + months[curentMonth] + " " + curentYear;

    if (dYear % 4 == 0)
        monthsDates[1] = 29;

    date.setDate(1);
    let previousDates
    if(date.getDay()==0)
        previousDates = date.getDay()-1+7;
    else
        previousDates = date.getDay()-1;
    let prevMonth;
    if (date.getMonth() == 0)
        prevMonth = 11;
    else
        prevMonth = dMonth-1
    let days = "";
    let x=0;
    let y=0;
    for (let i = monthsDates[prevMonth] - previousDates; i < monthsDates[prevMonth]; i++) 
    {
        M[x][y]=i+1;
        y++;
        if(y==7)
        {
            x++;
            y=0;
        }
    }
    for (let i = 1; i <= monthsDates[dMonth]; i++) 
    {
        M[x][y]=i;
        y++;
        if(y==7)
        {
            x++;
            y=0;
        }
    }
    let nextDates =1;
    for(let j=y;j<7;j++)
    {
        M[x][j]=nextDates;
        nextDates++;
    }
    x++;
    for (let i=x; i<6; i++)
    {
        for(let j=0;j<7;j++)
        {
            M[i][j]=nextDates;
            nextDates++;
        }
    }
    let one=1;
    for(let i=0; i<6; i++)
    {
        for(let j=0; j<7; j++) 
        {
            if(M[i][j]==1)
            {
                one++;
            }   
            if(one==1)
            {
                days += `<div id=${0} onclick="select(this.id)" class="prev-date">${M[i][j]}</div>`;
                document.querySelector('.days').innerHTML = days;
            }
            if(one==2)
            {
                if(j>=5)
                {
                    days += `<div id=${0} onclick="select(this.id)" class="busy">${M[i][j]}</div>`;
                    document.querySelector('.days').innerHTML = days;
                    continue
                }
                days += `<div id=${M[i][j]} onclick="select(this.id)">${M[i][j]}</div>`;
                document.querySelector('.days').innerHTML = days;
            }
            if(one==3)
            {
                days += `<div id=${0} onclick="select(this.id)" class="next-date">${M[i][j]}</div>`;
                document.querySelector('.days').innerHTML = days;
            }
        }
    }
}
function myFunction() 
{
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
function select(zi)
{
    if(zi==0)
        prev=zi;
    else
    {
        prev=zi;
        date.setDate(zi);
    }
        
}
function formular()
{
    if(prev==0)
    {
        return 0;
    }
    else
    {
        sessionStorage.setItem('programmed-date',date.getDate()+" "+months[date.getMonth()]+" "+date.getFullYear());
        sessionStorage.setItem('date1',date.getDate());
        sessionStorage.setItem('month1',date.getMonth());
        sessionStorage.setItem('year1',date.getFullYear());
        sessionStorage.setItem('programmed-day',date.getDay());
        location.href='formular';
    }
}
const av=document.querySelector('.days');
av.addEventListener("click",formular);


function verificareDate()
{
    const ziua= new Date();
    for(let i=1;i<=monthsDates[date.getMonth()];i++)
    {
        ziua.setDate(i);
        ziua.setMonth(date.getMonth());
        ziua.setYear(date.getFullYear());
        verificarePHP(ziua.getDate(),ziua.getMonth(),ziua.getFullYear(),ziua.getDay());
    }
}

function programat()
{
    if(localStorage.getItem('month')==date.getMonth() && localStorage.getItem('year')==date.getFullYear())
    {
        if(localStorage.getItem('status')!=null)
        {
            document.getElementById(localStorage.getItem("date")).style.backgroundColor="#bf2a37";
            document.getElementById(localStorage.getItem("date")).id = 0;
            localStorage.setItem('status',"plm");
        }
        
    }
}

function verificarePHP(dataS,luna,anul,ziua)
{
    var datele = new FormData();
    datele.append("dataSelectata",dataS+" "+months[luna]+" "+anul);
    datele.append("ziuaSapt",ziua)
    var xhr = new XMLHttpRequest();
    xhr.open("POST","Days.php");
    xhr.onload = function(){
        if(this.response=="true")
        {
            document.getElementById(dataS).style.backgroundColor="#bf2a37";
            document.getElementById(dataS).id = 0;
        }
    }
    xhr.send(datele);
}