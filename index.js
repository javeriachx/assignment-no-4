

 const task1 = document.getElementById("task1");
 const task2 = document.getElementById("task2");
 const task3 = document.getElementById("task3");

 function highlightTask(task) {
  
    task1.style.backgroundColor = "white";
    task2.style.backgroundColor = "white"; 
    task3.style.backgroundColor = "white"; 
   

    task.style.backgroundColor="red";
 }
 task1.onclick = function() {
    highlightTask(task1);
  };
  
  task2.onclick = function() {
    highlightTask(task2);
  };
  
  task3.onclick = function() {
    highlightTask(task3);
  };
  