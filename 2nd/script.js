const secondHand=document.querySelector('.second-hand');
const minuteHand=document.querySelector(".min-hand");
const hourHand=document.querySelector(".hour-hand")
function setDate(){
    const now=new Date();
    // console.log(now);
    const seconds=now.getSeconds();
    const min=now.getMinutes();
    const hour=now.getHours()
    const secondDegree= ((seconds/60)*360)+90;
    const minuteDegree=((min/60)*360)+90;
    const hourDegree=((hour/12)*360)+90;
    secondHand.style.transform=`rotate(${secondDegree}deg)`;
    minuteHand.style.transform=`rotate(${minuteDegree}deg)`;
    hourHand.style.transform=`rotate(${hourDegree}deg)`;

}
setInterval(setDate,1000);