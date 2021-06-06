import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-clustertab',
  templateUrl: './clustertab.component.html',
  styleUrls: ['./clustertab.component.css']
})
export class ClustertabComponent implements OnInit {

  items: MenuItem[];
  constructor() { }

  ngOnInit(): void {

    this.items = [{
      label: 'Personal',
      routerLink: 'personal'
    },
    {
      label: 'Seat',
      routerLink: 'seat'
    },
    {
      label: 'Payment',
      routerLink: 'payment'
    },
    {
      label: 'Confirmation',
      routerLink: 'confirmation'
    }
    ];
  }
  



}
