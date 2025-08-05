function addtask(){
    let taskinput = document.querySelector(".taskinput");
    let taskvalue=taskinput.value.trim();
    let li =document.createElement("li");
    li.textContent = taskvalue;
    li.onclick = function(){
        this.remove();
    };
   
    document.querySelector(".list").appendChild(li);
    taskinput.value="";

}