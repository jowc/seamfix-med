import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HealthCheckComponent } from '../health-check/health-check.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(HealthCheckComponent)
    return dialogRef
  }

}
