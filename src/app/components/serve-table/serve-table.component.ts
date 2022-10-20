import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateServerComponent } from 'src/app/shared/create-server/create-server.component';

@Component({
  selector: 'app-serve-table',
  templateUrl: './serve-table.component.html',
  styleUrls: ['./serve-table.component.scss']
})
export class ServeTableComponent implements OnInit {

  options: string[] = ['All Application', 'All Application 1', 'All Application 2']
  options2: string[] = ['All server', 'server 1', 'server 2']
  options3: string[] = ['All status', 'Healthy', 'Critical']

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createServer() {
    this.dialog.open(CreateServerComponent, { width: '600px' })
  }

}
