import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'ESports Tour'
  token = localStorage.getItem('token');
  u_type = localStorage.getItem('u_type');
  
}
