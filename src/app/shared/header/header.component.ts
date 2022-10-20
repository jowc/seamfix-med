import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HealthCheckResultComponent } from '../health-check-result/health-check-result.component';
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

  openHealthDialog() {
    const dialogRef = this.dialog.open(HealthCheckComponent)
    return dialogRef
  }

}
