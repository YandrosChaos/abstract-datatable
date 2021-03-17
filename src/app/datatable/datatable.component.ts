import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
})
export class DatatableComponent implements OnInit {
  @Input() data: any[];
  @Input() columns: string[];
  //@Input() buttonType: string
  //@Input() type: string
  //@Input() search?: boolean = false
  //@Input() paginationMax?: number = 12

  constructor() {}

  ngOnInit(): void {}

  public getItemByKeyName(columnIndex: number, key: string): string {
    let currentObject = this.data[columnIndex];
    return currentObject[key] || '-';
  }
}
