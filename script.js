const add=document.getElementById("add");
const taskinput=document.getElementById("taskinput");
const taskList =document.getElementById("taskList");

let  tasks=JSON.parse(localStorage.getItem("tasks")) || [];

function savedTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function renderTasks(){
    taskList.innerHTML="";
    for(let i=0;i<tasks.length;i++){
        const li=document.createElement("li");

        const span=document.createElement("span");
        span.textContent=tasks[i].text;

        if (tasks[i].done){
            span.classList.add("done");
        }

        span.addEventListener("click",()=>{
            tasks[i].done= !tasks[i].done;
            savedTasks();
            renderTasks();
        })

        const deleteBtn=document.createElement("button");
        deleteBtn.textContent="Delete";
        deleteBtn.addEventListener("click",()=>{
            tasks.splice(i,1);
            savedTasks();
            renderTasks();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
}

add.addEventListener("click",()=>{
    if (taskinput.value.trim() !==""){
        tasks.push({text:taskinput.value,done:false});
        savedTasks();
        renderTasks();
        taskinput.value=""
        console.log(tasks);
    }
});

taskinput.addEventListener("keydown",(event)=>{
    if (event.key ==="Enter"){
        add.click();
    }
});

renderTasks();