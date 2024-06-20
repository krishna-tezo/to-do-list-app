import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidepanelComponent } from './components/shared/sidepanel/sidepanel.component';
import { AuthorizationComponent } from './components/layout/public/authorization/authorization.component';
import { MainComponent } from './components/layout/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthorizationComponent,MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-list-app';
}
