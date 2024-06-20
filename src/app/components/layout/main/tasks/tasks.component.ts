import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { WelcomeBannerComponent } from '../welcome-banner/welcome-banner.component';
import { ProgressTrackerComponent } from '../progress-tracker/progress-tracker.component';
import { DataService } from '../../../../services/data.service';
import Task from '../../../../models/Task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, WelcomeBannerComponent, ProgressTrackerComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [DatePipe],
})
export class TasksComponent implements OnInit {
  title: string = "Today's Tasks";
  formattedDate: string = '';
  activePage: string = '';

  taskList: Task[] = [];
  taskListToShow: Task[] = [];
  progressPercentage: number = 0;

  constructor(
    private router: Router,
    private datePipe: DatePipe,
    private commonServices: DataService
  ) {}

  @Output() newEvent = new EventEmitter<number>();
  ngOnInit() {
    this.commonServices.currentPage$.subscribe(
      (data) => (this.activePage = data)
    );
    this.commonServices.taskListSubject$.subscribe(
      (data) => (this.taskList = data)
    );
    this.formattedDate = this.datePipe.transform(new Date(), 'EEEE, d MMMM y')!;
    this.updateProgressPercentage();
    this.updateList();
  }

  updateList() {
    switch (this.activePage) {
      case 'dashboard':
        this.taskListToShow = this.taskList;
        break;
      case 'active':
        this.title = "Today's active tasks";
        this.taskListToShow = this.taskList.filter((task) => task.status == 0);
        break;
      case 'completed':
        this.title = "Today's completed tasks";
        this.taskListToShow = this.taskList.filter((task) => task.status == 1);
        break;
      default:
        this.title = 'Tasks';
        break;
    }
  }

  getSrcLink(task: any) {
    return task.status === 1
      ? 'assets/task-check-list-checked.svg'
      : 'assets/task-check-list-unchecked.svg';
  }

  selectTask(task: any) {
    task.status = task.status === 1 ? 0 : 1;
    this.updateProgressPercentage();
  }

  updateProgressPercentage() {
    const activeTasksCount = this.taskList.filter(
      (task) => task.status === 1
    ).length;
    this.progressPercentage = Math.floor(
      (activeTasksCount / this.taskList.length) * 100
    );
  }

  isHidden = false;
  toggleDescription(event: Event) {
    let element = (event.target as HTMLDivElement)
      .getElementsByClassName('task-description')[0]
      .classList.toggle('hide');
    this.isHidden = !this.isHidden;
  }
}
