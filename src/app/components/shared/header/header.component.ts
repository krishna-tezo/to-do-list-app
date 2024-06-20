import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { ParseUrlPipe } from '../../../pipes/parse-url.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ParseUrlPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  activePage: string = '';
  constructor(private dataService:DataService, private router:Router) {}

  ngOnInit() {
    this.dataService.currentPage$.subscribe(data=> this.activePage=data);
  }

  signOut(){
    this.router.navigate(['/']);
  }
}
