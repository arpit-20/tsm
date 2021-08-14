import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  check: boolean = true;
  title = 'Shockmechanica';
  constructor(private router: Router){
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if(e.url == "/"){
    this.check = true;
        }
        else {
          this.check = false;
        }
      }
    });
  }
}
