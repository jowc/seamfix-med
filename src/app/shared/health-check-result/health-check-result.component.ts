import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HealthCheckComponent } from '../health-check/health-check.component';

@Component({
  selector: 'app-health-check-result',
  templateUrl: './health-check-result.component.html',
  styleUrls: ['./health-check-result.component.scss']
})
export class HealthCheckResultComponent implements OnInit {

  constructor(public dialog: MatDialogRef<HealthCheckComponent>) { }

  ngOnInit(): void {
  }

  closeAll() {
    this.dialog.close()
  }

}
