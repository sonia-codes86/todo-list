
const add=document.getElementById("add");
const taskInput=document.getElementById("taskInput");
const taskList=document.getElementById("taskList");
add.addEventListener("click",()=>{
    if (taskInput.value.trim() !==""){
        const li=document.createElement("li");
        li.textContent=taskInput.value;
        taskList.appendChild(li);
        taskInput.value="";
        const deleteBtn=document.createElement("button");
        deleteBtn.textContent="Delete";
        deleteBtn.addEventListener("click",()=>{
          li.remove();
        });
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value="";
    }
});
taskInput.addEventListener("keydown",(event)=>{
    if (event.key ==="Enter"){
        add.click();
    }
});
