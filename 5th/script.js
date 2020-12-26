const p=document.querySelectorAll(".panels div");

function hello(){
 this.classList.toggle('open');
 this.classList.toggle('open-active')
}


p.forEach(q=>q.addEventListener("click",hello));
