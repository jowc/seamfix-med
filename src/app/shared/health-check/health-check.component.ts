import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HeaderComponent } from '../header/header.component';
import { HealthCheckResultComponent } from '../health-check-result/health-check-result.component';

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.scss']
})
export class HealthCheckComponent implements OnInit {

  constructor(public dialog: MatDialog, public _dialod: MatDialogRef<HeaderComponent>) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(HealthCheckResultComponent)
    this._dialod.close()
  }

}
