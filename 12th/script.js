var secretCode='ashish';
var data=document.querySelector('body .para');
console.log(data);

var array=[];

window.addEventListener('keydown',e=>{
    array.push(e.key);
     array.splice(-7,array.length-secretCode.length);
    var p=array.join('');
    data.innerHTML=p;
    if(p==secretCode){
        cornify_add();
    }
})