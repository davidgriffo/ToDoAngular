import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
 todos : ToDo[] = [
  {serialNumber: 1,task: 'Run',status: false,duedate: '13-05-2018'},
  {serialNumber: 2,task: 'Walk',status: false,duedate: '14-05-2018'}
 ];

 serialNumber: number;
 task: string;
 status: boolean;
 duedate: string;
 
 title = 'app';
}

class ToDo {
  serialNumber: number;
  task: string;
  status: boolean;
  duedate: string;

  constructor(serialNumber:number, task: string,status:boolean, duedate:string) {}
}
