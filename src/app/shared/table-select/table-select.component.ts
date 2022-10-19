import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-select',
  templateUrl: './table-select.component.html',
  styleUrls: ['./table-select.component.scss']
})
export class TableSelectComponent implements OnInit {

  @Input() title!: string
  @Input() list!: string[]
  showSelect: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
