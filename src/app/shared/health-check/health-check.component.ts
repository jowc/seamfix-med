import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HealthCheckResultComponent } from '../health-check-result/health-check-result.component';

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.scss']
})
export class HealthCheckComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(HealthCheckResultComponent)
  }

}
