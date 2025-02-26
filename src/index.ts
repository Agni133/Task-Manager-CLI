import readlineSync from "readline-sync";
import { TaskManager } from "./taskManager";

const taskmanager = new TaskManager();

while(true){
    console.log("\n1. Add Task \n2. List Tasks \n3. Exit");
   const choice = readlineSync.question("Choose an option");
  
    if(choice=="1"){
      const title = readlineSync.question("Enter ur title:")
      taskmanager.addTask(title)
    }else if(choice == "2"){ 
        taskmanager.listTasks();
    }else if(choice== "3"){
     const taskId = parseInt(readlineSync.question("Enter ur task Id:"))
        taskmanager.markTaskCompleted(taskId);
    }else if(choice=="4"){ 
      const taskId = parseInt(readlineSync.question("Enter a task u want to delete"))
        taskmanager.deleteTask(taskId);
    }else if (choice =="5"){
       console.log("exiting....");
       break;
    }else{
      console.log("invalid option! try again");

    }
}