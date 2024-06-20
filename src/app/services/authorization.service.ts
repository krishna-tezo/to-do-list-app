import { Injectable } from '@angular/core';
import User from '../models/User';
import { DataService } from './data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  userList: User[] = [];
  constructor(private dataService: DataService) {
    dataService.userListSubject$.subscribe((data) => (this.userList = data));    
  }

  authenticate(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      const authenticatedUser = this.userList.find(
        (user) => user.userName === username && user.password === password
      );

      if (authenticatedUser) {
        observer.next(true); 
      } else {
        observer.next(false);
      }
      observer.complete();
    });
  }
}
