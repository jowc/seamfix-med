import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.scss']
})
export class HomeTableComponent implements OnInit {

  options: string[] = ['All Application', 'All Application 1', 'All Application 2']
  options2: string[] = ['All server', 'server 1', 'server 2']
  options3: string[] = ['All status', 'Healthy', 'Critical']


  constructor() { }

  ngOnInit(): void {
  }

}
