import { ViewChild } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Blog1Component} from '../blog1/blog1.component';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  value = '';

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {

   



  }
  ngAfterViewInit() {

    // setTimeout(()=>{
      $(".cards-wrapper").animate({
        "top":0,
        "opacity":1
      });
      $(".story-wrapper").animate({
        "top":0,
        "opacity":1
      });
      $(".main-loader").fadeOut();
    // },1000);
  }
  viewArticle(){
    $(".prvw-img").fadeOut(1);
    $(".header-wrapper").fadeOut(200);
    $("#c1").animate({
      width:"88%",
      height:"78%",
      top:"2%",
      left:"2%",
      'padding-top' : "4%",
      'padding-right' : "4%",
      'padding-bottom' : "4%",
      'padding-left' : "4%",
    }, 200, "swing");
    
  }
  viewArticle1(){

    //skip as of now

  }
  viewArticle1mb(){
    $(".cards-wrapper-mb").fadeOut(1);
    $(".mb-wrapper").css({
      "overflow-y":"hidden"
    });
    $(".story-wrapper-mb").fadeIn();
  }


}
