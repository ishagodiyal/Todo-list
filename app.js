const form=document.querySelector(".todo");
const input=form.querySelector('.input');
const task=document.getElementById("task");

// When user submits the form, add the task
form.addEventListener("submit",function(e) {
    e.preventDefault();              // e.preventDefault() = stops page reload
    const taskText=input.value.trim();
    if (taskText==""){
        alert("pls enter a task");
        return;   //Then return; → stops the rest of the function from running
    }

 // Create the task item and buttons
  const li=document.createElement("li");
      li.innerText=taskText;   //This adds the user’s task text inside the <li>

 //Create the ✔️ Complete Button
     const CompleteBtn=document.createElement("button");
     CompleteBtn.innerHTML='<i class="fa-solid fa-check"></i>';
     CompleteBtn.classList.add("complete");

    //Create the 🗑️ Delete Button
    const deleteBtn=document.createElement("button");
     deleteBtn.innerHTML='<i class="fa-solid fa-trash"></i>';
    deleteBtn.classList.add("delete");
    //Add buttons inside the <li> item
    li.appendChild(CompleteBtn);
    li.appendChild(deleteBtn);
    task.appendChild(li);
    input.value="";  // Clear the input box

   
   CompleteBtn.addEventListener("click", function () {
  li.classList.toggle("done");
});

deleteBtn.addEventListener("click", function () {
  task.removeChild(li);
});
   } );
