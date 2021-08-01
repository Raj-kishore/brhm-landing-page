import { Component } from '@angular/core';
import * as $ from 'jquery';

declare var window;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  trigger: any;
  hideTimeline = false;
  navOpen = false;
  closeDetails = false;
  constructor() {
    this.trigger = 'elem1';
  }

  ngAfterViewInit() {

  }
  toggleNav() {

    if(window.innerWidth <= 1030) {
 
      //code to execute
      if (this.navOpen === true) {
        this.navOpen = false;
        $('.blog-wrapper').animate({
          left: "0%"
        }, 200);
        $(".mb-wrapper").animate({
          "left":"3%"
        });
    
      } else {
        $(".mb-wrapper").animate({
          "left":"0%"
        });
    
      
        this.navOpen = true;
  
        $('.blog-wrapper').animate({
          left: "50%"
        }, 200);
      }
    }else{
      if (this.navOpen === true) {
        this.navOpen = false;
  
        $('.blog-wrapper').animate({
          left: "0%"
        }, 200);
      } else {
        this.navOpen = true;
        $('.blog-wrapper').animate({
          left: "15%"
        }, 200);
      }

    }


 
  }
  showComponent(index: number) {

    if (index === 1) {
      this.trigger = 'elem1';
      this.hideTimeline = false;
    } else if (index === 2) {
      this.trigger = 'elem2';
      this.hideTimeline = true;
    } else if (index === 3) {
      this.trigger = 'elem3';
      this.hideTimeline = true;
    } else if (index === 4) {
      this.trigger = 'elem4';
      this.hideTimeline = true;
    } else if (index === 5) {
      this.trigger = 'elem5';
      this.hideTimeline = true;
    } else if (index === 6) {
      this.trigger = 'elem6';
      this.hideTimeline = true;
    }
  }
}
