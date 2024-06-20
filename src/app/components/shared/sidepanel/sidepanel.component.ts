import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-sidepanel',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css']
})
export class SidepanelComponent {
  isMenuOpen: boolean = false;
  selectedMenu: string = 'Dashboard';
  activePage:string = 'dashboard';

  constructor(private dataService:DataService, private router:Router){}
  onInit(){
    this.dataService.setCurrentPage("dashboard");
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  selectMenu(menu: string) {
    this.selectedMenu = menu;
    this.isMenuOpen = false;
  }

  setActivePage(newActivePage:string){
    this.dataService.setCurrentPage(newActivePage);
  }
}