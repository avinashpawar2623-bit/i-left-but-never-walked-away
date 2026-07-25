// ================================
// LOVE STORY WEBSITE SCRIPT
// ================================

// Create Animated Stars

const totalStars =
window.innerWidth < 768 ? 70 : 170;

for(let i=0;i<totalStars;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

const size=Math.random()*3+1;

star.style.width=size+"px";

star.style.height=size+"px";

star.style.animationDuration=
(Math.random()*4+2)+"s";

star.style.animationDelay=
(Math.random()*5)+"s";

document.body.appendChild(star);

}

// Copy Chapter

function copyHex(){

const textarea=document.getElementById("hexCode");

textarea.select();

textarea.setSelectionRange(0,999999);

navigator.clipboard.writeText(textarea.value);

showMessage("❤️ Chapter copied successfully!");

}

// Copy Message

function showMessage(text){

let msg=document.getElementById("copyMessage");

if(!msg){

msg=document.createElement("div");

msg.id="copyMessage";

msg.className="copyMessage";

document.querySelector(".container").appendChild(msg);

}

msg.innerHTML=text;

msg.style.display="block";

setTimeout(()=>{

msg.style.display="none";

},2000);

}

// Scroll to Top

window.onload=()=>{

window.scrollTo(0,0);

};

// Page Fade

document.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",function(e){

if(this.getAttribute("href")){

e.preventDefault();

document.body.style.opacity="0";

setTimeout(()=>{

window.location=this.href;

},250);

}

});

});

document.body.style.transition="opacity .25s ease";

document.body.style.opacity="1";