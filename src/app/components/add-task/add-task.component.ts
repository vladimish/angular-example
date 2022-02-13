import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from "../../Task";
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  showAddSubscription: Subscription = new Subscription();

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>()

  constructor(private uiService: UiService) {
    this.showAddSubscription = uiService.onAddToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = ''
    this.day = ''
    this.reminder = false
  }
}
