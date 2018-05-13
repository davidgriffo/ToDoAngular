import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
 todos : ToDo[] = [
  {serialNumber: 0,task: 'Run',status: false,duedate: '13-05-2018'},
  {serialNumber: 1,task: 'Walk',status: false,duedate: '14-05-2018'}
 ];
 task: string;
 duedate: string;

 
 title = 'app';

 addToDo(){
    let nextId = this.todos.length;
    this.todos.push({serialNumber: nextId,task: this.task,status: false,duedate: this.duedate});
 }

 updateToDo(index: number){
    this.todos[index].status = !this.todos[index].status;
 }
}

class ToDo {
  serialNumber: number;
  task: string;
  status: boolean;
  duedate: string;

  constructor(serialNumber:number, task: string,status:boolean, duedate:string) {}
}
