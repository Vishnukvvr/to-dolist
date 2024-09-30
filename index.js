const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("tasks");


function myFunction(){
    if(inputbox.value===''){
        alert("plzz enter the task")
    }
    else{
        let li= document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML='×';
        li.appendChild(span);
    }
    inputbox.value='';
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);