import {Component, OnInit} from '@angular/core';
import {Task} from "../../Task";
import {TASKS} from "../../mock-tasks";
import {TaskService} from "../../services/task.service";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  onDelete(task: Task): void {
    if (task.id != null) {
      this.taskService.deleteTask(task.id).subscribe(() => this.tasks = this.tasks.filter(t => task.id !== t.id));
    }
  }

  onToggle(task: Task) {
    let check = false
    task.reminder = !task.reminder
    this.taskService.putTask(task).subscribe(() => task.reminder = !task.reminder);
    task.reminder = !task.reminder
  }


  addTask(task: Task) {
    this.taskService.postTask(task).subscribe((t) => this.tasks.push(t));
  }
}
