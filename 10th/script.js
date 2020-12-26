const checkboxes=document.querySelectorAll(".inbox input[type='checkbox']");
var p=Array.from(document.querySelectorAll('p'));
let lastChecked;
function handlecheck(e){
    let inBetween =false;
    //  console.log(e.keyCode);
    if(e.shiftKey && this.checked){
        console.log(e);
        checkboxes.forEach(checkbox=>{
            console.log(checkbox);
            if(checkbox===this || checkbox===lastChecked){
                inBetween=  !inBetween;
            }
            if(inBetween){
                checkbox.checked=true;
            }
        });
    }
   
    lastChecked=this;
    for(var i=0;i<checkboxes.length;i++){
        if(checkboxes[i].checked){
            p[i].style.textDecoration='line-through'
        }
        else{
            p[i].style.textDecoration='none'
        }
    }
}

checkboxes.forEach(checkbox=>checkbox.addEventListener('click',handlecheck));
