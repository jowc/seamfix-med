import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateApplicationComponent } from 'src/app/shared/create-application/create-application.component';

@Component({
  selector: 'app-application-table',
  templateUrl: './application-table.component.html',
  styleUrls: ['./application-table.component.scss']
})
export class ApplicationTableComponent implements OnInit {

  options: string[] = ['Active', 'Inactive', 'All']

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addApp() {
    this.dialog.open(CreateApplicationComponent)
  }

}
