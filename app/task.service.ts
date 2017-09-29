import { Injectable } from '@angular/core';
import { Task } from './task';
import { tasks } from './taskList';

@Injectable()
export class TaskService{
    curTask:Task[] = tasks;
    
    getData(): Task[] {
        return this.curTask;
    }

    addData(title, desc, deadline) {
        if(title==null || title==undefined || title.trim()=="")
            return;
        if(desc==null || desc==undefined || desc.trim()=="")
            return;
        if(deadline==null || deadline==undefined || deadline.trim()=="" )
            return;
        deadline = deadline.toString();

        this.curTask.push({title, desc, deadline});
    }

    destroyData(currentTask: Task) {
		let index = this.curTask.indexOf(currentTask);
        this.curTask.splice(index,1);
    }

    moveUpData(currentTask: Task) {
        let index = this.curTask.indexOf(currentTask);
        if(index < 1) return;

        this.curTask[index-1] = [this.curTask[index], this.curTask[index] = this.curTask[index-1]][0];
    }

    moveDownData(currentTask: Task) {
        let index = this.curTask.indexOf(currentTask);
        if(index > this.curTask.length-2) return;

        this.curTask[index+1] = [this.curTask[index], this.curTask[index] = this.curTask[index+1]][0];
    }
}