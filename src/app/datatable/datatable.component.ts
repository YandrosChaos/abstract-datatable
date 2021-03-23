import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
})
export class DatatableComponent implements OnInit {
  @Input() data: any[];
  @Input() columns: { name: string; description: string }[];
  //@Input() buttonType: string
  //@Input() type: string
  //@Input() search?: boolean = false
  //@Input() paginationMax?: number = 12

  constructor() {}

  ngOnInit(): void {}

  public getItemByKeyName(objectIndex: number, keyIndex: number): string {
    let currentObject = this.data[objectIndex];
    let key = this.columns[keyIndex]?.name;

    if(this.columns.find(x=> x.name===key)){
      return currentObject[key] || '-';
    } else {
      return;
    }
  }
}