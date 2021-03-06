import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() autok: any;
  @Input() foglalo: string;
  @Output() foglalas = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
