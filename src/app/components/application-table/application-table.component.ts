import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-table',
  templateUrl: './application-table.component.html',
  styleUrls: ['./application-table.component.scss']
})
export class ApplicationTableComponent implements OnInit {

  options: string[] = ['All Application', 'All Application 1', 'All Application 2']
  options2: string[] = ['All server', 'server 1', 'server 2']
  options3: string[] = ['All status', 'Healthy', 'Critical']

  constructor() { }

  ngOnInit(): void {
  }

}
