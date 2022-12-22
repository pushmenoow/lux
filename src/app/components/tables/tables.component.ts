import { Component, OnInit } from '@angular/core';

import { Table } from '../../models/table';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  public tables: Table[] = [];

  constructor(private tableService: TableService) { }

  public ngOnInit(): void {
    this.getTables();
  }

  // get list of all tables
  public getTables(): void {
    this.tableService.getTables()
      .subscribe(tables => this.tables = tables);
  }
}
