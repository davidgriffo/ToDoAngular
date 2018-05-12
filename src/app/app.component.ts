import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
 todos : ToDo[] = [
  new ToDo(1,'Run',false,'13-05-2018'),
  new ToDo(2,'Work',false,'14-05-2018'),
  new ToDo(3, 'Pay Bills',false,'16-05-2018')
 ];
 
 title = 'app';
}

class ToDo {
  serialNumber: number;
  task: string;
  status: boolean;
  duedate: string;

  constructor(serialNumber:number, task: string,status:boolean, duedate:string) {}
}
