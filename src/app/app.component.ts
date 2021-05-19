import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   trigger : any; 
   hideTimeline = false; 

  constructor(){
    this.trigger = 'elem1';
  }
  showComponent(index: number){
    if(index === 1){
      this.trigger = 'elem1';
      this.hideTimeline = false; 
    }else if(index === 2){
      this.trigger = 'elem2';
      this.hideTimeline = true; 
    }else if(index === 3){
      this.trigger = 'elem3';
      this.hideTimeline = true; 
    }else if(index === 4){
      this.trigger = 'elem4';
      this.hideTimeline = true; 
    }else if(index === 5){
      this.trigger = 'elem5';
      this.hideTimeline = true; 
    }else if(index === 6){
      this.trigger = 'elem6';
      this.hideTimeline = true; 
    }
  }
}
