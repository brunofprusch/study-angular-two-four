import { Component } from '@angular/core';

@Component({
  selector: 'app-study',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'My first project with Angular 2 - 4';

  lifecycleValue: number = 5;
  
  destryLifecycle: boolean = false;

  changeLifecycleValue() {
    this.lifecycleValue++;
  }

  destroyLifecycle() {
    this.destryLifecycle = true;
  }

}
