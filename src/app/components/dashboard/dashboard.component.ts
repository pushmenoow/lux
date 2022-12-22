import { Component, OnInit } from '@angular/core';
import { Table } from '../../models/table';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public tables: Table[] = [];

  constructor(private tableService: TableService) { }

  public ngOnInit(): void {
    this.getTables();
  }

  // get slice list of popular tables
  public getTables(): void {
    this.tableService.getTables()
      .subscribe(tables => this.tables = tables.slice(1, 5));
  }

}
