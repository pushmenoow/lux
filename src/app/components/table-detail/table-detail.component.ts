import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

// services' imports
import { TableService } from '../../services/table.service';
import { AlbumsService } from 'src/app/services/albums.service';
import { CommentsService } from 'src/app/services/comments.service';
import { PhotosService } from 'src/app/services/photos.service';
import { PostsService } from 'src/app/services/posts.service';
import { TodosService } from 'src/app/services/todos.service';
import { UsersService } from 'src/app/services/users.service';

// models' imports
import { Table } from '../../models/table';
import { Albums, AlbumsColumns } from 'src/app/models/albums';
import { Comments, CommentsColumns } from 'src/app/models/comments';
import { Photos, PhotosColumns } from 'src/app/models/photos';
import { Posts, PostsColumns } from 'src/app/models/posts';
import { Todos, TodosColumns } from 'src/app/models/todos';
import { Users, UsersColumns } from 'src/app/models/users';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.scss']
})

export class TableDetailComponent implements OnInit {

  public dataArray: any;
  public columnsSchema: any;
  public displayedColumns: string[] = [];

  public albumsArray = new MatTableDataSource<Albums>();
  public commentsArray = new MatTableDataSource<Comments>();
  public photosArray = new MatTableDataSource<Photos>();
  public postsArray = new MatTableDataSource<Posts>();
  public todosArray = new MatTableDataSource<Todos>();
  public usersArray = new MatTableDataSource<Users>();

  valid: any = {};

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  public table: Table = {
    id: 0,
    name: ""
  };

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private tableService: TableService,
    private albumsService: AlbumsService,
    private commentsService: CommentsService,
    private photosService: PhotosService,
    private postsService: PostsService,
    private todosService: TodosService,
    private usersService: UsersService,
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
        this.displayedColumns = AlbumsColumns.map((column) => column.key);
        this.dataArray = this.postsArray;
        this.columnsSchema = AlbumsColumns;
        break;
      case 2:
        this.displayedColumns = CommentsColumns.map((column) => column.key);
        this.dataArray = this.commentsArray;
        this.columnsSchema = CommentsColumns;
        break;
      case 3:
        this.displayedColumns = PhotosColumns.map((column) => column.key);
        this.dataArray = this.postsArray;
        this.columnsSchema = PhotosColumns;
        break;
      case 4:
        this.displayedColumns = PostsColumns.map((column) => column.key);
        this.dataArray = this.postsArray;
        this.columnsSchema = PostsColumns;
        break;
      case 5:
        this.displayedColumns = TodosColumns.map((column) => column.key);
        this.dataArray = this.postsArray;
        this.columnsSchema = TodosColumns;
        break;
      case 6:
        this.displayedColumns = UsersColumns.map((column) => column.key);
        this.dataArray = this.postsArray;
        this.columnsSchema = UsersColumns;
        break;
    }

    return this.http.get(this.tableService.getServiceUrl() + this.table.name);
  }

  public editRowSwitcher(tableId: number, row: any): void {
    switch (tableId) {
      case 1:
        // this.editRowAlbums(row);
        break;
      case 2:
        // this.editRowComments(row);
        break;
      case 3:
        // this.editRowPhotos(row);
        break;
      case 4:
        this.editRowPosts(row);
        break;
      case 5:
        // this.editRowTodos(row);
        break;
      case 6:
        // this.editRowUsers(row);
        break;
      default:
        console.log('error: editRowSwitcher skipped');
    }
  }

  public addRowSwitcher(tableId: number): void {
    switch (tableId) {
      case 1:
        // this.addRowAlbums();
        break;
      case 2:
        // this.addRowComments();
        break;
      case 3:
        // this.addRowPhotos();
        break;
      case 4:
        this.addRowPosts();
        break;
      case 5:
        // this.addRowTodos();
        break;
      case 6:
        // this.addRowUsers();
        break;
      default:
        console.log('error: addRowSwitcher skipped');
    }
  }

  public removeRowSwitcher(tableId: number, rowId: any): void {
    switch (tableId) {
      case 1:
        // this.addRowAlbums();
        break;
      case 2:
        // this.addRowComments();
        break;
      case 3:
        // this.addRowPhotos();
        break;
      case 4:
        this.removeRowPosts(rowId);
        break;
      case 5:
        // this.addRowTodos();
        break;
      case 6:
        // this.addRowUsers();
        break;
      default:
        console.log('error: addRowSwitcher skipped');
    }
  }

  

  removeSelectedRows() {
    // const users = this.dataArray.data.filter((p: TablesList.Posts) => p.isSelected);
    // this.dialog
    //   .open(ConfirmDialogComponent)
    //   .afterClosed()
    //   .subscribe((confirm) => {
    //     if (confirm) {
    //       this.tableService.deleteUsers(users).subscribe(() => {
    //         this.dataArray.data = this.dataArray.data.filter(
    //           (p: TablesList.Posts) => !p.isSelected
    //         );
    //       });
    //     }
    //   });
  }

  public inputHandler(e: any, id: number, key: string) {
    if (!this.valid[id]) {
      this.valid[id] = {};
    }
    this.valid[id][key] = e.target.validity.valid;
  }

  public disableSubmit(id: number) {
    if (this.valid[id]) {
      return Object.values(this.valid[id]).some((item) => item === false);
    }
    return false;
  }

  

  public goBack(): void {
    this.location.back();
  }

  public addRowPosts(): void {
    const newRow: Posts = {
      userId: 0,
      id: 0,
      title: '',
      body: '',
      isSelected: false,
      isEdit: true
    }

    this.postsArray.data = [newRow, ...this.postsArray.data];
  }

  public editRowPosts(row: Posts) {
    if (row.id === 0) {
      this.postsService.addPost(row).subscribe((newPost: Posts) => {
        row.id = newPost.id;
        row.isEdit = false;
      });
    } else {
      this.postsService.updatePost(row).subscribe(() => (row.isEdit = false));
    }
  }

  public removeRowPosts(rowId: any) {
    this.postsService.deletePost(rowId).subscribe(() => {
      this.dataArray.data = this.dataArray.data.filter(
        (p: Posts) => p.id !== rowId
      );
    });
  }

}
