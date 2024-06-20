import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { SidepanelComponent } from '../../shared/sidepanel/sidepanel.component';
import { TasksComponent } from './tasks/tasks.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidepanelComponent, TasksComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor(private router:Router){}
  @HostListener('window:beforeunload')
  goToPage() {
    this.router.navigate(['/signup']);
  }
}
