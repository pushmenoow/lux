import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

// models' imports
import { Table } from 'src/app/models/table';
import { TableService } from 'src/app/services/table.service';
import { TargetTable } from 'src/app/models/tables-list';
import { Album, AlbumColumns } from 'src/app/models/album';
import { Annotation, AnnotationColumns } from 'src/app/models/annotation';
import { Photo, PhotoColumns } from 'src/app/models/photo';
import { Post, PostColumns } from 'src/app/models/post';
import { Todo, TodoColumns } from 'src/app/models/todo';
import { User, UserColumns } from 'src/app/models/user';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.scss']
})

export class TableDetailComponent implements OnInit {
  public dataArray: any;
  public columnsSchema: any;
  public displayedColumns: string[] = [];

  public albumsArray = new MatTableDataSource<Album>();
  public annotationsArray = new MatTableDataSource<Annotation>();
  public photosArray = new MatTableDataSource<Photo>();
  public postsArray = new MatTableDataSource<Post>();
  public todosArray = new MatTableDataSource<Todo>();
  public usersArray = new MatTableDataSource<User>();

  public valid: any = {};

  public table: Table = {
    id: 0,
    name: ""
  };

  private urlPart: string = '';

  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private route: ActivatedRoute,
    private tableService: TableService,
    private location: Location
  ) { }

  public ngOnInit(): void {
    this.getTable().subscribe((res: any) => {
      this.dataArray.data = res;
    });
  }

  public getTable(): Observable<any> {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);

    this.tableService.getTable(id)
      .subscribe(table => this.table = table);

    switch (id) {
      case 1:
        this.displayedColumns = AlbumColumns.map((column) => column.key);
        this.dataArray = this.albumsArray;
        this.columnsSchema = AlbumColumns;
        this.urlPart = 'albums/';
        break;
      case 2:
        this.displayedColumns = AnnotationColumns.map((column) => column.key);
        this.dataArray = this.annotationsArray;
        this.columnsSchema = AnnotationColumns;
        this.urlPart = 'comments/';
        break;
      case 3:
        this.displayedColumns = PhotoColumns.map((column) => column.key);
        this.dataArray = this.photosArray;
        this.columnsSchema = PhotoColumns;
        this.urlPart = 'photos/';
        break;
      case 4:
        this.displayedColumns = PostColumns.map((column) => column.key);
        this.dataArray = this.postsArray;
        this.columnsSchema = PostColumns;
        this.urlPart = 'posts/';
        break;
      case 5:
        this.displayedColumns = TodoColumns.map((column) => column.key);
        this.dataArray = this.todosArray;
        this.columnsSchema = TodoColumns;
        this.urlPart = 'todos/';
        break;
      case 6:
        this.displayedColumns = UserColumns.map((column) => column.key);
        this.dataArray = this.usersArray;
        this.columnsSchema = UserColumns;
        this.urlPart = 'users/';
        break;
    }

    return this.http.get(TableService.getServiceUrl() + this.table.name);
  }

  public addRow(tableId: number): void {
    let isEdit: boolean = true;

    switch (tableId) {
      case 1:
        this.albumsArray.data = [new Album(isEdit), ...this.albumsArray.data];
        break;
      case 2:
        this.annotationsArray.data = [new Annotation(isEdit), ... this.annotationsArray.data];
        break;
      case 3:
        this.photosArray.data = [new Photo(isEdit), ...this.photosArray.data];
        break;
      case 4:
        this.postsArray.data = [new Post(isEdit), ...this.postsArray.data];
        break;
      case 5:
        this.todosArray.data = [new Todo(isEdit), ...this.todosArray.data];
        break;
      case 6:
      // this.usersArray.data = [new User(isEdit), ...this.usersArray.data]; 
      // break;
      default: console.log('error: addRow skipped');
    }
  }

  public removeSelectedRows() {
    const rows = this.dataArray.data.filter((r: TargetTable) => r.isSelected);
    this.dialog
      .open(ConfirmDialogComponent)
      .afterClosed()
      .subscribe((confirm) => {
        if (confirm) {
          this.tableService.deleteRows(rows, this.urlPart).subscribe(() => {
            this.dataArray.data = this.dataArray.data.filter(
              (r: TargetTable) => !r.isSelected
            );
          });
        }
      });
  }

  public editSelectedRows() {
    const rows = this.dataArray.data.filter((r: TargetTable) => r.isSelected);
    this.dialog
      .open(ConfirmDialogComponent)
      .afterClosed()
      .subscribe((confirm) => {
        if (confirm) {
          this.tableService.editRows(rows, this.urlPart).subscribe(() => {
            this.dataArray.data = this.dataArray.data.filter(
              (r: TargetTable) => !r.isSelected
            );
          });
        }
      });
  }

  public editRow(row: TargetTable): void {
    if (row.id === 0) {
      this.tableService.addRow(row, this.urlPart).subscribe((newRow: TargetTable) => {
        row.id = newRow.id;
        row.isEdit = false;
      });
    } else {
      this.tableService.updateRow(row, this.urlPart).subscribe(() => (row.isEdit = false));
    }
  }

  public removeRow(rowId: any): void {
    this.tableService.deleteRow(rowId, this.urlPart).subscribe(() => {
      this.dataArray.data = this.dataArray.data.filter(
        (r: TargetTable) => r.id !== rowId
      );
    });
  }

  public inputHandler(e: any, id: number, key: string): void {
    if (!this.valid[id]) {
      this.valid[id] = {};
    }
    this.valid[id][key] = e.target.validity.valid;
  }

  public disableSubmit(id: number): boolean {
    if (this.valid[id]) {
      return Object.values(this.valid[id]).some((item) => item === false);
    }
    return false;
  }

  public goBack(): void {
    this.location.back();
  }
}