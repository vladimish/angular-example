import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../../Task";
import {faTimes} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = {id: 0, text: "placeholder", day: "placeholder", reminder: false};
  @Output() deleteClick: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() toggleClick: EventEmitter<Task> = new EventEmitter<Task>();
  faTimes = faTimes;

  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete(): void {
    this.deleteClick.emit(this.task)
  }

  onReminderToggle(): void {
    // this.task.reminder = !this.task.reminder;
    this.toggleClick.emit(this.task)
  }
}
