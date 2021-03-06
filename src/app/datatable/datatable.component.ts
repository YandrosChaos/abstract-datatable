import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Column {
  name: string;
  displayName: string;
}

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
})
export class DatatableComponent implements OnInit {
  @Input() data: any[];
  @Input() columns: Column[];
  @Input() button?: string;

  @Output() buttonClickedEvent = new EventEmitter();
  @Output() rowClickedEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  public onButtonClickedEvent() {
    this.buttonClickedEvent.emit();
  }

  public onRowClickedEvent(event: any) {
    this.rowClickedEvent.emit(event);
  }

  public getItemByKeyName(objectIndex: number, keyIndex: number): string {
    let currentObject = this.data[objectIndex];
    let key = this.columns[keyIndex]?.name;

    if (this.columns.find((x) => x.name === key)) {
      return currentObject[key] || '-';
    } else {
      return 'no-display-key';
    }
  }
}
