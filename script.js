function addtask(){
    var taskinput=document.getElementById("taskinput");
    var tasklist=document.getElementById("tasklist");
    if(taskinput.value.trim()==="")
    {
        alert("Please enter your task");
        return;
    }
    var li=document.createElement("li");
    li.className="taskitems";
    li.innerHTML = `
        <span>${taskinput.value}</span>
        <button  onclick="updateTask(this)">Edit</button>
        <button id="surya" onclick="removeTask(this)">Delete</button>
        
    `;
    tasklist.appendChild(li);
    taskinput.value="";
}
function updateTask(button){
    var newTask=prompt("Enter your new Task");
    if(newTask!=="")
    {
        button.parentElement.querySelector("span").textContent=newTask;
    }
}
function removeTask(button){
    var confirmation=confirm("Are you sure to delete this task");
    if(confirmation){
        button.parentElement.remove();
    }
}