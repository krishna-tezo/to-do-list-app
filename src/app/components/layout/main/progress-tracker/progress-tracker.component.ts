import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-progress-tracker',
  standalone: true,
  imports: [],
  templateUrl: './progress-tracker.component.html',
  styleUrl: './progress-tracker.component.css'
})
export class ProgressTrackerComponent {
  @Input() progressPercentage!:number; 
  constructor(){}
}