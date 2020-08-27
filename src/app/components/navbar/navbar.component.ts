import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logoLink = 'https://www.creativefabrica.com/wp-content/uploads/2018/11/Letter-M-logo-by-Mansel-Brist.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
