import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath=''
  pages=[
    {
      title:'First page with tabs',
      url:'/menu/first'
    },
    {
      title:'Second page with Blank',
      url:'/menu/second'
    }
  ]

  constructor(private router:Router) {
    this.router.events.subscribe((event:RouterEvent)=>{
      if(event && event.url){
        this.selectedPath=event.url;
      }
    });
   }

  ngOnInit() {
  }

}
