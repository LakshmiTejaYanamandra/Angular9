import { Component } from '@angular/core';
import { SlimLoadingBarService, SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NavigationCancel, Event, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular8';
  constructor(private loadingBar:SlimLoadingBarService, private router:Router){
    this.router.events.subscribe((event :Event) =>{
      this.navigationInterceptor(event);
    })
  }
  navigationInterceptor(event : Event) : void{
    if(event instanceof NavigationStart){
      this.loadingBar.start();
    }
    if(event instanceof NavigationEnd){
      this.loadingBar.complete();
    }
    if(event instanceof NavigationCancel){
      this.loadingBar.stop();
    }
    if(event instanceof NavigationError){
      this.loadingBar.stop();
    }
  }
}
