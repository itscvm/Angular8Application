import { Component, HostListener, OnInit ,ChangeDetectorRef} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selecteditem:any;
  mobileQuery: MediaQueryList;
  visibleSidebar1:boolean=true;
  height;
  width;
  instruction:boolean=true;
  items: MenuItem[];
  username:String=sessionStorage.getItem('username');
  clusterTables:boolean=false;
  admin:boolean=false;
  constructor(public router:Router) {
   }

  ngOnInit(): void {
    
    this.height=window.innerHeight;
    this.width=window.innerWidth;
    this.items = [{
      label: 'Instructions',
      tabindex: '1',
      command:(event)=>this.getInstruction()
    },
    {
      label: 'Cluster Tables',
      tabindex: '2',
      command:(event)=>this.ClusterTable()
    },
    {
      label: 'Admin',
      tabindex: '3',
      command:(event)=>this.Admin()
    }
    ];
  }
  @HostListener('window:resize', ['$event']) onResize(event) {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
  }
  slidemenu() {
    console.log("inside slide");
  }
  onchange() {
    console.log('change');
  }
  activeMenu(items) {
    console.log(this.selecteditem);
  }
  getInstruction() {
    this.instruction = true;
    this.clusterTables=false;
    this.admin=false;
  }
  ClusterTable(){
    this.clusterTables=true;
    this.admin=false;
    this.instruction = false;
  }
  Admin(){
    this.admin=true;
    this.clusterTables=false;
    this.instruction = false;
  }
}
