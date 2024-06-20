import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Task from '../models/Task';
import User from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private currentPageSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  currentPage$: Observable<string> = this.currentPageSubject.asObservable();

  private taskListSubject: BehaviorSubject<Task[]> = new BehaviorSubject<
    Task[]
  >([]);
  taskListSubject$: Observable<Task[]> = this.taskListSubject.asObservable();

  private userListSubject: BehaviorSubject<User[]> = new BehaviorSubject<
    User[]
  >([]);
  userListSubject$: Observable<User[]> = this.userListSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadTasks();
    this.loadUsers();
  }

  setCurrentPage(newPage: string): void {
    this.currentPageSubject.next(newPage);
  }

  setTaskList(newTaskList: Task[]): void {
    this.taskListSubject.next(newTaskList);
  }

  setUserList(newUserList: User[]): void {
    this.userListSubject.next(newUserList);
  }

  private loadUsers() {
    this.http.get<User[]>('assets/users.json').subscribe(
      (data) => {
        this.userListSubject.next(data);
      },
      (error) => {
        console.error('Failed to load users', error);
      }
    );
  }

  private loadTasks() {
    this.http.get<Task[]>('assets/tasks.json').subscribe(
      (data) => {
        this.taskListSubject.next(data);
      },
      (error) => {
        console.error('Failed to load tasks', error);
      }
    );
  }
}