import { Component, HostListener, OnInit ,ChangeDetectorRef} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClusterApp';
  selecteditem:any;
  mobileQuery: MediaQueryList;
  visibleSidebar1:boolean=true;
  height;
  width;
  instruction:boolean;
  items: MenuItem[];
  username:String=sessionStorage.getItem('username');
  constructor(public router:Router) {
   }

  ngOnInit(): void {
    
    this.height=window.innerHeight;
    this.width=window.innerWidth;
    this.items = [{
      label: 'Instructions',
      routerLink: '/introduction'
    },
    {
      label: 'Cluster Tables',
      routerLink: 'seat'
    },
    {
      label: 'Admin',
      routerLink: 'payment'
    },
    {
      label: 'Confirmation',
      routerLink: 'confirmation'
    }
    ];
  }
  @HostListener('window:resize', ['$event']) onResize(event) {
  this.height = window.innerHeight;
  this.width=window.innerWidth;
}
slidemenu(){
  console.log("inside slide");
}
onchange(){
  console.log('change');
}
activeMenu(items){
  console.log(this.selecteditem);
}

}
