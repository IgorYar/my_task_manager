import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task';
       
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [TaskService]
})
export class AppComponent implements OnInit {
  tasks: Task[];
  selectedTask: any;
  
  constructor(private taskService: TaskService) {}

  addTask(title, desc, deadline) {
    this.taskService.addData(title, desc, deadline);
  }

  destroyTask(selected: Task) {
		this.taskService.destroyData(selected);
  }

  moveUpTask(selected: Task) {
		this.taskService.moveUpData(selected);
  }

  moveDownTask(selected: Task) {
		this.taskService.moveDownData(selected);
  }

  ngOnInit() {
    this.tasks = this.taskService.getData();
  }

  onSelect(selected: Task) {
    this.selectedTask = selected;
  }
}